#!/usr/bin/env node

// Bundle size analysis script for performance optimization
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface BundleStats {
  file: string;
  size: number;
  gzippedSize?: number;
  type: 'js' | 'css' | 'html' | 'other';
}

interface AnalysisReport {
  totalSize: number;
  totalGzippedSize: number;
  jsSize: number;
  cssSize: number;
  largestFiles: BundleStats[];
  recommendations: string[];
}

class BundleAnalyzer {
  private distPath: string;
  private stats: BundleStats[] = [];

  constructor(distPath: string = './dist') {
    this.distPath = distPath;
  }

  // Get file size in bytes
  private getFileSize(filePath: string): number {
    try {
      return fs.statSync(filePath).size;
    } catch (error) {
      return 0;
    }
  }

  // Get gzipped size estimate
  private async getGzippedSize(filePath: string): Promise<number> {
    try {
      const { stdout } = await execAsync(`gzip -c "${filePath}" | wc -c`);
      return parseInt(stdout.trim());
    } catch (error) {
      // Fallback estimation: ~70% compression ratio
      return Math.round(this.getFileSize(filePath) * 0.3);
    }
  }

  // Determine file type
  private getFileType(fileName: string): 'js' | 'css' | 'html' | 'other' {
    const ext = path.extname(fileName).toLowerCase();
    switch (ext) {
      case '.js':
      case '.mjs':
        return 'js';
      case '.css':
        return 'css';
      case '.html':
        return 'html';
      default:
        return 'other';
    }
  }

  // Recursively scan directory for files
  private async scanDirectory(dirPath: string): Promise<void> {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        await this.scanDirectory(fullPath);
      } else if (entry.isFile()) {
        const size = this.getFileSize(fullPath);
        const gzippedSize = await this.getGzippedSize(fullPath);
        const type = this.getFileType(entry.name);
        
        this.stats.push({
          file: path.relative(this.distPath, fullPath),
          size,
          gzippedSize,
          type
        });
      }
    }
  }

  // Format bytes to human readable
  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Generate optimization recommendations
  private generateRecommendations(stats: BundleStats[]): string[] {
    const recommendations: string[] = [];
    const largeFiles = stats.filter(s => s.size > 100 * 1024); // Files > 100KB
    const jsFiles = stats.filter(s => s.type === 'js');
    const cssFiles = stats.filter(s => s.type === 'css');

    // Large file recommendations
    if (largeFiles.length > 0) {
      recommendations.push(`🔍 Found ${largeFiles.length} files larger than 100KB - consider code splitting`);
    }

    // JavaScript specific recommendations
    const totalJSSize = jsFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalJSSize > 500 * 1024) { // > 500KB
      recommendations.push('📦 JavaScript bundle is large - implement dynamic imports and tree shaking');
    }

    // CSS specific recommendations
    const totalCSSSize = cssFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalCSSSize > 100 * 1024) { // > 100KB
      recommendations.push('🎨 CSS bundle is large - consider CSS splitting and unused style removal');
    }

    // Compression recommendations
    const lowCompressionFiles = stats.filter(s => 
      s.gzippedSize && s.size > 0 && (s.gzippedSize / s.size) > 0.5
    );
    if (lowCompressionFiles.length > 0) {
      recommendations.push('🗜️ Some files have low compression ratios - enable gzip/brotli compression');
    }

    // General recommendations
    recommendations.push('📊 Use webpack-bundle-analyzer for detailed analysis');
    recommendations.push('🚀 Consider implementing service worker caching');
    recommendations.push('🖼️ Optimize images to WebP/AVIF formats');
    recommendations.push('⚡ Enable resource preloading for critical assets');

    return recommendations;
  }

  // Perform analysis
  async analyze(): Promise<AnalysisReport> {
    console.log(`🔍 Analyzing bundle in ${this.distPath}...`);

    if (!fs.existsSync(this.distPath)) {
      throw new Error(`Distribution directory not found: ${this.distPath}`);
    }

    await this.scanDirectory(this.distPath);

    const totalSize = this.stats.reduce((sum, file) => sum + file.size, 0);
    const totalGzippedSize = this.stats.reduce((sum, file) => sum + (file.gzippedSize || 0), 0);
    const jsSize = this.stats.filter(s => s.type === 'js').reduce((sum, file) => sum + file.size, 0);
    const cssSize = this.stats.filter(s => s.type === 'css').reduce((sum, file) => sum + file.size, 0);
    
    // Sort by size and get largest files
    const largestFiles = this.stats
      .sort((a, b) => b.size - a.size)
      .slice(0, 10);

    const recommendations = this.generateRecommendations(this.stats);

    return {
      totalSize,
      totalGzippedSize,
      jsSize,
      cssSize,
      largestFiles,
      recommendations
    };
  }

  // Generate detailed report
  generateReport(analysis: AnalysisReport): string {
    let report = '📦 BUNDLE SIZE ANALYSIS REPORT\n';
    report += '================================\n\n';

    // Summary
    report += '📊 SUMMARY\n';
    report += '-----------\n';
    report += `Total Bundle Size: ${this.formatBytes(analysis.totalSize)}\n`;
    report += `Total Gzipped Size: ${this.formatBytes(analysis.totalGzippedSize)}\n`;
    report += `JavaScript Size: ${this.formatBytes(analysis.jsSize)}\n`;
    report += `CSS Size: ${this.formatBytes(analysis.cssSize)}\n`;
    report += `Compression Ratio: ${Math.round((analysis.totalGzippedSize / analysis.totalSize) * 100)}%\n\n`;

    // Size thresholds
    const budgets = {
      js: 250 * 1024, // 250KB
      css: 50 * 1024,  // 50KB
      total: 500 * 1024 // 500KB
    };

    report += '🎯 PERFORMANCE BUDGETS\n';
    report += '----------------------\n';
    report += `JavaScript: ${this.formatBytes(analysis.jsSize)} / ${this.formatBytes(budgets.js)} `;
    report += analysis.jsSize > budgets.js ? '❌ EXCEEDED\n' : '✅ OK\n';
    report += `CSS: ${this.formatBytes(analysis.cssSize)} / ${this.formatBytes(budgets.css)} `;
    report += analysis.cssSize > budgets.css ? '❌ EXCEEDED\n' : '✅ OK\n';
    report += `Total: ${this.formatBytes(analysis.totalSize)} / ${this.formatBytes(budgets.total)} `;
    report += analysis.totalSize > budgets.total ? '❌ EXCEEDED\n' : '✅ OK\n\n';

    // Largest files
    report += '📋 LARGEST FILES\n';
    report += '----------------\n';
    analysis.largestFiles.forEach((file, index) => {
      const compressionRatio = file.gzippedSize ? 
        Math.round((file.gzippedSize / file.size) * 100) : 0;
      report += `${index + 1}. ${file.file}\n`;
      report += `   Size: ${this.formatBytes(file.size)} (${this.formatBytes(file.gzippedSize || 0)} gzipped, ${compressionRatio}%)\n`;
      report += `   Type: ${file.type.toUpperCase()}\n\n`;
    });

    // Recommendations
    report += '💡 OPTIMIZATION RECOMMENDATIONS\n';
    report += '--------------------------------\n';
    analysis.recommendations.forEach(rec => {
      report += `${rec}\n`;
    });

    return report;
  }
}

// CLI execution
async function main() {
  try {
    const analyzer = new BundleAnalyzer();
    const analysis = await analyzer.analyze();
    const report = analyzer.generateReport(analysis);
    
    console.log(report);

    // Save report to file
    const reportPath = './bundle-analysis-report.txt';
    fs.writeFileSync(reportPath, report);
    console.log(`\n📝 Report saved to: ${reportPath}`);

    // Exit with error code if budgets exceeded
    const budgets = {
      js: 250 * 1024,
      css: 50 * 1024,
      total: 500 * 1024
    };

    const budgetExceeded = 
      analysis.jsSize > budgets.js ||
      analysis.cssSize > budgets.css ||
      analysis.totalSize > budgets.total;

    if (budgetExceeded) {
      console.log('\n⚠️  Performance budgets exceeded!');
      process.exit(1);
    } else {
      console.log('\n✅ All performance budgets met!');
    }

  } catch (error) {
    console.error('❌ Analysis failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { BundleAnalyzer };
export default BundleAnalyzer;
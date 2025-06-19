#!/usr/bin/env node

// Script to run schema validation audit and generate optimization report
import { schemaAudit } from '../utils/schemaAudit';
import { validator } from '../utils/schemaValidator';

console.log('🔍 Starting Schema Markup Audit...\n');

// Run complete audit
const auditResults = schemaAudit.runCompleteAudit();

console.log('📊 SCHEMA VALIDATION RESULTS');
console.log('===============================\n');

// Display results for each schema type
Object.entries(auditResults).forEach(([schemaType, result]: [string, any]) => {
  console.log(`${schemaType.toUpperCase()} SCHEMA:`);
  console.log(`Status: ${result.isValid ? '✅ Valid' : '❌ Invalid'}`);
  
  if (result.errors.length > 0) {
    console.log('🚨 Errors:');
    result.errors.forEach((error: string) => console.log(`  - ${error}`));
  }
  
  if (result.warnings.length > 0) {
    console.log('⚠️  Warnings:');
    result.warnings.forEach((warning: string) => console.log(`  - ${warning}`));
  }
  
  console.log('');
});

// Generate optimization recommendations
const recommendations = schemaAudit.generateOptimizationRecommendations(auditResults);

console.log('🚀 OPTIMIZATION RECOMMENDATIONS');
console.log('=================================\n');

if (recommendations.length === 0) {
  console.log('✅ All schemas are optimally configured!');
} else {
  recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec.component} Schema (Priority: ${rec.priority.toUpperCase()})`);
    rec.recommendations.forEach((item: any) => {
      console.log(`   Issue: ${item.issue}`);
      console.log(`   Solution: ${item.solution}\n`);
    });
  });
}

// Summary statistics
const totalSchemas = Object.keys(auditResults).length;
const validSchemas = Object.values(auditResults).filter((result: any) => result.isValid).length;
const totalWarnings = Object.values(auditResults).reduce((acc: number, result: any) => acc + result.warnings.length, 0);
const totalErrors = Object.values(auditResults).reduce((acc: number, result: any) => acc + result.errors.length, 0);

console.log('📈 AUDIT SUMMARY');
console.log('=================');
console.log(`Total Schemas Audited: ${totalSchemas}`);
console.log(`Valid Schemas: ${validSchemas}/${totalSchemas} (${Math.round((validSchemas/totalSchemas)*100)}%)`);
console.log(`Total Warnings: ${totalWarnings}`);
console.log(`Total Errors: ${totalErrors}`);

if (validSchemas === totalSchemas && totalWarnings === 0) {
  console.log('\n🎉 Perfect! All schemas are valid and optimized.');
} else if (totalErrors === 0) {
  console.log('\n✅ Good! All schemas are valid, but some optimizations are recommended.');
} else {
  console.log('\n⚠️  Action needed! Some schemas have errors that need to be fixed.');
}

console.log('\n🔧 NEXT STEPS:');
console.log('1. Fix any reported errors in the schema markup');
console.log('2. Implement recommended optimizations for better SEO');
console.log('3. Test schemas using Google\'s Rich Results Test');
console.log('4. Monitor search console for rich snippet performance');

export { auditResults, recommendations };
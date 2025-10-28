#!/usr/bin/env python3
import re
import os
import glob

def fix_jsx_comparisons(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix > followed by numbers in text content
    content = re.sub(r'>(\d+)', r' meer dan \1', content)

    # Fix < followed by numbers in text content
    content = re.sub(r'<(\d+)', r' minder dan \1', content)

    # Fix other special comparison operators
    content = content.replace('≤', ' maximaal ')
    content.replace('≥', ' minimaal ')

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Find all tsx files in seo directory
seo_dir = '/home/marvin/Documenten/staycoolairconL/src/pages/seo'
tsx_files = glob.glob(f'{seo_dir}/**/*.tsx', recursive=True)

fixed_count = 0
for file_path in tsx_files:
    if fix_jsx_comparisons(file_path):
        fixed_count += 1
        print(f'Fixed: {os.path.basename(file_path)}')

print(f'\nTotal files fixed: {fixed_count}/{len(tsx_files)}')

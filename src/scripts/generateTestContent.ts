import dotenv from 'dotenv';
import { generateContent } from '../utils/generateContent';
import { createLocationContent } from '../utils/supabase';

// Load environment variables
dotenv.config();

async function main() {
  try {
    console.log('Generating content for Maastricht...');
    
    // Generate content for Maastricht as a test
    const content = await generateContent(
      'Maastricht',
      'Zuid-Limburg',
      120227,
      '6211-6229'
    );

    console.log('Content generated successfully. Saving to database...');

    // Save to Supabase
    const savedContent = await createLocationContent({
      ...content,
      metadata: {
        written_by: 'StayCool Team',
        last_updated: new Date().toISOString()
      }
    });
    
    console.log('Content saved successfully:', savedContent);
  } catch (error) {
    console.error('Error generating test content:', error);
    process.exit(1);
  }
}

// Run the script
main().catch((error: Error) => {
  console.error('Script failed:', error);
  process.exit(1);
});

import { createClient } from '@supabase/supabase-js';
import type { LocationContent } from '../types/location';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

export async function getLocationContent(city: string): Promise<LocationContent | null> {
  console.log('Fetching content for city:', city);
  try {
    const { data, error } = await supabase
      .from('location_content')
      .select(`
        id,
        city,
        region,
        postal_codes,
        population,
        content,
        seo,
        metadata,
        last_updated
      `)
      .eq('city', city)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error in getLocationContent:', error);
    return null;
  }
}

export async function createLocationContent(
  content: Omit<LocationContent, 'id' | 'last_updated'>
): Promise<LocationContent> {
  console.log('Creating content for city:', content.city);
  try {
    const timestamp = new Date().toISOString();
    const { data, error } = await supabase
      .from('location_content')
      .insert([{
        ...content,
        metadata: {
          written_by: 'StayCool Team',
          last_updated: timestamp
        },
        last_updated: timestamp
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Created content:', data);
    return data;
  } catch (error) {
    console.error('Error in createLocationContent:', error);
    throw error;
  }
}

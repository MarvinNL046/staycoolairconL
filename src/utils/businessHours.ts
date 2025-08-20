/**
 * Check if the business is currently open
 * Business hours: Monday-Thursday 09:00-17:00, Friday 09:00-16:00
 */
export const isBusinessOpen = (): boolean => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const time = hour + minutes / 60;
  
  // Closed on weekends
  if (day === 0 || day === 6) {
    return false;
  }
  
  // Monday to Thursday: 09:00 - 17:00
  if (day >= 1 && day <= 4) {
    return time >= 9 && time < 17;
  }
  
  // Friday: 09:00 - 16:00
  if (day === 5) {
    return time >= 9 && time < 16;
  }
  
  return false;
};

/**
 * Get the next opening time
 */
export const getNextOpeningTime = (): string => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const time = hour + minutes / 60;
  
  // If it's a weekday before opening hours
  if (day >= 1 && day <= 5 && time < 9) {
    return "vandaag om 09:00 uur";
  }
  
  // If it's Monday-Thursday after closing
  if (day >= 1 && day <= 4 && time >= 17) {
    return "morgen om 09:00 uur";
  }
  
  // If it's Friday after closing or weekend
  if ((day === 5 && time >= 16) || day === 6 || day === 0) {
    return "maandag om 09:00 uur";
  }
  
  return "vandaag om 09:00 uur";
};

/**
 * Get business hours text
 */
export const getBusinessHoursText = (): string => {
  return "ma t/m do: 09:00 - 17:00, vr: 09:00 - 16:00";
};
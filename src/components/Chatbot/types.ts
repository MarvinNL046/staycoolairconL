export interface ChatbotMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: QuickReply[];
}

export interface QuickReply {
  text: string;
  value: string;
  icon?: string;
}

export type ChatbotFlow = 'sales' | 'support';

export type SalesStep = 
  | 'welcome'
  | 'main_question'
  | 'property_type'
  | 'business_type'
  | 'room_count'
  | 'budget'
  | 'brand_preference'
  | 'timeline'
  | 'additional_interests'
  | 'choose_contact_method'
  | 'contact'
  | 'confirmation';

export type SupportStep =
  | 'problem_type'
  | 'no_cooling'
  | 'leaking'
  | 'noise'
  | 'not_starting'
  | 'contact_technician'
  | 'support_form';

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  customerType?: string;
  propertyType?: string;
  businessType?: string;
  roomCount?: string;
  budget?: string;
  brandPreference?: string;
  timeline?: string;
  additionalInterests?: string;
  problemType?: string;
  problemDescription?: string;
}

export interface ChatbotState {
  messages: ChatbotMessage[];
  currentFlow: ChatbotFlow | null;
  currentStep: SalesStep | SupportStep | null;
  contactData: Partial<ContactData>;
  isLoading: boolean;
}
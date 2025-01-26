interface Window {
  gtag?: (
    command: 'event',
    action: string,
    params: {
      event_category: string;
      event_label: string;
      value?: number;
      non_interaction: boolean;
      metric_id: string;
      metric_value: number;
      [key: string]: any;
    }
  ) => void;
  dataLayer?: any[];
}

declare const gtag: Window['gtag'];

interface GtagEventParams {
  event_category: string;
  event_label: string;
  value?: number;
  non_interaction: boolean;
  metric_id: string;
  metric_value: number;
  [key: string]: any;
}

type GtagFunction = {
  (command: 'js', date: Date): void;
  (command: 'config', targetId: string, params?: GtagEventParams): void;
  (command: 'event', action: string, params: GtagEventParams): void;
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: GtagFunction;
  }
}

export { GtagEventParams, GtagFunction };

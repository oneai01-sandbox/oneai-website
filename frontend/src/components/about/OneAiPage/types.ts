export interface TimelineEvent {
  year: string;
  period?: string;
  title: string;
  description: string;
  tag?: string;
}

export interface ValueCardItem {
  tag: string;
  title: string;
  description: string;
  points: string[];
}


export type TimelineEvent = {
  id: string;
  year: number;
  description: string;
};

export type Segment = {
  id: string;
  topic: string;
  events: TimelineEvent[];
};

export type GetActivityParams = {
  timeOfDay?: 'MORNING' | 'DAY' | 'EVENING' | 'NOIGHT';
  peopleCount?: '1-3' | '4-10' | '10-20' | '20+';
  mood?: 'GOOD' | 'NEUTRAL' | 'BAD';
  budget?: '0-1000' | '1000-5000' | '5000-10000' | '10000+';
  freeTime?: '0-30' | '30-60' | '60-180' | '180+';
};

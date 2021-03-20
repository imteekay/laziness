export type Percentages = {
  prPercentage: number;
  masterPercentage: number;
};

export type Coverage = {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
};

export type CoverageTypes = {
  ['lines']: Coverage;
  ['functions']: Coverage;
  ['statements']: Coverage;
  ['branches']: Coverage;
};

export type AllCoverageTypes = keyof CoverageTypes;

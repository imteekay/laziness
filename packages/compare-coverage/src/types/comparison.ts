import { AllCoverageTypes, Percentages } from './coverage';

export type CoverageComparisonResult = {
  [key: string]: {
    [key in AllCoverageTypes]: string;
  };
};

export type CoverageComparison = {
  [key: string]: {
    [key in AllCoverageTypes]: Percentages;
  };
};

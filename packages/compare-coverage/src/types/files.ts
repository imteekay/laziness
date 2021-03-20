import { CoverageTypes } from './coverage';

export type CoverageFiles = {
  [key: string]: CoverageTypes;
};

export type DiffFiles = string[];

export type Files = {
  coverageSummary: CoverageFiles;
  modifiedFiles: DiffFiles;
  createdFiles: DiffFiles;
};

export type CompareParams = {
  coverageFiles: CoverageFiles;
  coverageFilesMaster: CoverageFiles;
  coverageFile: string;
};

export type AllCoverageFiles = {
  coverageFiles: CoverageFiles;
  coverageFilesMaster: CoverageFiles;
};

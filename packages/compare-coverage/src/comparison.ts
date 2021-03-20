import {
  Percentages,
  AllCoverageFiles,
  CoverageComparison,
  CoverageComparisonResult,
} from './types';

import { getCoveragePercentages } from './parser';

enum Coverage {
  Lines = 'lines',
  Functions = 'functions',
  Statements = 'statements',
  Branches = 'branches',
}

export function buildCoverageComparison({
  coverageFiles,
  coverageFilesMaster,
}: AllCoverageFiles): CoverageComparison {
  return Object.keys(coverageFiles).reduce((coverages, coverageFile) => {
    const isOkFor = getCoveragePercentages({
      coverageFiles,
      coverageFilesMaster,
      coverageFile,
    });

    return {
      ...coverages,
      [coverageFile]: {
        [Coverage.Lines]: isOkFor(Coverage.Lines),
        [Coverage.Functions]: isOkFor(Coverage.Functions),
        [Coverage.Statements]: isOkFor(Coverage.Statements),
        [Coverage.Branches]: isOkFor(Coverage.Branches),
      },
    };
  }, {});
}

function getResultComparison({ prPercentage, masterPercentage }: Percentages) {
  return prPercentage >= masterPercentage ? '👍' : `${masterPercentage}% --> ${prPercentage}%: 👎`;
}

export function buildComparisonResult(
  coverageComparison: CoverageComparison,
): CoverageComparisonResult {
  return Object.keys(coverageComparison).reduce((coverages, coverageFile) => {
    const fileCoverages = coverageComparison[coverageFile];
    return {
      ...coverages,
      [coverageFile]: {
        [Coverage.Lines]: getResultComparison(fileCoverages[Coverage.Lines]),
        [Coverage.Functions]: getResultComparison(fileCoverages[Coverage.Functions]),
        [Coverage.Statements]: getResultComparison(fileCoverages[Coverage.Statements]),
        [Coverage.Branches]: getResultComparison(fileCoverages[Coverage.Branches]),
      },
    };
  }, {});
}

import { DangerDSLType } from '../node_modules/danger/distribution/dsl/DangerDSL';
import { Paths } from './types';
import { buildCoverageComparison, buildComparisonResult } from './comparison';
import { getDiffFilesFor } from './parser';

declare const danger: DangerDSLType;

export declare function message(message: string): void;
export declare function warn(message: string): void;
export declare function fail(message: string): void;
export declare function markdown(message: string): void;

async function compareCoverage({ prPath, masterPath }: Paths): Promise<void> {
  const coverageFiles = await getDiffFilesFor(prPath);
  const coverageFilesMaster = await getDiffFilesFor(masterPath);

  const coverageComparison = buildCoverageComparison({
    coverageFiles,
    coverageFilesMaster,
  });

  const comparisonResult = buildComparisonResult(coverageComparison);

  console.log(comparisonResult);
}

const prPath = '../src/tests/coverage-summary.json';
const masterPath = '../src/tests/coverage-summary-master.json';
compareCoverage({ prPath, masterPath });

export default compareCoverage;

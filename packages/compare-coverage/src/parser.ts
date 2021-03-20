import { promises as fs } from 'fs';
import { resolve } from 'path';
import { AllCoverageTypes, CoverageFiles, Files, CompareParams, Percentages } from './types';

const dangerMock = {
  git: {
    modified_files: [
      '/Users/leandrotk/projects/5a/indicaai-pwa/app/containers/LeadForm/LeadFormView.js',
    ],
    created_files: ['/Users/leandrotk/projects/5a/indicaai-pwa/app/containers/LeadForm/actions.js'],
  },
  github: {
    utils: {
      fileContents: (content: string) => fs.readFile(content, 'utf8'),
    },
  },
};

async function readFiles(coverageSummaryPath: string): Promise<Files> {
  const modifiedFiles = dangerMock.git.modified_files; // danger.git.modified_files;
  const createdFiles = dangerMock.git.created_files; // danger.git.created_files;
  // const coverageSummary = await danger.github.utils.fileContents(
  //   resolve(__dirname, './tests/coverage-summary.json'),
  // );
  const coverageSummary = await dangerMock.github.utils.fileContents(coverageSummaryPath);

  return {
    coverageSummary: JSON.parse(coverageSummary),
    modifiedFiles,
    createdFiles,
  };
}

function getFilesCoverage({ coverageSummary, modifiedFiles, createdFiles }: Files): CoverageFiles {
  const files = [...modifiedFiles, ...createdFiles];

  function filesInDiff(finalFiles, file) {
    return files.includes(file) ? { ...finalFiles, [file]: coverageSummary[file] } : finalFiles;
  }

  return Object.keys(coverageSummary).reduce(filesInDiff, {});
}

export async function getDiffFilesFor(path: string): Promise<CoverageFiles> {
  const coverageSummaryPath = resolve(__dirname, path);
  const files = await readFiles(coverageSummaryPath);
  return getFilesCoverage(files);
}

export function getCoveragePercentages({
  coverageFiles,
  coverageFilesMaster,
  coverageFile,
}: CompareParams) {
  return function (coverageType: AllCoverageTypes): Percentages {
    const prPercentage = coverageFiles[coverageFile][coverageType].pct;
    const masterPercentage = coverageFilesMaster[coverageFile][coverageType].pct;
    return {
      prPercentage,
      masterPercentage,
    };
  };
}

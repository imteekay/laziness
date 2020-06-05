export type TemplateType = string;
export type Command = string | null;
export type FilePath = string;

export type NewTestProps = {
  content: string;
  componentName: string;
};

export type WriteProps = {
  filePath: string;
  newTestContent: string;
};

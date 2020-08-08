export type PropAttrs = {
  type: string;
  required: boolean;
};

export type Result = {
  [key: string]: PropAttrs;
};

export type PropMapperType = {
  [key: string]: string;
};

export type TemplateParams = {
  componentName: string;
  types: Result;
};

export type Shapes = { [key: string]: Result };

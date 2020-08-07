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

export type FieldPropertiesType = {
  field: HTMLFormElement;
  attribute: string;
  attributeValue: string;
};

export type CheckFieldPropertiesType = {
  field: HTMLFormElement;
  attribute: string;
  attributeValue: string | null;
};

export type ButtonFieldPropertiesType = {
  field: FieldButtonType;
  attribute: string;
  attributeValue: string;
};

export type FormFieldProperties =
  | FieldPropertiesType
  | CheckFieldPropertiesType
  | ButtonFieldPropertiesType;

export type FieldLabelType = HTMLFormElement | null;
export type FieldButtonType = HTMLButtonElement | null;
export type FormFieldType = string | null;

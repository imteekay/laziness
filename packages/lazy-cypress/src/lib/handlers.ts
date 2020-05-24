import { get } from './helpers';

type FieldPropertiesType = {
  field: HTMLFormElement;
  attribute: string;
  attributeValue: string;
};

type CheckFieldPropertiesType = {
  field: HTMLFormElement;
  attribute: string;
  attributeValue: string | null;
};

type ButtonFieldPropertiesType = {
  field: FieldButtonType;
  attribute: string;
  attributeValue: string;
};

type FormFieldProperties = FieldPropertiesType | CheckFieldPropertiesType | ButtonFieldPropertiesType;
type FieldLabelType = HTMLFormElement | null;
type FieldButtonType = HTMLButtonElement | null;
type FormFieldType = string | null;

enum FieldAttributes {
  Name = 'name',
  For = 'for',
  TestId = 'data-testid'
};

const getFormFields = (form: HTMLFormElement): HTMLFormElement[] =>
  [...form.querySelectorAll<HTMLFormElement>('input,textarea,select')];

const fieldTypes: string[] = [
  'text',
  'textarea',
  'search',
  'number',
  'email',
  'url',
  'password',
  'tel',
  'date'
];

const getSelectedOptionsValues = (field: HTMLFormElement): string[] =>
  [...field.selectedOptions].map((option: HTMLOptionElement) => option.value);

const getFormField = ({ field, attribute, attributeValue }: FormFieldProperties): FormFieldType => {
  if (field == null || attributeValue == null) return null;

  const fieldName: string = field.tagName.toLowerCase();
  const formField = get(fieldName)
    .withAttribute(attribute)
    .andValue(attributeValue);

  return formField;
}

const generateTest = (formFieldProperties: FormFieldProperties) => {
  const formField: FormFieldType = getFormField(formFieldProperties);

  if (formField == null) {
    return {
      forInput: (_: string): string => '',
      forRadioButton: (): string => '',
      forCheckbox: (): string => '',
      forSelect: (_: string): string => '',
      forMutipleSelect: (_: string): string => '',
      forSubmitButton: (): string => ''
    };
  }

  return {
    forInput: (userValue: string): string => `  cy.get('${formField}').type('${userValue}');\n`,
    forRadioButton: (): string => `  cy.get('${formField}').click();\n`,
    forCheckbox: (): string => `  cy.get('${formField}').click();\n`,
    forSelect: (option: string): string => `  cy.get('${formField}').select('${option}');\n`,
    forMutipleSelect: (options: string): string => `  cy.get('${formField}').select(${options});\n`,
    forSubmitButton: (): string => `  cy.get('${formField}').click();\n`
  }
};

const updateInput = (field: HTMLFormElement): void => {
  const attribute: string = FieldAttributes.Name;
  const attributeValue: string = field.name;
  const fieldProperties: FieldPropertiesType = {
    field,
    attribute,
    attributeValue
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forInput(field.value);
};

const updateRadioButton = (field: HTMLFormElement): void => {
  const fieldLabel: FieldLabelType = document.querySelector(`label[for="${field.id}"]`);

  if (fieldLabel == null) return;

  const attribute: string = FieldAttributes.For;
  const attributeValue: string | null = fieldLabel.getAttribute('for');
  const fieldProperties: CheckFieldPropertiesType = {
    field: fieldLabel,
    attribute,
    attributeValue
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forRadioButton();
};

const updateCheckbox = (field: HTMLFormElement): void => {
  const fieldLabel: FieldLabelType = document.querySelector(`label[for="${field.id}"]`);

  if (fieldLabel == null) return;

  const attribute: string = FieldAttributes.For;
  const attributeValue: string | null = fieldLabel.getAttribute('for');
  const fieldProperties: CheckFieldPropertiesType = {
    field: fieldLabel,
    attribute,
    attributeValue
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forCheckbox();
};

const updateSelect = (field: HTMLFormElement): void => {
  const attribute: string = FieldAttributes.Name;
  const attributeValue: string = field.name;
  const selectOption: HTMLFormElement = field[field.selectedIndex] as HTMLFormElement;
  const selectOptionTest: string = selectOption.text;
  const fieldProperties: FieldPropertiesType = {
    field,
    attribute,
    attributeValue
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties)
    .forSelect(selectOptionTest);
};

const updateMutipleSelect = (field: HTMLFormElement): void => {
  const attribute: string = FieldAttributes.Name;
  const attributeValue: string = field.name;
  const selectedOptions: string[] = getSelectedOptionsValues(field);
  const stringifiedSelectedOptions: string = JSON.stringify(selectedOptions);
  const fieldProperties: FieldPropertiesType = {
    field,
    attribute,
    attributeValue
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties)
    .forMutipleSelect(stringifiedSelectedOptions);
};

const getButton = (form: HTMLFormElement): FieldButtonType =>
  form.querySelector('input[type=submit]') || form.querySelector('button');

const updateSubmitButton = (form: HTMLFormElement): void => {
  const field: FieldButtonType = getButton(form);
  const attribute: string = FieldAttributes.TestId;
  const attributeValue: string = 'submit-button';
  const fieldProperties: ButtonFieldPropertiesType = {
    field,
    attribute,
    attributeValue
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forSubmitButton();
};

const updateEachField = (field: HTMLFormElement): void => {
  if (fieldTypes.includes(field.type) && field.value) {
    updateInput(field);
  } else if (field.type === 'radio' && field.checked) {
    updateRadioButton(field);
  } else if (field.type === 'checkbox' && field.checked) {
    updateCheckbox(field);
  } else if (field.type === 'select-one') {
    updateSelect(field);
  } else if (field.type === 'select-multiple') {
    updateMutipleSelect(field);
  }
};

export const updateFormSessionStorage = (form: HTMLFormElement) => (event: Event): void => {
  if (sessionStorage.lazyCypress) {
    const hasRemainingTest: boolean = sessionStorage.lazyCypress.includes('});');

    if (hasRemainingTest) {
      event.preventDefault();
      alert('You should clean your recording.');
      return;
    }

    const formFields: HTMLFormElement[] = getFormFields(form);

    formFields.forEach(updateEachField);
    updateSubmitButton(form);

    sessionStorage.lazyCypress += '});';
  }
};

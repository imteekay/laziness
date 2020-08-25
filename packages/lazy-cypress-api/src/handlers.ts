import { get } from './helpers';
import {
  FormFieldType,
  FieldLabelType,
  FormFieldProperties,
  ButtonFieldPropertiesType,
  CheckFieldPropertiesType,
  FieldPropertiesType,
  FieldButtonType,
} from './types';

enum FieldAttributes {
  Name = 'name',
  For = 'for',
  TestId = 'data-testid',
}

function getFormFields(form: HTMLFormElement): HTMLFormElement[] {
  return [...form.querySelectorAll<HTMLFormElement>('input,textarea,select')];
}

const fieldTypes = [
  'text',
  'textarea',
  'search',
  'number',
  'email',
  'url',
  'password',
  'tel',
  'date',
];

function getSelectedOptionsValues(field: HTMLFormElement): string[] {
  return [...field.selectedOptions].map(
    (option: HTMLOptionElement) => option.value
  );
}

function getFormField({
  field,
  attribute,
  attributeValue,
}: FormFieldProperties): FormFieldType {
  if (field == null || attributeValue == null) return null;

  const fieldName = field.tagName.toLowerCase();
  const formField = get(fieldName)
    .withAttribute(attribute)
    .andValue(attributeValue);

  return formField;
}

function generateTest(formFieldProperties: FormFieldProperties) {
  const formField: FormFieldType = getFormField(formFieldProperties);

  if (formField == null) {
    return {
      forInput: (_: string) => '',
      forRadioButton: () => '',
      forCheckbox: () => '',
      forSelect: (_: string) => '',
      forMutipleSelect: (_: string) => '',
      forSubmitButton: () => '',
    };
  }

  return {
    forInput: (userValue: string) =>
      `  cy.get('${formField}').type('${userValue}');\n`,
    forRadioButton: () => `  cy.get('${formField}').click();\n`,
    forCheckbox: () => `  cy.get('${formField}').click();\n`,
    forSelect: (option: string) =>
      `  cy.get('${formField}').select('${option}');\n`,
    forMutipleSelect: (options: string) =>
      `  cy.get('${formField}').select(${options});\n`,
    forSubmitButton: () => `  cy.get('${formField}').click();\n`,
  };
}

function updateInput(field: HTMLFormElement) {
  const attribute: string = FieldAttributes.Name;
  const attributeValue: string = field.name;
  const fieldProperties: FieldPropertiesType = {
    field,
    attribute,
    attributeValue,
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forInput(
    field.value
  );
}

function updateRadioButton(field: HTMLFormElement) {
  const fieldLabel: FieldLabelType = document.querySelector(
    `label[for="${field.id}"]`
  );

  if (fieldLabel == null) return;

  const attribute: string = FieldAttributes.For;
  const attributeValue = fieldLabel.getAttribute('for');
  const fieldProperties: CheckFieldPropertiesType = {
    field: fieldLabel,
    attribute,
    attributeValue,
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forRadioButton();
}

function updateCheckbox(field: HTMLFormElement) {
  const fieldLabel: FieldLabelType = document.querySelector(
    `label[for="${field.id}"]`
  );

  if (fieldLabel == null) return;

  const attribute: string = FieldAttributes.For;
  const attributeValue = fieldLabel.getAttribute('for');
  const fieldProperties: CheckFieldPropertiesType = {
    field: fieldLabel,
    attribute,
    attributeValue,
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forCheckbox();
}

function updateSelect(field: HTMLFormElement) {
  const attribute: string = FieldAttributes.Name;
  const attributeValue: string = field.name;
  const selectOption: HTMLFormElement = field[
    field.selectedIndex
  ] as HTMLFormElement;
  const selectOptionTest: string = selectOption.text;
  const fieldProperties: FieldPropertiesType = {
    field,
    attribute,
    attributeValue,
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forSelect(
    selectOptionTest
  );
}

function updateMutipleSelect(field: HTMLFormElement) {
  const attribute: string = FieldAttributes.Name;
  const attributeValue: string = field.name;
  const selectedOptions: string[] = getSelectedOptionsValues(field);
  const stringifiedSelectedOptions: string = JSON.stringify(selectedOptions);
  const fieldProperties: FieldPropertiesType = {
    field,
    attribute,
    attributeValue,
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forMutipleSelect(
    stringifiedSelectedOptions
  );
}

function getButton(form: HTMLFormElement): FieldButtonType {
  return (
    form.querySelector('input[type=submit]') || form.querySelector('button')
  );
}

function updateSubmitButton(form: HTMLFormElement) {
  const field: FieldButtonType = getButton(form);
  const attribute: string = FieldAttributes.TestId;
  const attributeValue: string = 'submit-button';
  const fieldProperties: ButtonFieldPropertiesType = {
    field,
    attribute,
    attributeValue,
  };

  sessionStorage.lazyCypress += generateTest(fieldProperties).forSubmitButton();
}

function updateEachField(field: HTMLFormElement) {
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
}

export function updateFormSessionStorage(form: HTMLFormElement) {
  return (event: Event) => {
    if (sessionStorage.lazyCypress) {
      const hasRemainingTest: boolean = sessionStorage.lazyCypress.includes(
        '});'
      );

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
}

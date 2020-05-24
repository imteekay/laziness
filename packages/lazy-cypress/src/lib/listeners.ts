import { updateFormSessionStorage } from './handlers';

export const start = (): void => {
  if (!sessionStorage.lazyCypress) {
    sessionStorage.lazyCypress = `describe('[TODO] add a description here', () => {
  cy.visit('${window.location.pathname}');\n\n`;
  }
};

export const clean = (): void => {
  sessionStorage.removeItem('lazyCypress');
};

export const copy = (): void => {
  if (navigator.clipboard) {
    navigator
      .clipboard
      .writeText(sessionStorage.lazyCypress)
      .catch((error) => {
        console.error('Could not copy text: ', error);
        alert(sessionStorage.lazyCypress);
      });
  }
};

export const addFormSubmitListener = (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    const formElements: HTMLCollectionOf<HTMLFormElement> = document.getElementsByTagName('form');
    const forms: HTMLFormElement[] = [...formElements];
    forms.forEach((form: HTMLFormElement) => form.addEventListener('submit', updateFormSessionStorage(form)));
  });
};

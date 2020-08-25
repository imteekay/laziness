import { updateFormSessionStorage } from './handlers';

export function start() {
  if (!sessionStorage.lazyCypress) {
    sessionStorage.lazyCypress = `describe('[TODO] add a description here', () => {
  cy.visit('${window.location.pathname}');\n\n`;
  }
}

export function clean() {
  sessionStorage.removeItem('lazyCypress');
}

export function copy() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(sessionStorage.lazyCypress).catch(error => {
      console.error('Could not copy text: ', error);
      alert(sessionStorage.lazyCypress);
    });
  }
}

export function addFormSubmitListener() {
  document.addEventListener('DOMContentLoaded', () => {
    const forms = Array.from(document.getElementsByTagName('form'));

    forms.forEach((form: HTMLFormElement) => {
      form.addEventListener('submit', updateFormSessionStorage(form));
    });
  });
}

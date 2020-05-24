export const get = (element: string) => ({
  withAttribute: (attribute: string) => ({
    andValue: (value: string): string => `${element}[${attribute}="${value}"]`,
  }),
});

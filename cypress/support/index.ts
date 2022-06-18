export interface TypeOptions extends Cypress.TypeOptions {
  sensitive: boolean;
}

Cypress.Commands.overwrite<"type", "element">(
  "type",
  (originalFn, element, text, options?: Partial<TypeOptions>) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false;
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: "type",
        message: "*".repeat(text.length),
      });
    }

    return originalFn(element, text, options);
  }
);

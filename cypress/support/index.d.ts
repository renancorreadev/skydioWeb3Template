/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to type a few random words into input elements
       * @param count=3
       * @example cy.get('input').typeRandomWords()
       */
      typeRandomWords(
        count?: number,
        options?: Partial<TypeOptions>
      ): Chainable<Element>;
    }
  }
}

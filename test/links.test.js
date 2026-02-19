
const { JSDOM } = require('jsdom');


//CHAT GPT, 2023

 
  // Jest test
  describe('Link Testing', () => {
    test('Valid link should return true', () => {
       
      // Create a virtual DOM environment
      const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
      global.document = dom.window.document;
      const anchor = document.createElement('a');
      anchor.href = 'https://charlotte-norford-colour-experiment-v.netlify.app/'; 
 
      // Test the link
      expect( anchor.protocol === 'https:').toBe(true);
    });

});
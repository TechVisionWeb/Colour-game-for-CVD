const Colour = require('./Colour');
const SortedSubTask = require("./SortedSubTask");


function createSortedColourArray() {
    colourArray = [];

    createAndAddSortedColour("pink", "protan", colourArray);
    createAndAddSortedColour("grey", "protan", colourArray);
    createAndAddSortedColour("blue", "protan", colourArray);
    createAndAddSortedColour("purple", "protan", colourArray);
    createAndAddSortedColour("green", "protan", colourArray);
    createAndAddSortedColour("yellow", "protan", colourArray);

    createAndAddSortedColour("bluish-green", "deutan", colourArray);
    createAndAddSortedColour("grey", "deutan", colourArray);
    createAndAddSortedColour("blue", "deutan", colourArray);
    createAndAddSortedColour("purple", "deutan", colourArray);
    createAndAddSortedColour("red", "deutan", colourArray);
    createAndAddSortedColour("brown", "deutan", colourArray);

    createAndAddSortedColour("yellow", "tritan", colourArray);
    createAndAddSortedColour("tan", "tritan", colourArray);
    createAndAddSortedColour("blue", "tritan", colourArray);
    createAndAddSortedColour("green", "tritan", colourArray);
    createAndAddSortedColour("pink", "tritan", colourArray);
    createAndAddSortedColour("orange", "tritan", colourArray);

 
    return colourArray;
  }



function createAndAddSortedColour(hue, conditionCode, colourArray) {
    for (let i = 0; i < 5; i++) {
      colourArray.push(
        new SortedSubTask("n/a", new Colour(hue, i + 1, conditionCode)),
      );
    }
  }


 module.exports =  createSortedColourArray;

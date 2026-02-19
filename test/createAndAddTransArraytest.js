function createTransColourArray() {
    let subtasks = [];
    createAndAddTransColourBlocks("grey-pink", "protan", subtasks);
    createAndAddTransColourBlocks("grey-dark-bluish-green", "protan", subtasks);
    createAndAddTransColourBlocks("blue-purple", "protan", subtasks);
    createAndAddTransColourBlocks("red-brown", "protan", subtasks);
    createAndAddTransColourBlocks("orange-green", "protan", subtasks);

    createAndAddTransColourBlocks("grey-pink", "deutan", subtasks);
    createAndAddTransColourBlocks("grey-bluish-green", "deutan", subtasks);
    createAndAddTransColourBlocks("dodgerBlue-purple", "deutan", subtasks);
    createAndAddTransColourBlocks("orange-red", "deutan", subtasks);
    createAndAddTransColourBlocks("yellow-green", "deutan", subtasks);

    createAndAddTransColourBlocks("grey-purple", "tritan", subtasks);
    createAndAddTransColourBlocks("grey-yellow", "tritan", subtasks);
    createAndAddTransColourBlocks("purple-yellow", "tritan", subtasks);
    createAndAddTransColourBlocks("green-bluish-green", "tritan", subtasks);
    createAndAddTransColourBlocks("darkRed-orange", "tritan", subtasks);
    //shuffleArray(subtasks);

    return subtasks;
  }

  function createAndAddTransColourBlocks(hue, conditionCode, subtasks) {

    let colourArray = [];
    for (let i = 0; i < 10; i++) {
      colourArray.push(
        new Colour(hue, i + 1, conditionCode)
      );


    }

    let clonedSubtask = colourArray.slice(1, 9);
    shuffleArray(clonedSubtask);
    clonedSubtask.unshift(colourArray[0]);
    clonedSubtask.push(colourArray[9]);

    subtasks.push(new TransSubTask( clonedSubtask));

  }

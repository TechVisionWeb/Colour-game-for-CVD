const SortedTask = require('./SortedTask');
  const Colour = require('./Colour');
 const SortedSubTask = require("./SortedSubTask");

 
test("test if the constructor is called once", () =>{

    sortedArray = [];

    sortedArray = createSortedColourArray() ;
   
    


    let actualSortedTask = new SortedTask(sortedArray, "sorted unaided");
    expect(actualSortedTask.getSubTasks.length).toBe(90);

    expect(actualSortedTask.getName).toEqual("sorted unaided")
    expect( actualSortedTask.getSubTasks[0].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 1,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[1].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 2,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[2].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 3,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[3].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 4,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[4].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 5,"conditionCode":"protan"}) ;


    expect( actualSortedTask.getSubTasks[5].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 1,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[6].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 2,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[7].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 3,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[8].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 4,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[9].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 5,"conditionCode":"protan"}) ;


    expect( actualSortedTask.getSubTasks[10].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 1,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[11].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 2,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[12].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 3,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[13].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 4,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[14].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 5,"conditionCode":"protan"}) ;


    expect( actualSortedTask.getSubTasks[15].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 1,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[16].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 2,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[17].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 3,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[18].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 4,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[19].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 5,"conditionCode":"protan"}) ;

    expect( actualSortedTask.getSubTasks[20].getColoursTest).toEqual( {"name":  "green", "shadeNum": 1,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[21].getColoursTest).toEqual( {"name":  "green", "shadeNum": 2,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[22].getColoursTest).toEqual( {"name":  "green", "shadeNum": 3,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[23].getColoursTest).toEqual( {"name":  "green", "shadeNum": 4,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[24].getColoursTest).toEqual( {"name":  "green", "shadeNum": 5,"conditionCode":"protan"}) ;

    expect( actualSortedTask.getSubTasks[25].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 1,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[26].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 2,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[27].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 3,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[28].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 4,"conditionCode":"protan"}) ;
    expect( actualSortedTask.getSubTasks[29].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 5,"conditionCode":"protan"}) ;







    expect( actualSortedTask.getSubTasks[30].getColoursTest).toEqual( {"name":  "bluish-green", "shadeNum": 1,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[31].getColoursTest).toEqual( {"name":  "bluish-green", "shadeNum": 2,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[32].getColoursTest).toEqual( {"name":  "bluish-green", "shadeNum": 3,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[33].getColoursTest).toEqual( {"name":  "bluish-green", "shadeNum": 4,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[34].getColoursTest).toEqual( {"name":  "bluish-green", "shadeNum": 5,"conditionCode":"deutan"}) ;


    expect( actualSortedTask.getSubTasks[35].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 1,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[36].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 2,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[37].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 3,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[38].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 4,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[39].getColoursTest).toEqual( {"name":  "grey", "shadeNum": 5,"conditionCode":"deutan"}) ;


    expect( actualSortedTask.getSubTasks[40].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 1,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[41].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 2,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[42].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 3,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[43].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 4,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[44].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 5,"conditionCode":"deutan"}) ;


    expect( actualSortedTask.getSubTasks[45].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 1,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[46].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 2,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[47].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 3,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[48].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 4,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[49].getColoursTest).toEqual( {"name":  "purple", "shadeNum": 5,"conditionCode":"deutan"}) ;

    expect( actualSortedTask.getSubTasks[50].getColoursTest).toEqual( {"name":  "red", "shadeNum": 1,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[51].getColoursTest).toEqual( {"name":  "red", "shadeNum": 2,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[52].getColoursTest).toEqual( {"name":  "red", "shadeNum": 3,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[53].getColoursTest).toEqual( {"name":  "red", "shadeNum": 4,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[54].getColoursTest).toEqual( {"name":  "red", "shadeNum": 5,"conditionCode":"deutan"}) ;

    expect( actualSortedTask.getSubTasks[55].getColoursTest).toEqual( {"name":  "brown", "shadeNum": 1,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[56].getColoursTest).toEqual( {"name":  "brown", "shadeNum": 2,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[57].getColoursTest).toEqual( {"name":  "brown", "shadeNum": 3,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[58].getColoursTest).toEqual( {"name":  "brown", "shadeNum": 4,"conditionCode":"deutan"}) ;
    expect( actualSortedTask.getSubTasks[59].getColoursTest).toEqual( {"name":  "brown", "shadeNum": 5,"conditionCode":"deutan"}) ;


 


    expect( actualSortedTask.getSubTasks[60].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 1,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[61].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 2,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[62].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 3,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[63].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 4,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[64].getColoursTest).toEqual( {"name":  "yellow", "shadeNum": 5,"conditionCode":"tritan"}) ;


    expect( actualSortedTask.getSubTasks[65].getColoursTest).toEqual( {"name":  "tan", "shadeNum": 1,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[66].getColoursTest).toEqual( {"name":  "tan", "shadeNum": 2,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[67].getColoursTest).toEqual( {"name":  "tan", "shadeNum": 3,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[68].getColoursTest).toEqual( {"name":  "tan", "shadeNum": 4,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[69].getColoursTest).toEqual( {"name":  "tan", "shadeNum": 5,"conditionCode":"tritan"}) ;


    expect( actualSortedTask.getSubTasks[70].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 1,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[71].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 2,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[72].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 3,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[73].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 4,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[74].getColoursTest).toEqual( {"name":  "blue", "shadeNum": 5,"conditionCode":"tritan"}) ;


    expect( actualSortedTask.getSubTasks[75].getColoursTest).toEqual( {"name":  "green", "shadeNum": 1,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[76].getColoursTest).toEqual( {"name":  "green", "shadeNum": 2,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[77].getColoursTest).toEqual( {"name":  "green", "shadeNum": 3,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[78].getColoursTest).toEqual( {"name":  "green", "shadeNum": 4,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[79].getColoursTest).toEqual( {"name":  "green", "shadeNum": 5,"conditionCode":"tritan"}) ;

    expect( actualSortedTask.getSubTasks[80].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 1,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[81].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 2,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[82].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 3,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[83].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 4,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[84].getColoursTest).toEqual( {"name":  "pink", "shadeNum": 5,"conditionCode":"tritan"}) ;

    expect( actualSortedTask.getSubTasks[85].getColoursTest).toEqual( {"name":  "orange", "shadeNum": 1,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[86].getColoursTest).toEqual( {"name":  "orange", "shadeNum": 2,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[87].getColoursTest).toEqual( {"name":  "orange", "shadeNum": 3,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[88].getColoursTest).toEqual( {"name":  "orange", "shadeNum": 4,"conditionCode":"tritan"}) ;
    expect( actualSortedTask.getSubTasks[89].getColoursTest).toEqual( {"name":  "orange", "shadeNum": 5,"conditionCode":"tritan"}) ;

 })

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




 
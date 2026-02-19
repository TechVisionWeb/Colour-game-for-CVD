//Object.assign(new Person(...), anObjectLikePerson)

const SortedSubTask = require('./SortedSubTask');
const Colour = require('./Colour');


  test("test if the actualSortedSubTask equals the expectSortedSubTask", () =>{


    const actualColour = new Colour("blue", "1", "deutran");

    const actualSortedSubTask  =  new SortedSubTask("n/a", actualColour);
    const expectSortedSubTask =    { "time":"n/a", "colourActual":{ "name": "blue", "shadeNum": "1", "conditionCode": "deutran"}, "colourChosen": "none chosen", "result": ""}
    const expectColourChosen = "none chosen";
    const expectResult = "";
    const expectTime = "n/a";
    expect(actualSortedSubTask.getResultTest).toEqual(expectResult)
      expect( actualSortedSubTask.getColourActual.getName  ).toEqual(   "blue"   );
      expect( actualSortedSubTask.getColourActual.getShadeNum  ).toEqual("1");
      expect( actualSortedSubTask.getColourActual.getConditionCode  ).toEqual("deutran");
 
      expect( actualSortedSubTask.getColourChosen ).toEqual(expectColourChosen);
      expect( actualSortedSubTask.getTime ).toEqual(expectTime);



  })


 
  
  test("test if the actualSortedSubTaskResult equals the expectSortedSubTaskResult with no chosen colour", () =>{


    const actualColour = new Colour("blue", "1", "deutran");

    const actualSortedSubTask  =  new SortedSubTask("n/a", actualColour);
    const actualSortedSubTaskResult = actualSortedSubTask.getResult;
    const expectedColourString = "\n" + " Actual colour name: " + "blue" + "\n" + " Actual colour shade num: " +  
    
    "1" + "\n" + " Actual colour condition code: " + "deutran";


    const expectSortedSubTaskResult =   
       "*******SortedSubTask*******" + 
        
        "\n" +   "\n" + "Colour actual: " +
        expectedColourString +  
      "\n" + 
        "Colour chosen: " +
        "none chosen" +
        "\n" +
        "get time: " +

        "n/a"  + "\n";

  
      expect(  actualSortedSubTaskResult ).toEqual( expectSortedSubTaskResult );

 
    

  })


  test("test if the actualSortedSubTaskResult equals the expectSortedSubTaskResult with a chosen colour", () =>{


    const actualColour = new Colour("blue", "1", "deutran");

    const actualSortedSubTask  =  new SortedSubTask("n/a", actualColour);
    actualSortedSubTask.setColourChosen = "red";

    const actualSortedSubTaskResult = actualSortedSubTask.getResult;
    const expectedColourString = "\n" + " Actual colour name: " + "blue" + "\n" + " Actual colour shade num: " +  
    
    "1" + "\n" + " Actual colour condition code: " + "deutran";


    const expectSortedSubTaskResult =   
       "*******SortedSubTask*******" + 
        
        "\n" +   "\n" + "Colour actual: " +
        expectedColourString +  
      "\n" + 
        "Colour chosen: " +
        "red" +
        "\n" +
        "get time: " +

        "n/a"  + "\n";

  
      expect(  actualSortedSubTaskResult ).toEqual( expectSortedSubTaskResult );

 
    

  })
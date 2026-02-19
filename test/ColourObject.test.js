const Colour = require('./Colour');

  test("test if the expected object matches the actual object", () => {

 
  let actualColour = new Colour("blue", "1", "deutran");


  let expectedConditionCode= "deutran"
  
  let expectedName =  "blue";

  let expectedShadeNum = "1";
  
  expect( actualColour.getShadeNum  ).toEqual( expectedShadeNum  );

  expect( actualColour.getName  ).toEqual( expectedName  );

  expect( actualColour.getConditionCode   ).toEqual(  expectedConditionCode );

  })
  test("test if the toASTring instance method returns the correct string", () => {

 
    const actualColour = new Colour("blue", "1", "deutran");
  
    const expectedColourString = "\n" + " Actual colour name: " + "blue" + "\n" + " Actual colour shade num: " +  
    
    "1" + "\n" + " Actual colour condition code: " + "deutran";
     
    expect( actualColour.toAString).toEqual(expectedColourString);
  
  })
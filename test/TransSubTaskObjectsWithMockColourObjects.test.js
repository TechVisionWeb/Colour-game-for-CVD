const TransSubTask = require('./TransSubTask');
const Colour = require('./Colour');
jest.mock("./Colour");
 
 


  test("test if the actualTransSubTask equals the expectedTransSubTask mock colours, no result and order", () =>{

    let colours = []; 
    
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("blue", i, "deutran");
       colours.push(actualColour); 
    }

    const actualTransSubTask  =  new TransSubTask( colours);

   const expectedTransSubTask =  {"time": "n/a",
    "colours":[{}
    ,{},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}],
    "result":"","order":"","name":"undefined-undefined"}
    expect( actualTransSubTask.getAResult  ).toEqual("" );

   
    expect( actualTransSubTask.getName  ).toEqual("undefined-undefined" );
    expect( actualTransSubTask.getColours ).toEqual( [{},{},{},{},{},{},{},{},{},{}] );



    
  })



  
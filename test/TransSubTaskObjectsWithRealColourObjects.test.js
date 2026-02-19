const TransSubTask = require('./TransSubTask');
 const Colour = require('./Colour');
 
 


  test("test if the actualTransSubTask equals the expectedTransSubTask just colours, no result and order", () =>{

    let colours = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("blue", i, "deutran");
       colours.push(actualColour); 
    }

    const actualTransSubTask  =  new TransSubTask( colours);
 
    const expectedTransSubTaskColours = [{"name":"blue","shadeNum":1,"conditionCode":"deutran"}
  ,{"name":"blue","shadeNum":2,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":3,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":4,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":5,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":6,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":7,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":8,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":9,"conditionCode":"deutran"},
  {"name":"blue","shadeNum":10,"conditionCode":"deutran"}];
   const expectedTransSubTaskTime = "n/a";
   const expectedTransSubTaskResult = "";
   const expectedTransSubTaskName = "deutran-blue";
   
    expect( actualTransSubTask.getColoursTest   ).toEqual(  expectedTransSubTaskColours);
    expect(  actualTransSubTask.getColours.length).toBe(10);
    expect(  actualTransSubTask.getTime   ).toEqual(  expectedTransSubTaskTime);
    expect(  actualTransSubTask.getAResult   ).toEqual(  expectedTransSubTaskResult);
    expect(  actualTransSubTask.getName  ).toEqual(  expectedTransSubTaskName);



    
  })



  
  test("test if the actualTransSubTask equals the expectedTransSubTask with colours, a result , an order and a time as Strings", () =>{

    let colours = []; 
    let order = [];


    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("blue", i, "deutran");
       colours.push(actualColour); 
    }

    for(let i = 1; i <= 10; i++){
       
      order.push(i); 
      }
 
    let actualTransSubTask    =  new TransSubTask( colours);
 
    actualTransSubTask.setTime = "29:00:000";

    actualTransSubTask.setOrder = [1,2,3,4,5,6,7,8,9,10,];
     
    actualTransSubTask.setResult();
 
   let  expectedTransSubTaskResult =  "*******TransSubTask*******" +
    

     "\n" + "\n" + "name: " +
     "deutran-blue" +

       "\n" + "get time: " +
       "29:00:000"  + "\n"  
     "\n\n " + "order: \n\n" ;
     
     
      expectedTransSubTaskResult+=  "1,2,3,4,5,6,7,8,9,10,"
      
      

   let expectedTransSubTaskColours =
     [{"name":"blue","shadeNum":1,"conditionCode":"deutran"}
    ,{"name":"blue","shadeNum":2,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":3,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":4,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":5,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":6,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":7,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":8,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":9,"conditionCode":"deutran"},
    {"name":"blue","shadeNum":10,"conditionCode":"deutran"}];

    // {"time": "29:00:000", "result": expectedTransSubTaskResult,"order": order,"name":"deutran-blue"}
   
 
     
     
    

 
    expect( actualTransSubTask.getResult  ).toEqual(expectedTransSubTaskResult );

    expect( actualTransSubTask.getTime  ).toEqual("29:00:000" );

    expect( actualTransSubTask.getName  ).toEqual("deutran-blue");
    expect( actualTransSubTask.getColoursTest).toEqual( expectedTransSubTaskColours );

    
  }) 
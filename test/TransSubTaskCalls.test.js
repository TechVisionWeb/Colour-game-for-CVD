const TransSubTask = require('./TransSubTask');

 
  test("test if the constructor is called once", () =>{


 
 
  const constructorSpy =   jest.spyOn(TransSubTask, "constructor")

  new  constructorSpy();


  expect( constructorSpy).toHaveBeenCalledTimes(1);
    

  })
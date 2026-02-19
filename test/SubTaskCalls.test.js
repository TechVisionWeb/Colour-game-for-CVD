const SubTask = require('./SubTask');
 
  test("test if the constructor is called once", () =>{


 
 
    
      const constructorSpy =   jest.spyOn(SubTask, "constructor")

      new  constructorSpy();
    
    
      expect( constructorSpy).toHaveBeenCalledTimes(1);
  })
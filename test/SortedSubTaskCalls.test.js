const SortedSubTask = require('./SortedSubTask');

 
  test("test if the constructor is called once", () =>{

 
      const constructorSpy =   jest.spyOn(SortedSubTask, "constructor")

      new  constructorSpy();
    
    
      expect( constructorSpy).toHaveBeenCalledTimes(1);
    

  })
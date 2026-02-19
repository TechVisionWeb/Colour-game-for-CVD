//import  Participant  from "/participant";

const ParticipantMock = require('./participant');
 
  test("test is participant constructor calls", () =>{


 
     


     const constructorSpy =   jest.spyOn(ParticipantMock, "constructor")

      new  constructorSpy("p1");
    
    
      expect( constructorSpy).toHaveBeenCalledTimes(1);
  })

 

  
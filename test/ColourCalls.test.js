const Colour  = require('./Colour');

jest.mock('./Colour')
test("test if the constructor is called once", () =>{    

 
     new  Colour("blue", "1", "deutran");
  
  
    expect( Colour).toHaveBeenCalledTimes(1);


})

//import  Participant  from "/participant";

const ParticipantMock = require('./participant');
const Counterbalancing = require('./Counterbalancing');
 

   test( "test if the expected object matches the actual object", () => {

  
    const actualCounterbalancing = new Counterbalancing();
 
    const actualParticipant =  new ParticipantMock("p1");

    actualParticipant.setCounterBalancing = actualCounterbalancing;
    

    const expectedParticipantCode =   "p1";
    
    const  expectedCondition =  "";  
    
    const  expectedCounterbalancingTasks =     [] ;



    expect( actualParticipant.getParticipantCode  ).toEqual(expectedParticipantCode );
    //expect( actualParticipant.getResults ).toEqual(expectedResults );

    expect( actualParticipant.getCondition).toEqual(expectedCondition );

    expect( actualParticipant.getCounterBalancing.getTasks).toEqual(expectedCounterbalancingTasks );



    

     
  }); 

 
 


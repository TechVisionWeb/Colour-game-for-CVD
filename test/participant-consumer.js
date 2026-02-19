// import Participant from './participant';

// export default class ParticipantConsumer {
//   constructor(code) {
//     this.participant = new Participant(code);
//   }

 
// }

  const Participant = require('./participant');
 

  
  
  
  class ParticipantConsumer {
  constructor(code) {
    this.participant = new Participant(code);
  }

 
}

module.exports = ParticipantConsumer;

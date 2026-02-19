

class Participant {

  #participantCode = "";
  #results = "";
  #condition = "";
  #counterBalancing = null;
   constructor(participantCode) {
     this.#participantCode = participantCode;
      this.#results = "";
     this.#condition = "";
     this.#counterBalancing = null;
   }

   set setCounterBalancing(counterBalancing) {
     this.#counterBalancing = counterBalancing;
   }

   get getResults() {
     for (let i = 0; i < Task.getMaxTaskCount(); i++) {

       this.#results +=  "\n\n**********Results for participant:" +  participant.getParticipantCode + "*****************\n\n"
         if (
           participant.getCounterBalancing.getTasks[i].getName ===
           taskNames.sortedUnaided
         ) {
           this.#results += "\n\n************ Sorted unaided task ***********\n\n";

           for (let j = 0; j < SortedSubTask.getMaxSortedSubTaskCount(); j++) {
             this.#results += "\n\n  " + (j + 1) +  "\n " ;
             this.#results +=
             "\n  " +
               participant.getCounterBalancing.getTasks[i].getSortedSubTasks[j]
                 .getResult;
           }
         } else if(participant.getCounterBalancing.getTasks[i].getName ===
           taskNames.sortingAided ) {
           this.#results += "\n\n************ Sorted aided task *************\n\n";

           for (let j = 0; j < SortedSubTask.getMaxSortedSubTaskCount(); j++) {
             this.#results += "\n\n  " + (j + 1) +  "\n " ;
             this.#results +=
             "\n " +
             participant.getCounterBalancing.getTasks[i].getSortedSubTasks[j]
               .getResult;
           }
         }

         else if(participant.getCounterBalancing.getTasks[i].getName ===
           taskNames.transitionUnaided ) {
           this.#results += "\n\n************ Trans unaided task *************\n\n";

           for (let j = 0; j < TransSubTask.getMaxTransSubTaskCount(); j++) {

             this.#results += "\n\n  " + (j + 1) +  "\n " ;

             this.#results +=
               "\n  " +
               participant.getCounterBalancing.getTasks[i].getTransSubTasks[j]
                 .getResult;
           }
         }
         else if(participant.getCounterBalancing.getTasks[i].getName ===
           taskNames.ratioSmall) {
            this.#results  += "\n\n************ Ratio 0.04 aided task *************\n\n";

           for (let j = 0; j < TransSubTask.getMaxTransSubTaskCount(); j++) {

             this.#results += "\n\n  " + (j + 1) +  "\n " ;

             this.#results +=
             "\n " +
               participant.getCounterBalancing.getTasks[i].getTransSubTasks[j]
                 .getResult;
           }
         }
         else if(participant.getCounterBalancing.getTasks[i].getName ===
           taskNames.ratioMid) {
            this.#results  += "\n\n************ Ratio 0.08 aided task *************\n\n";

           for (let j = 0; j < TransSubTask.getMaxTransSubTaskCount(); j++) {
             this.#results += "\n\n  " + (j + 1) +  "\n " ;

             this.#results +=
             "\n " +
               participant.getCounterBalancing.getTasks[i].getTransSubTasks[j]
                 .getResult;
           }
         }
         else if(participant.getCounterBalancing.getTasks[i].getName ===
           taskNames.ratioLarge) {
           this.#results  += "\n\n************ Ratio 0.12 aided task *************\n\n";

           for (let j = 0; j < TransSubTask.getMaxTransSubTaskCount(); j++) {
             this.#results += "\n\n  " + (j + 1) +  "\n " ;

             this.#results +=
             "\n " +
               participant.getCounterBalancing.getTasks[i].getTransSubTasks[j]
                 .getResult;
           }
         }




        
       }
     

     return this.#results;
   }

   get getCounterBalancing() {
     return this.#counterBalancing;
   }

   get getParticipantCode() {
     return this.#participantCode;
   }

   get getCondition() {
     return this.#condition;
   }

   assignACondition() {
     if (this.#participantCode == "p1" || this.#participantCode == "p2" || this.#participantCode == "p3" || this.#participantCode == "p4" 
     || this.#participantCode == "p5" || this.#participantCode == "p6" ) {
       this.#condition = "CVD";
     } else  if (this.#participantCode == "p7" || this.#participantCode == "p8" || this.#participantCode == "p9" || this.#participantCode == "p10" || this.#participantCode == "p11" || this.#participantCode == "p12") {
       this.#condition = "TCV";
     }
   }
 }

      module.exports =  Participant;

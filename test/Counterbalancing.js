class CounterBalancing {
  #tasks;
  constructor() {
    this.#tasks = [];
  }

  setTasks(participantCode, sortedUnaidedSubTasks, sortedAidedSubTasks, transUnaidedSubTasks, tranRatioSmallSubTasks, tranRatioMediumSubTasks, tranRatioLargeSubTasks) {

    if (participantCode == "p1" || participantCode == "p2" || participantCode == "p3" || participantCode == "p4" || participantCode == "p5" || participantCode == "p6") {
      TransTask.setCVDMaxTransTaskCount()
      SortedTask.setCVDMaxSortedTaskCount();
      Task.setCVDMaxTaskCount();



      if (participantCode == "p1") {

        this.#tasks = [
          new SortedTask(
            sortedUnaidedSubTasks,
            taskNames.sortedUnaided
          ),
          new SortedTask(
            sortedAidedSubTasks,
            taskNames.sortingAided
          ),

          new TransTask(
            transUnaidedSubTasks,
            taskNames.transitionUnaided
          ),

 
          new TransTask(
            tranRatioLargeSubTasks,
            taskNames.ratioLarge
          ),
        ];

      } else if (participantCode == "p2") {
      


        this.#tasks = [



          

          new TransTask(
            tranRatioLargeSubTasks,
            taskNames.ratioLarge
          ),
          

          new TransTask(
            transUnaidedSubTasks,
            taskNames.transitionUnaided
          ),
          new SortedTask(
            sortedUnaidedSubTasks,
            taskNames.sortedUnaided
          ),
          new SortedTask(
            sortedAidedSubTasks,
            taskNames.sortingAided
          ),  
       


        ];
      } else if (participantCode == "p3") {

        this.#tasks = [
          new SortedTask(
            sortedUnaidedSubTasks,
            taskNames.sortedUnaided
          ),
          new SortedTask(
            sortedAidedSubTasks,
            taskNames.sortingAided
          ),

          new TransTask(
            transUnaidedSubTasks,
            taskNames.transitionUnaided
          ),

         
          new TransTask(
            tranRatioLargeSubTasks,
            taskNames.ratioLarge
          ) 
         
        ];
      }
      else if (participantCode == "p4") {

        this.#tasks = [



         
          new TransTask(
            tranRatioMediumSubTasks,
            taskNames.ratioLarge

          ),
          new TransTask(
            transUnaidedSubTasks,
            taskNames.transitionUnaided
          ),
          new SortedTask(
            sortedUnaidedSubTasks,
            taskNames.sortedUnaided
          ),
          new SortedTask(
            sortedAidedSubTasks,
            taskNames.sortingAided
          ),  


        ];
      }
      else if (participantCode == "p5") {

        this.#tasks = [
          new SortedTask(
            sortedUnaidedSubTasks,
            taskNames.sortedUnaided
          ),
          new SortedTask(
            sortedAidedSubTasks,
            taskNames.sortingAided
          ),

          new TransTask(
            transUnaidedSubTasks,
            taskNames.transitionUnaided
          ),

          new TransTask(
            tranRatioSmallSubTasks,
            taskNames.ratioLarge
          ),

          
        ];
      }
      else if (participantCode == "p6") {

        this.#tasks = [



          new TransTask(
            tranRatioSmallSubTasks,
            taskNames.ratioLarge
          ),

        
          new TransTask(
            transUnaidedSubTasks,
            taskNames.transitionUnaided
          ),
          new SortedTask(
            sortedUnaidedSubTasks,
            taskNames.sortedUnaided
          ),
          new SortedTask(
            sortedAidedSubTasks,
            taskNames.sortingAided
          ),  


        ];
      }

    }
    else {
      TransTask.setTCVMaxTransTaskCount()
      SortedTask.setTCVMaxSortedTaskCount();
      Task.setTCVMaxTaskCount();





      if (participantCode == "p7" || participantCode == "p8" || participantCode == "p9" || participantCode == "p10" || participantCode == "p11" || participantCode == "p12") {

        this.#tasks = [
          new TransTask(
            transUnaidedSubTasks,
            taskNames.transitionUnaided
          ),
          new SortedTask(
            sortedAidedSubTasks,
            taskNames.sortedUnaided
          ),];

      }
    }
  }

  get getTasks() {
    return this.#tasks;
  }
}
  module.exports =  CounterBalancing;

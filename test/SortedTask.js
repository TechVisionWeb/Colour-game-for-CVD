 
class Task {
    static taskCount = 0;
    static maxTaskCount = 0;
    #name;
    #subTasks;

    constructor(name, subTasks) {
      this.#name = name;

      //subtasks are ratio are implied by the task name
      this.#subTasks = subTasks;
    }

    static getTaskCount() {
      return Task.taskCount;
    }
    static setCVDMaxTaskCount() {
      Task.maxTaskCount = 4;
    }


    static setTCVMaxTaskCount() {
      Task.maxTaskCount = 2;
    }
    static resetTaskCount() {
      this.taskCount = 0;
    }
    static setTaskCount() {
      if (
        Task.taskCount <
        Task.maxTaskCount
      ) {
        Task.taskCount++;

      }
    }

    static getMaxTaskCount() {
      return Task.maxTaskCount;
    }

    get getSubTasks() {
      return this.#subTasks;
    }

    get getName() {
      return this.#name;
    }

    
  }


class SortedTask extends Task {
    static sortedTaskCount = 0;
    static maxSortedTask = 0;

    constructor(subTasks, name) {
      super(name, subTasks);
    }
    static setCVDMaxSortedTaskCount() {
      SortedTask.maxSortedTask = 2;
    }
    static setTCVMaxSortedTaskCount() {
      SortedTask.maxSortedTask = 1;
    }
    static getSortedTaskCount() {
      return SortedTask.sortedTaskCount;
    }
    static setSortedTaskCount(sortedTaskCount) {
      SortedTask.sortedTaskCount =
        sortedTaskCount;

      if (
        SortedTask.sortedTaskCount <
        SortedTask.maxSortedTask
      ) {
        SortedTask.sortedTaskCount++;
      }
    }
    static getMaxSortedTaskCount() {
      return SortedTask.maxSortedTask;
    }

 
    get getSortedSubTasks() {
      return super.getSubTasks;
    }




  }

  module.exports =  SortedTask;

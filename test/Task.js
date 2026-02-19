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
   
  get getSubTasksTest() {

    let theSubTasks = [];
    for (let i = 0; i < this.#subTasks.length; i++) {

      theSubTasks.push({ "time": this.#subTasks[i].getTime });
    }

    return theSubTasks; 

  }
  
}

module.exports = Task;

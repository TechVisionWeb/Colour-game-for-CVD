
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

class TransTask extends Task {

  static transTaskCount = 0;
  static maxTransTaskCount = 0;

  constructor(subTasks, name) {
    super(name, subTasks);
  }

  static getTransTaskCount() {
    return TransTask.transTaskCount;
  }

  static resetTransTaskCount() {
    TransTask.maxTransTaskCount = 0;
  }
  static setTransTaskCount() {
    if (
      TransTask.transTaskCount <
      TransTask.maxTransTaskCount
    ) {
      TransTask.transTaskCount++;
    }
  }
  static setCVDMaxTransTaskCount() {
    TransTask.maxTransTaskCount = 3;
  }
  static setTCVMaxTransTaskCount() {
    TransTask.maxTransTaskCount = 1;
  }

  static getMaxTransTaskCount() {
    return TransTask.maxTransTaskCount;
  }

  get getTransSubTasks() {
    return super.getSubTasks;
  }

}

  module.exports =  TransTask;

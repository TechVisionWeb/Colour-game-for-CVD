class SubTask {
  static id = 0;
   #time;
   #name;
  constructor( ) {
     
    this.#time = "n/a";
  }

  set setTime(time) {
      this.#time = time;
  }

  
  get getTime(){

    return this.#time;
  }
  get getName() {
    return this.#name;
  }

  
}

  module.exports =  SubTask;

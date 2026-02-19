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
  class TransSubTask extends SubTask {
    static maxTransSubtaskCount = 15;
    static transSubtaskCount = -2;
    #colours;
    #result;
    #order;
    #name;
    constructor( colours) {
      super();

      this.#colours = colours;
      this.#result = "";
      this.#order = "";

      this.#name =   this.#colours[0].getConditionCode + "-" + this.#colours[0].getName;
 
    }

     get getColoursTest(){
  let theColours = [];
      for(let i = 0; i < this.#colours.length; i++){
        theColours.push({"name": this.#colours[i].getName , "shadeNum": this.#colours[i].getShadeNum,"conditionCode":this.#colours[i].getConditionCode});

 
      }

      return theColours;
     }
    


    get getName() {

      return this.#name;
    }
    get getColours() {
      return this.#colours;
    }
    
    get getTransSubTaskTime() {
      return super.getTime;
    }

    set setOrder(order) {
      //give the order as an array using colour information such as shadeNum, trans sub task colour name e.g red-green and condition code. The name is inferred from any colour in the lists name
      this.#order = order;
    }

    get getOrder() {
      return this.#order;
    }

   setResult() {
    
      this.#result  =  "*******TransSubTask*******" +
    

        "\n" + "\n" + "name: " +
         this.#name +

          "\n" + "get time: " +
        super.getTime + "\n"  
        "\n\n " + "order:  \n    \n  " ;
        
         for(let i = 0; i < this.#order.length; i++){
          this.#result +=   this.#order[i] + ",";
         }
         
         
        

    }

    get getAResult(){
      return this.#result;
    }
    get getResult() {
      this.setResult();
      return this.#result;
    }

    static getTransSubTaskCount() {
      return TransSubTask.transSubtaskCount;
    }
    static getMaxTransSubTaskCount() {
      return TransSubTask.maxTransSubtaskCount;
    }

    static zeroTransSubTaskCount() {
      TransSubTask.transSubtaskCount = 0;

    }
    static resetTransSubTaskCount() {
      TransSubTask.transSubtaskCount = -2;
    }
    static setTransSubTaskCount() {
      if (
        TransSubTask.transSubtaskCount < TransSubTask.maxTransSubtaskCount
      ) {
        TransSubTask.transSubtaskCount++;
      }
    }
  }

  module.exports =  TransSubTask;

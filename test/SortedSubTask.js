class SubTask {
  static id = 0;
  #time;
  #name;
  constructor() {

    this.#time = "n/a";
  }

  set setTime(time) {
    this.#time = time;
  }


  get getTime() {

    return this.#time;
  }
  get getName() {
    return this.#name;
  }
}

class SortedSubTask extends SubTask {
  static maxSortedSubTaskCount = 90;
  static sortedSubTaskCount = -2;
  #colourActual;
  #colourChosen;
  #result;

  constructor(time, colourActual) {
    super(time);

    this.#colourActual = colourActual;
    this.#colourChosen = "none chosen";
    this.#result = "";
  }

  get getColourActual() {
    return this.#colourActual;
  }

  setResult() {
    this.#result =
      "*******SortedSubTask*******" +

      "\n" + "\n" + "Colour actual: " +
      this.getColourActual.toAString +
      "\n" +
      "Colour chosen: " +
      this.#colourChosen +
      "\n" +
      "get time: " +

      super.getTime + "\n";


  }

  get getColoursTest() {
    let theColour;
       theColour = ({ "name": this.#colourActual.getName, "shadeNum": this.#colourActual.getShadeNum, "conditionCode": this.#colourActual.getConditionCode });
 
    return theColour;
  }

  set setSortedSubTaskTime(time) {
    super.setTime = time;
  }

  get getSortedSubTaskTime() {
    return super.getTime;
  }
  get getResult() {
    this.setResult();
    return this.#result;
  }

  get getResultTest() {
    return this.#result;
  }
  get getColourChosen() {
    return this.#colourChosen;
  }

  set setColourChosen(colourChosenName) {
    this.#colourChosen = colourChosenName;
  }
  static getSortedSubTaskCount() {
    return SortedSubTask.sortedSubTaskCount;
  }
  static getMaxSortedSubTaskCount() {
    return SortedSubTask.maxSortedSubTaskCount;
  }

  static zeroSortedSubTaskCount() {
    SortedSubTask.sortedSubTaskCount = 0;

  }
  static resetSortedSubTaskCount() {
    SortedSubTask.sortedSubTaskCount = -2;
  }
  static setSortedSubTaskCount() {
    if (
      SortedSubTask.sortedSubTaskCount < SortedSubTask.maxSortedSubTaskCount
    ) {
      SortedSubTask.sortedSubTaskCount++;
    }
  }
}


module.exports = SortedSubTask;

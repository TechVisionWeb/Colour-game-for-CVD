class Colour {

  #name;
  #shadeNum;
  #conditionCode;
  constructor(name, shadeNum, conditionCode) {
    this.#name = name;
    this.#shadeNum = shadeNum;
    this.#conditionCode = conditionCode;
  }

  get getName() {
    return this.#name;
  }
  get getShadeNum() {
    return this.#shadeNum;
  }
  get getConditionCode() {

     return this.#conditionCode;
  }

 

  get toAString() {
    let data =
      "\n" +
      " Actual colour name: " +
      this.#name +
      "\n" +
      " Actual colour shade num: " +
      this.#shadeNum +
      "\n" +
      " Actual colour condition code: " +
      this.#conditionCode;

    return data;
  }
}
module.exports =  Colour;

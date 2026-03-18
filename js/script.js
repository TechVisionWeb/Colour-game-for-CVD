var participant = null;
// p1 is different to the real participant code.

const taskNames = {
  sortedUnaided: "sorted unaided",
  sortingAided: "sorted aided",
  transitionUnaided: "transition unaided",

  ratioLarge: "0.12"
};

const colorNames = {};

$(document).ready(function () {
  // Get the modal





  //YOU NEED GETTERS AND SETTERS FOR CLASSES
  //KEEP INTERFACE AWAY FROM LOGIC/CLASSES

  class CounterBalancing {
    #tasks;
    constructor() {
      this.#tasks = [];
    }

    setTasks(participantCode, sortedUnaidedSubTasks, sortedAidedSubTasks, transUnaidedSubTasks, tranRatioLargeSubTasks) {

      if (participantCode == "p1" || participantCode == "p2" || participantCode == "p3" || participantCode == "p4" || participantCode == "p5" || participantCode == "p6") {
        TransTask.setCVDMaxTransTaskCount()
        SortedTask.setCVDMaxSortedTaskCount();
        Task.setCVDMaxTaskCount();



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
      }


      else if (participantCode == "p7" || participantCode == "p8" || participantCode == "p9" || participantCode == "p10" || participantCode == "p11" || participantCode == "p12") {
        TransTask.setTCVMaxTransTaskCount()
        SortedTask.setTCVMaxSortedTaskCount();
        Task.setTCVMaxTaskCount();

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

    get getTasks() {
      return this.#tasks;
    }
  }


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

        this.#results += "\n\n**********Results for participant:" + participant.getParticipantCode + "*****************\n\n"
        if (
          participant.getCounterBalancing.getTasks[i].getName ===
          taskNames.sortedUnaided
        ) {
          this.#results += "\n\n************ Sorted unaided task ***********\n\n";

          for (let j = 0; j < SortedSubTask.getMaxSortedSubTaskCount(); j++) {
            this.#results += "\n\n  " + (j + 1) + "\n ";
            this.#results +=
              "\n  " +
              participant.getCounterBalancing.getTasks[i].getSortedSubTasks[j]
                .getResult;
          }
        } else if (participant.getCounterBalancing.getTasks[i].getName ===
          taskNames.sortingAided) {
          this.#results += "\n\n************ Sorted aided task *************\n\n";

          for (let j = 0; j < SortedSubTask.getMaxSortedSubTaskCount(); j++) {
            this.#results += "\n\n  " + (j + 1) + "\n ";
            this.#results +=
              "\n " +
              participant.getCounterBalancing.getTasks[i].getSortedSubTasks[j]
                .getResult;
          }
        }

        else if (participant.getCounterBalancing.getTasks[i].getName ===
          taskNames.transitionUnaided) {
          this.#results += "\n\n************ Trans unaided task *************\n\n";

          for (let j = 0; j < TransSubTask.getMaxTransSubTaskCount(); j++) {

            this.#results += "\n\n  " + (j + 1) + "\n ";

            this.#results +=
              "\n  " +
              participant.getCounterBalancing.getTasks[i].getTransSubTasks[j]
                .getResult;
          }
        }

        else if (participant.getCounterBalancing.getTasks[i].getName ===
          taskNames.ratioLarge) {
          this.#results += "\n\n************ Ratio 0.12 aided task *************\n\n";

          for (let j = 0; j < TransSubTask.getMaxTransSubTaskCount(); j++) {
            this.#results += "\n\n  " + (j + 1) + "\n ";

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
        || this.#participantCode == "p5" || this.#participantCode == "p6") {
        this.#condition = "CVD";
      } else if (this.#participantCode == "p7" || this.#participantCode == "p8" || this.#participantCode == "p9" || this.#participantCode == "p10" || this.#participantCode == "p11" || this.#participantCode == "p12") {
        this.#condition = "TCV";
      }
    }
  }

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

  class TransSubTask extends SubTask {
    static maxTransSubtaskCount = 15;
    static transSubtaskCount = -2;
    #colours;
    #result;
    #order;
    #name;
    constructor(colours) {
      super();

      this.#colours = colours;
      this.#result = "";
      this.#order = "";

      this.#name = this.#colours[0].getConditionCode + "-" + this.#colours[0].getName;

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

      this.#result = "*******TransSubTask*******" +


        "\n" + "\n" + "name: " +
        this.#name +

        "\n" + "get time: " +
        super.getTime + "\n"
      "\n\n " + "order:  \n    \n  ";

      for (let i = 0; i < this.#order.length; i++) {
        this.#result += this.#order[i] + ",";
      }




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

  function getResults(participant) {
    const link = document.getElementById("results");

    displayElement(link);
    const text = participant.getResults;

    const file = new Blob([text], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "results.txt";
  }

  let openModal = () => {
    let modalBtn = document.getElementsByClassName("login-modal__login-btn")[0];
    modalBtn.addEventListener("click", login);
  }
  openModal();

  function addEvents() {



    $("#draggable-trans-example, #draggable-trans-unaided, #draggable-trans-aided").sortable({
      axis: "x",
      items: ".outline:not(.draggable-disabled)",
      disabled: false,


    });

    $(".droppable").each(function () {
      $(this).droppable({
        classes: {
          "ui-droppable-hover": "hover-droppable",
        },

        drop: function (event, ui) {


          if (SortedSubTask.getSortedSubTaskCount() > -1 && SortedSubTask.getSortedSubTaskCount() < SortedSubTask.getMaxSortedSubTaskCount()) {



            let currentSubTask =
              participant.getCounterBalancing.getTasks[
                Task.getTaskCount()
              ].getSortedSubTasks[SortedSubTask.getSortedSubTaskCount()];

            currentSubTask.setColourChosen = $(this).find("h4").text();



            document.getElementsByClassName("currentColour")[0].innerText =
              currentSubTask.getColourChosen;

            currentSubTask.setSortedSubTaskTime = document.getElementsByClassName("timer")[0].innerText;
          }
        },


      });
    });







  }
  //remove code
  //  / modal.classList.add("display-none");

  function toggleDisplayImportant(element) {
    element.classList.toggle("display-none-important");
  }

  function toggleDisplay(element) {
    element.classList.toggle("display-none");
  }
  function start(e) {
    let buttonStartTasks = document.getElementsByClassName("next-task")[0];
    let infoSection = document.getElementsByClassName("faq")[0];

    e.preventDefault();

    //    toggleDisplayImportant(buttonStartTask);


    buttonStartTasks.addEventListener("click", function () {
      nextTask(participant.getCounterBalancing);
    });
    toggleDisplayImportant(infoSection);
    nextTask(participant.getCounterBalancing);

  }

  function nextTask(counterBalancing) {

    let containerSorted = document.getElementsByClassName(
      "experiment-container__sorting-pane",
    )[0];

    let containerTrans = document.getElementsByClassName("experiment-container__transition-pane")[0];

    let draggableTransUnaided = document.getElementById("draggable-trans-unaided");
    let dragTransAided = document.getElementById("draggable-trans-aided");

    let buttonContinueTask = document.getElementsByClassName("continue")[0];
    let buttonStartTask = document.getElementsByClassName("next-task")[0];
    let faqDescription = document.getElementsByClassName(
      "experiment-container__faq-description",
    )[8];
    let title = document.getElementsByClassName(
      "experiment-container__sorting-title",
    )[0];
    var dragSorted = document.getElementById("draggable");

    isTaskCompleted = false;

    let buttonStartExp = document.getElementById("start-experiment");
    let hueBlockAided = document.getElementsByClassName(
      "experiment-container__hue-block--sorted-aided"
    )[0];
    var container = document.getElementsByClassName(
      "experiment-container"
    )[0];


    console.log("Task.getTaskCount() " + Task.getTaskCount() );

        console.log("Task.getMaxTaskCount() " + Task.getMaxTaskCount());

    if (Task.getTaskCount() == (Task.getMaxTaskCount() )) {
      SortedSubTask.zeroSortedSubTaskCount();
      TransSubTask.zeroTransSubTaskCount();
      
      getResults(participant);

    }
    
    else if (
      Task.getTaskCount() <
      (Task.getMaxTaskCount() )
    ) {


      if (
        counterBalancing.getTasks[Task.getTaskCount()]
          .getName == taskNames.sortedUnaided
      ) {

        if (SortedTask.getSortedTaskCount() == 0) {

          toggleDisplay(dragSorted);


          removeElement(buttonStartExp);


          displayElement(container);

        }
        displayElement(containerSorted);

        removeElement(containerTrans);

        toggleDisplayImportant(buttonContinueTask);

        toggleDisplayImportant(buttonStartTask);


        faqDescription.innerText =
          "The smaller bottom square is white until you press continue. The smaller square must be dragged into the correct labelled square." +
          " You will complete 90 sorts with the total time of up to 30 minutes being allocated for the task. After 30 minutes the task times out and your " +
          "selections are stored. If your time runs out, press  continue until you go to the the next task to continue the experiment. Sort each colour into the box with the correct labeled larger square. The square will revert to its " +
          "original position after being dragged into the a labelled larger square. If you want to change your selection, drag into a another labelled square. " +
          "Press continue when you are happy with your selection. Pressing next task opens a new task.";
        title.innerText = "Unaided Colour sorting task";
        nextSortedSubTask(
          participant.getCounterBalancing.getTasks[Task.getTaskCount()]
        );

      } else if (
        counterBalancing.getTasks[Task.getTaskCount()]
          .getName == taskNames.sortingAided &&
        participant.getCondition == "CVD"
      ) {


        faqDescription.innerText =
          "The smaller bottom squares are white until you press continue. The non symbol smaller square (the one that is closest to the bigger squares) " +
          "must be dragged into the correct labelled square. " +
          " You will complete 90 sorts with the total time of up to 30 minutes being allocated for the task. After 30 minutes the task times out and your " +
          "selections are stored. If your time runs out, press continue until you go to the the next task to continue the experiment. Sort each colour into the box with the correct labeled larger square. The square will revert to its " +
          "original position after being dragged into the a labelled larger square. If you want to change your selection, drag into a another labelled square. " +
          "Press continue when you are happy with your selection. Pressing next task opens a new task.";
        title.innerText = "Aided Colour sorting task";
        if (SortedTask.getSortedTaskCount() == 0) {

          toggleDisplay(dragSorted);


          removeElement(buttonStartExp);



          displayElement(container);

        }


        displayElement(hueBlockAided);

        displayElement(containerSorted);

        removeElement(containerTrans);


        toggleDisplayImportant(buttonContinueTask);

        toggleDisplayImportant(buttonStartTask);

        nextSortedSubTask(
          participant.getCounterBalancing.getTasks[Task.getTaskCount]
        );


      }
      else if (counterBalancing.getTasks[Task.getTaskCount()]
        .getName == taskNames.transitionUnaided) {

        faqDescription.innerText =
          "The smaller bottom rectangles/squares are white until you press continue" +
          " The rectangles that contain the colour and the symbol must be dragged into the correct position. To drag into the " +
          " correct position, click a square (unaided transition) or a rectangle (as shown below for aided transition), keep" +
          " it pressed and let go when placed in the correct space or position. You will complete 15 transitions in a task - " +
          " with a total time of up to 30 minutes being allocated for each task. After 30 minutes, the task " +
          " times out and your transition positions are stored. If your time runs out, press continue until you go to the the next task to continue the experiment." +
          " Pressing continue generates a new transition to organise, " +
          " and pressing the next task opens a new task. ";
        title.innerText = "Unaided Colour transition task";

        if (TransTask.getTransTaskCount() == 0) {


          displayElement(containerTrans);
          removeElement(buttonStartExp);
          displayElement(container);


        }





        removeElement(containerSorted);

        displayElement(draggableTransUnaided);
        removeElement(dragTransAided);
        toggleDisplayImportant(buttonContinueTask);
        toggleDisplayImportant(buttonStartTask);


        nextTransSubTask(
          participant.getCounterBalancing.getTasks[Task.getTaskCount()]
        );


      }
      else if (counterBalancing.getTasks[Task.getTaskCount()]
        .getName == taskNames.ratioSmall &&
        participant.getCondition == "CVD") {
        faqDescription.innerText =
          "The smaller bottom rectangles/squares are white until you press continue." +
          " The rectangles that contain the colour and the symbol must be dragged into the correct position. To drag into the " +
          " correct position, click a square (unaided transition) or a rectangle (as shown below for aided transition), keep" +
          " it pressed and let go when placed in the correct space or position. You will complete 15 transitions in a task - " +
          " with a total time of up to 30 minutes being allocated for each task. After 30 minutes, the task " +
          " times out and your transition positions are stored.If your time runs out, press continue until you go to the the next task to continue the experiment. Pressing continue generates a new transition to organise, " +
          " and pressing the next task opens a new task. ";
        title.innerText = "Aided initial 0.04 ratio Colour transition task";
        if (TransTask.getTransTaskCount() == 0) {


          displayElement(containerTrans);
          removeElement(buttonStartExp);
          displayElement(container);


        }

        removeElement(containerSorted);

        displayElement(containerTrans);


        removeElement(draggableTransUnaided);
        displayElement(dragTransAided);

        toggleDisplayImportant(buttonContinueTask);
        toggleDisplayImportant(buttonStartTask);


        nextTransSubTask(
          participant.getCounterBalancing.getTasks[Task.getTaskCount()]
        );


      }
      else if (counterBalancing.getTasks[Task.getTaskCount()]
        .getName == taskNames.ratioMid &&
        participant.getCondition == "CVD") {
        faqDescription.innerText =
          "The smaller bottom rectangles/squares are white until you press continue. " +
          " The rectangles that contain the colour and the symbol must be dragged into the correct position. To drag into the " +
          " correct position, click a square (unaided transition) or a rectangle (as shown below for aided transition), keep" +
          " it pressed and let go when placed in the correct space or position. You will complete 15 transitions in a task - " +
          " with a total time of up to 30 minutes being allocated for each task. After 30 minutes, the task " +
          " times out and your transition positions are stored. If your time runs out, press continue until you go to the the next task to continue the experiment. Pressing continue generates a new transition to organise, " +
          " and pressing the next task opens a new task. ";
        title.innerText = "Aided initial 0.08 ratio Colour transition task";
        if (TransTask.getTransTaskCount() == 0) {


          displayElement(containerTrans);
          removeElement(buttonStartExp);
          displayElement(container);


        }
        removeElement(containerSorted);




        displayElement(containerTrans);

        displayElement(dragTransAided);

        removeElement(draggableTransUnaided)

        toggleDisplayImportant(buttonContinueTask);
        toggleDisplayImportant(buttonStartTask);


        nextTransSubTask(
          participant.getCounterBalancing.getTasks[Task.getTaskCount()]
        );


      }

      else if (counterBalancing.getTasks[Task.getTaskCount()]
        .getName == taskNames.ratioLarge &&
        participant.getCondition == "CVD") {
        faqDescription.innerText =
          "The smaller bottom rectangles/squares are white until you press continue." +
          " The rectangles that contain the colour and the symbol must be dragged into the correct position. To drag into the " +
          " correct position, click a square (unaided transition) or a rectangle (as shown below for aided transition), keep" +
          " it pressed and let go when placed in the correct space or position. You will complete 15 transitions in a task - " +
          " with a total time of up to 30 minutes being allocated for each task. After 30 minutes, the task " +
          " times out and your transition positions are stored.If your time runs out, press continue until you go to the the next task to continue the experiment. Pressing continue generates a new transition to organise, " +
          " and pressing the next task opens a new task. ";
        title.innerText = "Aided initial 0.12 ratio Colour transition task";
        if (TransTask.getTransTaskCount() == 0) {

          displayElement(containerTrans);

          removeElement(buttonStartExp);

          displayElement(container);

        }

        removeElement(containerSorted);





        removeElement(draggableTransUnaided);

        displayElement(dragTransAided)

        toggleDisplayImportant(buttonContinueTask);
        toggleDisplayImportant(buttonStartTask);


        nextTransSubTask(
          participant.getCounterBalancing.getTasks[Task.getTaskCount()]
        );


      }

    }
  }

  function displayElement(element) {
    if (element.classList.contains("display-none-important")) {

      toggleDisplayImportant(element);
    }
    else if (element.classList.contains("display-none")) {

      toggleDisplay(element);
    }
  }

  function removeElement(element) {
    if (!element.classList.contains("display-none-important") && !element.classList.contains("display-none")) {

      toggleDisplayImportant(element);

    }

  }

  // Update the count down every 1 second

  function setSortedSymbol(colourActual) {

    let hueBlockAided = document.getElementsByClassName(
      "experiment-container__hue-block--sorted-aided",
    )[0];




    if (!hueBlockAided.getElementsByTagName("img")[0]) {
      let img = document.createElement("img");




      hueBlockAided.classList.add("colour-iconizer-container");



      hueBlockAided.appendChild(img);

      img.classList.add("colour-iconizer--border");
      img.classList.add("colour-iconizer");



    }
    let anImg = hueBlockAided.getElementsByTagName("img")[0];
    anImg.src = "assets/ColourIconiser/" + getSortedSymbolImage(colourActual.getName);
  }

  function removeSortedSymbol(element) {
    element.remove();
  }
  function getSortedSymbolImage(Sorted) {
    let imgFilename = "";
    switch (Sorted) {

      case "red":
        imgFilename = "redIcon.svg";
        break;
      case "orange":
        imgFilename = "orange.svg";
        break;
      case "green":
        imgFilename = "tree.svg";
        break;
      case "bluish-green":
        imgFilename = "egg.svg";
        break;
      case "blue":
        imgFilename = "drop.svg";
        break;
      case "purple":
        imgFilename = "grape.svg";
        break;
      case "pink":
        imgFilename = "flamingo.svg";
        break;
      case "grey":
        imgFilename = "mountain.svg";
        break;
      case "brown":
        imgFilename = "poop.svg";
        break;
      case "yellow":
        imgFilename = "star.svg";
        break;
      case "tan":
        imgFilename = "poop.svg";
        break;
      case "dodgerBlue":
        imgFilename = "drop.svg";
        break;


    }
    return imgFilename;
  }

  function switchColours(element, removeClass, addClass) {

    element.classList.remove(removeClass);
    element.classList.add(addClass);
  }


  function createTransColourArray() {
    let subtasks = [];
    createAndAddTransColourBlocks("grey-pink", "protan", subtasks);
    createAndAddTransColourBlocks("grey-dark-bluish-green", "protan", subtasks);
    createAndAddTransColourBlocks("blue-purple", "protan", subtasks);
    createAndAddTransColourBlocks("red-brown", "protan", subtasks);
    createAndAddTransColourBlocks("orange-green", "protan", subtasks);

    createAndAddTransColourBlocks("grey-pink", "deutan", subtasks);
    createAndAddTransColourBlocks("grey-bluish-green", "deutan", subtasks);
    createAndAddTransColourBlocks("dodgerBlue-purple", "deutan", subtasks);
    createAndAddTransColourBlocks("orange-red", "deutan", subtasks);
    createAndAddTransColourBlocks("yellow-green", "deutan", subtasks);

    createAndAddTransColourBlocks("grey-purple", "tritan", subtasks);
    createAndAddTransColourBlocks("grey-yellow", "tritan", subtasks);
    createAndAddTransColourBlocks("purple-yellow", "tritan", subtasks);
    createAndAddTransColourBlocks("green-bluish-green", "tritan", subtasks);
    createAndAddTransColourBlocks("darkRed-orange", "tritan", subtasks);
    shuffleArray(subtasks);

    return subtasks;
  }

  function createSortedColourArray() {
    colourArray = [];

    createAndAddSortedColour("pink", "protan", colourArray);
    createAndAddSortedColour("grey", "protan", colourArray);
    createAndAddSortedColour("blue", "protan", colourArray);
    createAndAddSortedColour("purple", "protan", colourArray);
    createAndAddSortedColour("green", "protan", colourArray);
    createAndAddSortedColour("yellow", "protan", colourArray);

    createAndAddSortedColour("bluish-green", "deutan", colourArray);
    createAndAddSortedColour("grey", "deutan", colourArray);
    createAndAddSortedColour("blue", "deutan", colourArray);
    createAndAddSortedColour("purple", "deutan", colourArray);
    createAndAddSortedColour("red", "deutan", colourArray);
    createAndAddSortedColour("brown", "deutan", colourArray);

    createAndAddSortedColour("yellow", "tritan", colourArray);
    createAndAddSortedColour("tan", "tritan", colourArray);
    createAndAddSortedColour("blue", "tritan", colourArray);
    createAndAddSortedColour("green", "tritan", colourArray);
    createAndAddSortedColour("pink", "tritan", colourArray);
    createAndAddSortedColour("orange", "tritan", colourArray);

    shuffleArray(colourArray);

    return colourArray;
  }
  function createAndAddTransColourBlocks(hue, conditionCode, subtasks) {

    let colourArray = [];
    for (let i = 0; i < 10; i++) {
      colourArray.push(
        new Colour(hue, i + 1, conditionCode)
      );


    }

    let clonedSubtask = colourArray.slice(1, 9);
    shuffleArray(clonedSubtask);
    clonedSubtask.unshift(colourArray[0]);
    clonedSubtask.push(colourArray[9]);

    subtasks.push(new TransSubTask(clonedSubtask));

  }

  function addImageAddressToImgs(tranRatioSubTask, taskName) {

    //need to get trans subtask 
    for (let i = 0; i < tranRatioSubTask.getColours.length; i++) {
      let imgFilenames = getTransSymbolImage(tranRatioSubTask.getColours[i].getName);
      let figure = document.getElementById("draggable-trans-aided").getElementsByClassName("colour-mix-container outline")[i];
      let imgs = figure.getElementsByClassName("symbol--border")[1].getElementsByTagName("img");


      let a = tranRatioSubTask.getColours[i].getShadeNum - 1;
      if (TransSubTask.getTransSubTaskCount() == -1) {
        setImgsBlank(imgs);
      }
      else {
        if (taskName == taskNames.ratioSmall) {


          if (a == 0) {


            //tranRatioSubTask.getColours[a].getShadeNum
            setImgFile(imgs, imgFilenames, 4, 1, a)

            setImageOpacity(imgs, 1, 10);

            // 4 4 3 3 2 2 2 1 1 0
            //0 1 1 2 2 2 3 3 4 4
          }
          else if (a == 1) {


            setImgFile(imgs, imgFilenames, 4, 1, a)

            setImageOpacity(imgs, 2, 9);
          }

          else if (a == 2) {



            setImgFile(imgs, imgFilenames, 3, 1, a)
            setImageOpacity(imgs, 3, 8);

          }
          else if (a == 3) {




            setImgFile(imgs, imgFilenames, 3, 2, a)
            setImageOpacity(imgs, 4, 7);


          }
          else if (a == 4) {


            setImgFile(imgs, imgFilenames, 2, 2, a)

            setImageOpacity(imgs, 5, 6);


          }

          else if (a == 5) {
            setImgFile(imgs, imgFilenames, 2, 2, a)
            setImageOpacity(imgs, 6, 5);
          }

          else if (a == 6) {


            setImgFile(imgs, imgFilenames, 2, 3, a)

            setImageOpacity(imgs, 7, 4);



          }
          else if (a == 7) {


            setImgFile(imgs, imgFilenames, 1, 3, a)


            setImageOpacity(imgs, 8, 3);


          }
          else if (a == 8) {


            setImgFile(imgs, imgFilenames, 1, 4, a)

            setImageOpacity(imgs, 9, 2);



          }
          else if (a == 9) {

            setImgFile(imgs, imgFilenames, 1, 4, a);

            setImageOpacity(imgs, 10, 1);



          }
        }
        else if (taskName == taskNames.ratioMid) {
          if (a == 0) {





            setImgFile(imgs, imgFilenames, 8, 1, a)
            setImageOpacity(imgs, 1, 10);



            // 4 4 3 3 2 2 2 1 1 0
            //0 1 1 2 2 2 3 3 4 4
          }
          else if (a == 1) {






            setImageOpacity(imgs, 2, 9);

            setImgFile(imgs, imgFilenames, 7, 2, a)



          }

          else if (a == 2) {




            setImageOpacity(imgs, 3, 8);

            setImgFile(imgs, imgFilenames, 6, 2, a)



          }
          else if (a == 3) {





            setImageOpacity(imgs, 4, 7);

            setImgFile(imgs, imgFilenames, 6, 3, a)


          }
          else if (a == 4) {




            setImageOpacity(imgs, 5, 6);

            setImgFile(imgs, imgFilenames, 5, 4, a)



          }

          else if (a == 5) {


            setImageOpacity(imgs, 6, 5);


            setImgFile(imgs, imgFilenames, 4, 5, a)

          }

          else if (a == 6) {


            setImageOpacity(imgs, 7, 4);


            setImgFile(imgs, imgFilenames, 3, 6, a)



          }
          else if (a == 7) {

            setImageOpacity(imgs, 8, 3);



            setImgFile(imgs, imgFilenames, 2, 6, a)



          }
          else if (a == 8) {


            setImageOpacity(imgs, 9, 2);

            setImgFile(imgs, imgFilenames, 2, 7, a)


          }
          else if (a == 9) {
            setImageOpacity(imgs, 10, 1);


            setImgFile(imgs, imgFilenames, 1, 8, a)

          }
        }
        else if (taskName == taskNames.ratioLarge) {

          if (a == 0) {



            setImageOpacity(imgs, 1, 10);

            setImgFile(imgs, imgFilenames, 12, 1, a)


          }
          else if (a == 1) {

            setImageOpacity(imgs, 2, 9);

            setImgFile(imgs, imgFilenames, 11, 3, a)


          }

          else if (a == 2) {


            setImageOpacity(imgs, 3, 8);


            setImgFile(imgs, imgFilenames, 10, 4, a)




          }
          else if (a == 3) {

            setImageOpacity(imgs, 4, 7);

            setImgFile(imgs, imgFilenames, 8, 5, a)


          }
          else if (a == 4) {

            setImageOpacity(imgs, 5, 6);

            setImgFile(imgs, imgFilenames, 7, 6, a)



          }

          else if (a == 5) {
            setImageOpacity(imgs, 6, 5);

            setImgFile(imgs, imgFilenames, 6, 7, a)



          }

          else if (a == 6) {



            setImgFile(imgs, imgFilenames, 5, 8, a)
            setImageOpacity(imgs, 7, 4);



          }
          else if (a == 7) {




            setImgFile(imgs, imgFilenames, 4, 10, a)
            setImageOpacity(imgs, 8, 3);


          }
          else if (a == 8) {






            setImgFile(imgs, imgFilenames, 3, 11, a)
            setImageOpacity(imgs, 9, 2);



          }
          else if (a == 9) {





            setImgFile(imgs, imgFilenames, 1, 12, a)
            setImageOpacity(imgs, 10, 1);



          }
        }

      }


    }
  }
  function setImageOpacity(imgs, opacityNumberOne, opacityNumberTwo) {

    imgs[0].className = "colour-mix  hide-white-bg colour-mix--opacity-" + opacityNumberOne;
    imgs[1].className = "colour-mix img--overlay-move-up  hide-white-bg colour-mix--opacity-" + opacityNumberTwo;

  }
  function setImgsBlank(imgs) {
    imgs[0].src = "assets/colourmix/white/" + "blank.svg";
    imgs[1].src = "assets/colourmix/white/" + "blank.svg";

  }

  function setImgFile(imgs, imgFilenames, firstThickness, secondThickness, i) {

    if (!imgFilenames[1].includes("blank")) {
      imgs[1].src = imgFilenames[1] + secondThickness + "px.svg";
      imgs[0].src = imgFilenames[0] + firstThickness + "px.svg";
      if (!imgs[0].classList.contains("colour-mix--opacity-tenth") && i == 9) {
        imgs[0].classList.add("colour-mix--opacity-tenth");

      }
    }
    else {
      imgs[0].src = imgFilenames[0] + firstThickness + "px.svg";
      imgs[1].src = imgFilenames[1];
      if (imgs[0].classList.contains("colour-mix--opacity-tenth ") && i == 9) {
        imgs[0].classList.remove("colour-mix--opacity-tenth");

      }
    }


  }
  // shuffleArray(smallerColourArray);




  function createAndAddSortedColour(hue, conditionCode, colourArray) {
    for (let i = 0; i < 5; i++) {
      colourArray.push(
        new SortedSubTask("n/a", new Colour(hue, i + 1, conditionCode)),
      );
    }
  }

  function getTransSymbolImage(colour) {
    let imgFilenames = [];
    switch (colour) {


      case "grey-dark-bluish-green":
        imgFilenames.push("assets/colourmix/bluish-green-grey/colormix_bluish-green_grey_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/white/blank.svg");
        break;

      case "grey-teal":
        imgFilenames.push("assets/colourmix/green-grey/colormix_green_grey_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/white/blank.svg");

        break;
      case "blue-purple":
        imgFilenames.push("assets/colourmix/blue/colormix_blue_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/purple/colormix_purple_icon_black_stroke_");

        break;
      case "red-brown":
        imgFilenames.push("assets/colourmix/red/colormix_red_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/brown/colormix_brown_icon_black_stroke_");
        break;
      case "orange-green":
        imgFilenames.push("assets/colourmix/orange/colormix_orange_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/green/colormix_green_icon_black_stroke_");
        break;

      case "grey-pink":
        imgFilenames.push("assets/colourmix/pink-grey/colormix_red_grey_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/white/blank.svg");

        break;
      case "grey-bluish-green":
        imgFilenames.push("assets/colourmix/bluish-green-grey/colormix_bluish-green_grey_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/white/blank.svg");

        break;

      case "dodgerBlue-purple":
        imgFilenames.push("assets/colourmix/blue/colormix_blue_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/purple/colormix_purple_icon_black_stroke_");

        break;

      case "orange-red":

        imgFilenames.push("assets/colourmix/orange/colormix_orange_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/red/colormix_red_icon_black_stroke_");
        break;

      case "yellow-green":
        imgFilenames.push("assets/colourmix/yellow/colormix_yellow_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/green/colormix_green_icon_black_stroke_");
        break;

      case "grey-purple":
        imgFilenames.push("assets/colourmix/purple-grey/colormix_purple_grey_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/white/blank.svg");

        break;

      case "purple-yellow":
        imgFilenames.push("assets/colourmix/purple/colormix_purple_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/yellow/colormix_yellow_icon_black_stroke_");
        break;

      case "grey-yellow":
        imgFilenames.push("assets/colourmix/yellow-grey/colormix_yellow_grey_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/white/blank.svg");
        break;

      case "green-bluish-green":
        imgFilenames.push("assets/colourmix/green/colormix_green_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/bluish-green/colormix_bluish-green_icon_black_stroke_");

        break;

      case "darkRed-orange":
        imgFilenames.push("assets/colourmix/red/colormix_red_icon_black_stroke_");
        imgFilenames.push("assets/colourmix/orange/colormix_orange_icon_black_stroke_");
        break;

    }
    return imgFilenames;
  }
  // reference https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
  function theTimer(startDate, taskName) {
    setInterval(function () {
      if (Task.getTaskCount() < Task.getMaxTaskCount()) {
        if ((SortedSubTask.getSortedSubTaskCount() >= 0 && (taskName == taskNames.sortedUnaided || taskName == taskNames.sortingAided))

          || (TransSubTask.getTransSubTaskCount() >= 0 && (taskName == taskNames.transitionUnaided || taskName == taskNames.ratioSmall || taskName == taskNames.ratioLarge || taskName == taskNames.ratioMid))

        ) {
          var now = new Date();


          let timeDifference = now.getTime() - startDate.getTime();

          let minutes = Math.floor((timeDifference / (60 * 1000)) % 60);
          let seconds = Math.floor((timeDifference / (1000)) % 60);
          let milliseconds = Math.floor((timeDifference % 1000));

          document.getElementsByClassName("timer")[0].innerText = minutes + ":" + theSeconds(seconds) + ":" + theMilliseconds(milliseconds);

          if (minutes >= 30) {
            document.getElementsByClassName("timer")[0].innerText = "30:00:000";
            $("#draggable").draggable({

              disabled: true,

            });


            $(" #draggable-trans-unaided, #draggable-trans-aided").sortable({
              axis: "x",
              disabled: true,

              //TEST THISSSSSSSSSSSSSSSSSSSSS
            });


          }

          // https://www.delftstack.com/howto/javascript/javascript-count-up-timer/
        }


        if ((SortedSubTask.getSortedSubTaskCount() == -1 && (taskName == taskNames.sortedUnaided || taskName == taskNames.sortingAided))
          || (TransSubTask.getTransSubTaskCount() == -1 && (taskName == taskNames.transitionUnaided || taskName == taskNames.ratioSmall || taskName == taskNames.ratioLarge || taskName == taskNames.ratioMid))


        ) {
          startDate = new Date();



        }

      }


    }, 1);



  }


  function theMilliseconds(milliseconds) {
    if (milliseconds < 10) {
      milliseconds = "00" + milliseconds;
    }
    else if (milliseconds < 100) {
      milliseconds = "0" + milliseconds;
    }

    else if (milliseconds == 100) {
      milliseconds = "000";
    }

    return milliseconds;
  }

  function theSeconds(seconds) {
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    else if (seconds == 60) {
      seconds = "00";
    }

    return seconds;
  }




  function nextSortedSubTask(task) {
    //indexTask, indexSubTask counterBalancing.setCount




    let buttonStartTask = document.getElementsByClassName("next-task")[0];
    let buttonContinueTask = document.getElementsByClassName("continue")[0];
    SortedSubTask.setSortedSubTaskCount();

    document.getElementsByClassName("currentColour")[0].innerText =
      "not picked";


    if (SortedSubTask.getSortedSubTaskCount() == -1) {
      var dragSorted = document.getElementById("draggable");
      document.getElementsByClassName("timer")[0].innerText = "0:00:000";

      dragSorted.classList.add("experiment-container__hue-block--white");
      document.getElementsByClassName("num-subtasks")[0].innerText = 90;

      $("#draggable").draggable({

        disabled: true,

      });
      // }
    } else if (SortedSubTask.getSortedSubTaskCount() == 0) {
      $("#draggable").draggable({
        snap: ".experiment-container__hue-block",
        snapMode: "inner",
        revert: true,

        disabled: false,

      });

      let startDate = new Date();

      document.getElementsByClassName("num-subtasks")[0].innerText = 90 - SortedSubTask.getSortedSubTaskCount();

      addPlaceholderBlockColour(task);


      if (task.getName ===
        taskNames.sortingAided) {

        setSortedSymbol(task.getSortedSubTasks[SortedSubTask.getSortedSubTaskCount()].getColourActual);

        theTimer(startDate, taskNames.sortingAided);

      }
      else {
        theTimer(startDate, taskNames.sortedUnaided);

      }






    } else if (
      SortedSubTask.getSortedSubTaskCount() ==
      (SortedSubTask.getMaxSortedSubTaskCount())
    ) {
      document.getElementsByClassName("num-subtasks")[0].innerText = 90 - SortedSubTask.getSortedSubTaskCount();

      removeBlockColour(task);


      $("#draggable").draggable({ disabled: true });

      toggleDisplayImportant(buttonStartTask);
      toggleDisplayImportant(buttonContinueTask);
      let hueBlockAided = document.getElementsByClassName(
        "experiment-container__hue-block--sorted-aided"
      )[0];

      if (task.getName ===
        taskNames.sortingAided) {

        removeSortedSymbol(hueBlockAided);
      }

      let currentSubTask =
        participant.getCounterBalancing.getTasks[
          Task.getTaskCount()
        ].getSortedSubTasks[SortedSubTask.getSortedSubTaskCount() - 1];

      setTaskTime(currentSubTask);

      SortedSubTask.resetSortedSubTaskCount();
      SortedTask.setSortedTaskCount();
      Task.setTaskCount();

    }

    else if (
      SortedSubTask.getSortedSubTaskCount() <
      SortedSubTask.getMaxSortedSubTaskCount()
    ) {
      document.getElementsByClassName("num-subtasks")[0].innerText = 90 - SortedSubTask.getSortedSubTaskCount();




      if (task.getName ===
        taskNames.sortingAided) {

        setSortedSymbol(task.getSortedSubTasks[SortedSubTask.getSortedSubTaskCount()].getColourActual);
      }

      if (SortedSubTask.getSortedSubTaskCount() > 0) {



        nextExperimentBlockColour(task);


      }

      if (SortedSubTask.getSortedSubTaskCount() > 0) {
        let currentSubTask =
          participant.getCounterBalancing.getTasks[
            Task.getTaskCount()
          ].getSortedSubTasks[SortedSubTask.getSortedSubTaskCount() - 1];



        setTaskTime(currentSubTask);
      }

    }

    // code block
  }



  function nextExperimentBlockColour(task) {

    let dragSorted = document.getElementById("draggable");

    let colourActualPresent =
      task.getSortedSubTasks[SortedSubTask.getSortedSubTaskCount()]
        .getColourActual;
    let colourActualPrevious =
      task.getSortedSubTasks[SortedSubTask.getSortedSubTaskCount() - 1]
        .getColourActual;

    let colourActualPresentClass = getCssColour(colourActualPresent, "experiment-container__hue-block--");
    let colourActualPreviousClass = getCssColour(colourActualPrevious, "experiment-container__hue-block--");

    switchColours(
      dragSorted,
      colourActualPreviousClass,
      colourActualPresentClass,
    );

  }
  function colouredTransHueBlocks(task, dragTransHueBlocks) {
    for (let i = 0; i < dragTransHueBlocks.length; i++) {



      if ((TransSubTask.getTransSubTaskCount() == -1) || (TransSubTask.getTransSubTaskCount() == TransSubTask.getMaxTransSubTaskCount())) {

        if (i > 0 && i < 9) {

          if (task.getName == taskNames.transitionUnaided) {
            dragTransHueBlocks[i].className = "symbol--border outline experiment-container__hue-block experiment-container__hue-block--small " + "experiment-container__hue-block--white";
          }
          else {
            dragTransHueBlocks[i].className = "symbol--border  experiment-container__hue-block experiment-container__hue-block--small " + "experiment-container__hue-block--white";

          }
        }
        else {
          if (task.getName == taskNames.transitionUnaided) {

            dragTransHueBlocks[i].className = "symbol--border outline experiment-container__hue-block experiment-container__hue-block--small draggable-disabled " + "experiment-container__hue-block--white";
          }
          else {

            dragTransHueBlocks[i].className = "symbol--border experiment-container__hue-block experiment-container__hue-block--small draggable-disabled " + "experiment-container__hue-block--white";
          }
        }
      }
      else if (TransSubTask.getTransSubTaskCount() >= 0) {

        let colourActualPresent =
          task.getTransSubTasks[TransSubTask.getTransSubTaskCount()].getColours[i];
        let colourActualPresentClass = getCssColour(colourActualPresent, "experiment-container__hue-block-transition--");

        // let colourActualPrevious =
        //   task.getTransSubTasks[TransSubTask.getTransSubTaskCount() ].getColours[i];
        // let colourActualPreviousClass = getCssColour(colourActualPrevious, "experiment-container__hue-block-transition--");

        // switchColours(
        //   dragTransHueBlocks[i],
        //   colourActualPreviousClass,
        //   colourActualPresentClass,
        // );

        if (i > 0 && i < 9) {

          if (task.getName == taskNames.transitionUnaided) {
            dragTransHueBlocks[i].className = "symbol--border outline experiment-container__hue-block experiment-container__hue-block--small  " + colourActualPresentClass;
          }
          else {
            dragTransHueBlocks[i].className = "symbol--border  experiment-container__hue-block experiment-container__hue-block--small  " + colourActualPresentClass;

          }
        }
        else {
          if (task.getName == taskNames.transitionUnaided) {

            dragTransHueBlocks[i].className = "symbol--border outline experiment-container__hue-block experiment-container__hue-block--small draggable-disabled " + colourActualPresentClass;
          }
          else {

            dragTransHueBlocks[i].className = "symbol--border experiment-container__hue-block experiment-container__hue-block--small draggable-disabled " + colourActualPresentClass;
          }
        }
      }
    }
  }




  function nextTransSubTask(task) {

    //indexTask, indexSubTask counterBalancing.setCount



    let buttonStartTask = document.getElementsByClassName("next-task")[0];
    let buttonContinueTask = document.getElementsByClassName("continue")[0];
    let transitionHueBlocksUnaided = document.getElementById("draggable-trans-unaided").getElementsByClassName("experiment-container__hue-block--small");

    let dragTransAided = document.getElementById("draggable-trans-aided");
    let dragTransAidedHueBlocks = dragTransAided.getElementsByClassName("experiment-container__hue-block--small");
    TransSubTask.setTransSubTaskCount();

    if (TransSubTask.getTransSubTaskCount() == -1) {

      document.getElementsByClassName("timer")[0].innerText = "0:00:000";

      document.getElementsByClassName("num-subtasks")[0].innerText = 15;
      if ((task.getName == taskNames.transitionUnaided)) {

        colouredTransHueBlocks(task, transitionHueBlocksUnaided);
      }
      else {
        colouredTransHueBlocks(task, dragTransAidedHueBlocks);

      }

      addImageAddressToImgs(task.getSubTasks[0], "");
      $("#draggable-trans-unaided").sortable("disable");
      $("#draggable-trans-aided").sortable("disable");

      // }
    } else if (TransSubTask.getTransSubTaskCount() >= 0 && TransSubTask.getTransSubTaskCount() < TransSubTask.getMaxTransSubTaskCount()) {



      let order = [];

      if (task.getName == taskNames.transitionUnaided) {
        getPositionAndColourInfo(order, "draggable-trans-unaided");
        $("#draggable-trans-unaided").sortable("enable");

      }
      else {
        getPositionAndColourInfo(order, "draggable-trans-aided");

        $("#draggable-trans-aided").sortable(

          // items: ".symbol--border  .experiment-container__hue-block .experiment-container__hue-block--small"

          "enable"

        );
      }

      if (TransSubTask.getTransSubTaskCount() > 0) {
        participant.getCounterBalancing.getTasks[Task.getTaskCount()].getTransSubTasks[TransSubTask.getTransSubTaskCount() - 1].setOrder = order;
        participant.getCounterBalancing.getTasks[Task.getTaskCount()].getTransSubTasks[TransSubTask.getTransSubTaskCount() - 1].setTime = document.getElementsByClassName("timer")[0].innerText;
      }







      //taskNames.ratioSmall || taskNames.ratioMid || taskNames.ratioLarge
      //set symbols 

      //        setTransSymbol method requires creating



      document.getElementsByClassName("num-subtasks")[0].innerText = 15 - TransSubTask.getTransSubTaskCount();

      if (task.getName == taskNames.transitionUnaided) {


        colouredTransHueBlocks(task, transitionHueBlocksUnaided);

        if (TransSubTask.getTransSubTaskCount() == 0) {
          let startDate = new Date();

          theTimer(startDate, taskNames.transitionUnaided);
        }

      }

      else {



        if (task.getName == taskNames.ratioSmall) {

          colouredTransHueBlocks(task, dragTransAidedHueBlocks);

          addImageAddressToImgs(task.getSubTasks[TransSubTask.getTransSubTaskCount()], taskNames.ratioSmall);
          // addImageAddressToImgs(tranRatioMediumSubTasks, taskNames.ratioMid);
          // addImageAddressToImgs(tranRatioLargeSubTasks, taskNames.ratioLarge);

          if (TransSubTask.getTransSubTaskCount() == 0) {
            let startDate = new Date();
            theTimer(startDate, taskNames.ratioSmall);
          }
        }
        else if (task.getName == taskNames.ratioMid) {

          colouredTransHueBlocks(task, dragTransAidedHueBlocks);

          addImageAddressToImgs(task.getSubTasks[TransSubTask.getTransSubTaskCount()], taskNames.ratioMid);

          if (TransSubTask.getTransSubTaskCount() == 0) {
            let startDate = new Date();
            theTimer(startDate, taskNames.ratioMid);
          }

        }
        else if (task.getName == taskNames.ratioLarge) {

          colouredTransHueBlocks(task, dragTransAidedHueBlocks);

          addImageAddressToImgs(task.getSubTasks[TransSubTask.getTransSubTaskCount()], taskNames.ratioLarge);


          if (TransSubTask.getTransSubTaskCount() == 0) {
            let startDate = new Date();
            theTimer(startDate, taskNames.ratioLarge);
          }


        }






      }







    }

    if (TransSubTask.getTransSubTaskCount() == TransSubTask.getMaxTransSubTaskCount()) {
      document.getElementsByClassName("num-subtasks")[0].innerText = 15 - TransSubTask.getTransSubTaskCount();
      $("#draggable-trans-unaided").sortable("disable");
      $("#draggable-trans-aided").sortable(

        "disable"

      );


      let order = [];

      if (task.getName == taskNames.transitionUnaided) {
        getPositionAndColourInfo(order, "draggable-trans-unaided");
        $("#draggable-trans-unaided").sortable("enable");

      }
      else {
        getPositionAndColourInfo(order, "draggable-trans-aided");

        $("#draggable-trans-aided").sortable(

          // items: ".symbol--border  .experiment-container__hue-block .experiment-container__hue-block--small"

          "enable"

        );
      }

      if (TransSubTask.getTransSubTaskCount() > 0) {
        participant.getCounterBalancing.getTasks[Task.getTaskCount()].getTransSubTasks[TransSubTask.getTransSubTaskCount() - 1].setOrder = order;
        participant.getCounterBalancing.getTasks[Task.getTaskCount()].getTransSubTasks[TransSubTask.getTransSubTaskCount() - 1].setTime = document.getElementsByClassName("timer")[0].innerText;
      }

      TransSubTask.resetTransSubTaskCount();
      TransTask.setTransTaskCount();
      Task.setTaskCount();
      toggleDisplayImportant(buttonStartTask);
      toggleDisplayImportant(buttonContinueTask);
    }


    // code block

  }


  // setTransparentSymbols(colourActualFirst, colourActualLast, ratio, i)


  function getPositionAndColourInfo(colourArrayData, elementName) {
    // taskname required
    let colourBlocks = document.getElementById(elementName)
      .getElementsByClassName("symbol--border experiment-container__hue-block experiment-container__hue-block--small");
    for (let i = 0; i < colourBlocks.length; i++) {
      let colourCSS = colourBlocks[i].className.split(" ");
      let colourData = colourCSS[colourCSS.length - 1].replace("experiment-container__hue-block-transition--", "");

      colourData = colourData.split("-");



      colourArrayData.push(colourData[colourData.length - 1]);

    }



    // you need to know the symbol ratio as well
  }
  function setTaskTime(currentSubTask) {



    if (currentSubTask.getSortedSubTaskTime == "n/a") {

      currentSubTask.setSortedSubTaskTime = document.getElementsByClassName("timer")[0].innerText;
    }

  }

  function addPlaceholderBlockColour(task) {
    let colourActualPresent =
      task.getSortedSubTasks[SortedSubTask.getSortedSubTaskCount()]
        .getColourActual;

    let dragSorted = document.getElementById("draggable");


    let colourActualPresentClass = getCssColour(colourActualPresent, "experiment-container__hue-block--");
    switchColours(
      dragSorted,
      "experiment-container__hue-block--white",
      colourActualPresentClass,
    );
  }
  function removeBlockColour(task) {
    let dragSorted = document.getElementById("draggable");

    let colourPreviousPresent =
      task.getSortedSubTasks[SortedSubTask.getSortedSubTaskCount() - 1]
        .getColourActual;
    let colourPreviousPresentClass = getCssColour(colourPreviousPresent, "experiment-container__hue-block--");
    dragSorted.classList.remove(colourPreviousPresentClass);

  }


  function getCssColour(colour, prefix) {
    let aColourClass =
      prefix +
      colour.getConditionCode +
      "-" +
      colour.getName +
      "-" +
      colour.getShadeNum;

    return aColourClass;
  }
  /*https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }



  function login(event) {
    event.preventDefault();
    // Get the form
    var modalSelect = document.getElementsByClassName("login-modal__select")[0];


    var modalInput = document.getElementById("passname");
    let isFound = checkPassword(modalSelect.value, modalInput.value);

    if (isFound) {
      participant = new Participant(modalSelect.value);
      participant.assignACondition();

      let counterBalancing = new CounterBalancing();

      participant.setCounterBalancing = counterBalancing;
      let sortedUnaidedSubTasks = createSortedColourArray();
      let sortedAidedSubTasks = createSortedColourArray();

      let transUnaidedSubTasks = createTransColourArray();

      let tranRatioSmallSubTasks = createTransColourArray();
      let tranRatioMediumSubTasks = createTransColourArray();
      let tranRatioLargeSubTasks = createTransColourArray();

      addEvents();

      counterBalancing.setTasks(participant.getParticipantCode, sortedUnaidedSubTasks, sortedAidedSubTasks, transUnaidedSubTasks, tranRatioSmallSubTasks, tranRatioMediumSubTasks, tranRatioLargeSubTasks);






      let modal = document.getElementsByClassName("login-modal")[0];


      let mode = document.getElementsByClassName("header__mode")[0];

      let code = document.getElementsByClassName("header__code")[0];
      mode.innerText = "mode: " + participant.getCondition;
      code.innerText = "code: " + participant.getParticipantCode;
      let buttonStartExp = document.getElementById("start-experiment");
      modal.classList.add("display-none-important");

      buttonStartExp.addEventListener("click", start);

      buttonContinueTask = document.getElementsByClassName("continue")[0];

      buttonContinueTask.addEventListener("click", function () {

        if (participant.getCounterBalancing.getTasks[Task.getTaskCount()].getName == taskNames.sortingAided || counterBalancing.getTasks[Task.getTaskCount()].getName == taskNames.sortedUnaided) {

          nextSortedSubTask(

            participant.getCounterBalancing.getTasks[Task.getTaskCount()]
          );

        }
        else {


          nextTransSubTask(
            participant.getCounterBalancing.getTasks[Task.getTaskCount()]
          )
        }
      });
    }
  }

  function checkPassword(participantCode, participantPassword) {
    if (
      (participantCode == "p1" && participantPassword == "passcode1") ||
      (participantCode == "p2" && participantPassword == "passcode2") ||
      (participantCode == "p3" && participantPassword == "passcode3") ||
      (participantCode == "p4" && participantPassword == "passcode4") ||
      (participantCode == "p5" && participantPassword == "passcode5") ||
      (participantCode == "p6" && participantPassword == "passcode6") ||
      (participantCode == "p7" && participantPassword == "passcode7") ||
      (participantCode == "p8" && participantPassword == "passcode8") ||
      (participantCode == "p9" && participantPassword == "passcode9") ||
      (participantCode == "p10" && participantPassword == "passcode10") ||
      (participantCode == "p11" && participantPassword == "passcode11") ||
      (participantCode == "p12" && participantPassword == "passcode12")


    ) {
      return participantCode;
    }

    return false;
  }






  //  <figure class="colour-mix-container draggable-sort">


  //  <div class="symbol--border"><img class="colour-mix colour-iconizer--opacity-first  "
  //      alt="x to symbolise red" src="assets/ColourMix/Colormix_red_icon_black_stroke_4px.svg">

  //    <img class="colour-mix colour-iconizer--opacity-tenth img--overlay-move-up  "
  //      alt="lightning to symbolise yellow" src="assets/ColourMix/ColorMix_yellow_icon_1px.svg">
  //  </div>

  // </figure>


}
);

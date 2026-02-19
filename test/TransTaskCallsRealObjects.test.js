const  TransTask = require('./TransTask');
const TransSubTask = require('./TransSubTask');
const Colour = require("./Colour");
 
  test("test if the actualTask equals the expectedTask with name, a subtasks with no time", () =>{
    let subtasks = [];
    let colourGreyPink= []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("grey-pink", i, "protan");
    colourGreyPink.push(actualColour); 
    }
    subtasks.push(new TransSubTask(colourGreyPink));

    let coloursDarkBluishGreen = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("grey-dark-bluish-green", i, "protan");
    coloursDarkBluishGreen.push(actualColour); 
    }

    subtasks.push(new TransSubTask(coloursDarkBluishGreen));

    let coloursBluePurple = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("blue-purple", i, "protan");
    coloursBluePurple.push(actualColour); 
    }

    subtasks.push(new TransSubTask(coloursBluePurple));

    let coloursRedBrown = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("red-brown", i, "protan");
    coloursRedBrown.push(actualColour); 
    }


    subtasks.push(new TransSubTask(coloursRedBrown));


    let coloursOrangeGreen = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("orange-green", i, "protan");
    coloursOrangeGreen.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursOrangeGreen));

    let coloursGreyPink = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("grey-pink", i, "deutan");
    coloursGreyPink.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursGreyPink));
 

    let coloursGreyBluishGreen = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("grey-bluish-green", i, "deutan");
    coloursGreyBluishGreen.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursGreyBluishGreen));

    let coloursDodgerBluePurple = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("dodgerBlue-purple", i, "deutan");
    coloursDodgerBluePurple.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursDodgerBluePurple));

    let coloursOrangeRed = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("orange-red", i, "deutan");
    coloursOrangeRed.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursOrangeRed));

    let coloursYellowGreen = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("yellow-green", i, "deutan");
    coloursYellowGreen.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursYellowGreen));

    let coloursGreyPurple = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("grey-purple", i, "tritan");
    coloursGreyPurple.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursGreyPurple));

    let coloursGreyYellow = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("grey-yellow", i, "tritan");
    coloursGreyYellow.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursGreyYellow));
 
    let coloursPurpleYellow = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("purple-yellow", i, "tritan");
    coloursPurpleYellow.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursPurpleYellow));
 
 
    let coloursGreenBluishGreen = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("green-bluish-green", i, "tritan");
    coloursGreenBluishGreen.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursGreenBluishGreen));
 

    let coloursDarkRedOrange = []; 
    for(let i = 1; i <= 10; i++){
    let actualColour = new Colour("darkRed-orange", i, "tritan");
    coloursDarkRedOrange.push(actualColour); 
    }
    subtasks.push(new TransSubTask(coloursDarkRedOrange));


 
  

  

  const actualTransTask =  new TransTask(subtasks,"transition unaided",);;
  const expectedTransTask =   
 {"name":"transition unaided",
 "subTasks":
 [{"time":"n/a","colours":[{"name":"grey-pink","shadeNum":1,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":2,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":3,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":4,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":5,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":6,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":7,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":8,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":9,"conditionCode":"protan"},
 {"name":"grey-pink","shadeNum":10,"conditionCode":"protan"}],
 "result":"","order":"","name":"protan-grey-pink"},
 {"time":"n/a","colours":[{"name":"grey-dark-bluish-green","shadeNum":1,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":2,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":3,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":4,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":5,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":6,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":7,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":8,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":9,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":10,"conditionCode":"protan"}],
 "result":"","order":"","name":"protan-grey-dark-bluish-green"},
 {"time":"n/a","colours":[{"name":"blue-purple","shadeNum":1,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":2,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":3,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":4,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":5,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":6,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":7,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":8,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":9,"conditionCode":"protan"},
 {"name":"blue-purple","shadeNum":10,"conditionCode":"protan"}],
 "result":"","order":"","name":"protan-blue-purple"},
 {"time":"n/a","colours":[{"name":"red-brown","shadeNum":1,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":2,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":3,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":4,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":5,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":6,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":7,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":8,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":9,"conditionCode":"protan"},
 {"name":"red-brown","shadeNum":10,"conditionCode":"protan"}],
 "result":"","order":"","name":"protan-red-brown"},
 {"time":"n/a","colours":[{"name":"orange-green","shadeNum":1,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":2,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":3,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":4,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":5,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":6,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":7,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":8,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":9,"conditionCode":"protan"},
 {"name":"orange-green","shadeNum":10,"conditionCode":"protan"}],
 "result":"","order":"","name":"protan-orange-green"},
 {"time":"n/a","colours":[{"name":"grey-pink","shadeNum":1,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":2,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":3,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":4,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":5,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":6,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":7,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":8,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":9,"conditionCode":"deutan"},
 {"name":"grey-pink","shadeNum":10,"conditionCode":"deutan"}],
 "result":"","order":"","name":"deutan-grey-pink"},
 {"time":"n/a","colours":[{"name":"grey-bluish-green","shadeNum":1,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":2,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":3,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":4,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":5,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":6,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":7,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":8,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":9,"conditionCode":"deutan"},
 {"name":"grey-bluish-green","shadeNum":10,"conditionCode":"deutan"}],
 "result":"","order":"","name":"deutan-grey-bluish-green"},
 {"time":"n/a","colours":[{"name":"dodgerBlue-purple","shadeNum":1,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":2,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":3,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":4,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":5,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":6,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":7,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":8,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":9,"conditionCode":"deutan"},
 {"name":"dodgerBlue-purple","shadeNum":10,"conditionCode":"deutan"}],
 "result":"","order":"","name":"deutan-dodgerBlue-purple"},
 {"time":"n/a","colours":[{"name":"orange-red","shadeNum":1,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":2,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":3,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":4,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":5,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":6,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":7,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":8,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":9,"conditionCode":"deutan"},
 {"name":"orange-red","shadeNum":10,"conditionCode":"deutan"}],
 "result":"","order":"","name":"deutan-orange-red"},
 {"time":"n/a","colours":[{"name":"yellow-green","shadeNum":1,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":2,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":3,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":4,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":5,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":6,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":7,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":8,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":9,"conditionCode":"deutan"},
 {"name":"yellow-green","shadeNum":10,"conditionCode":"deutan"}],
 "result":"","order":"","name":"deutan-yellow-green"},
 {"time":"n/a","colours":[{"name":"grey-purple","shadeNum":1,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":2,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":3,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":4,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":5,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":6,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":7,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":8,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":9,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":10,"conditionCode":"tritan"}],
 "result":"","order":"","name":"tritan-grey-purple"},
 {"time":"n/a","colours":[{"name":"grey-yellow","shadeNum":1,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":2,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":3,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":4,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":5,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":6,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":7,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":8,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":9,"conditionCode":"tritan"},
 {"name":"grey-yellow","shadeNum":10,"conditionCode":"tritan"}],
 "result":"","order":"","name":"tritan-grey-yellow"},
 {"time":"n/a","colours":[{"name":"purple-yellow","shadeNum":1,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":2,"conditionCode":"tritan"}
 ,{"name":"purple-yellow","shadeNum":3,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":4,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":5,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":6,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":7,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":8,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":9,"conditionCode":"tritan"},
 {"name":"purple-yellow","shadeNum":10,"conditionCode":"tritan"}
],"result":"","order":"","name":"tritan-purple-yellow"},
{"time":"n/a","colours":[{"name":"green-bluish-green","shadeNum":1,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":2,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":3,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":4,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":5,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":6,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":7,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":8,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":9,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":10,"conditionCode":"tritan"}],
"result":"","order":"","name":"tritan-green-bluish-green"},
{"time":"n/a","colours":[{"name":"darkRed-orange","shadeNum":1,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":2,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":3,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":4,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":5,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":6,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":7,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":8,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":9,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":10,"conditionCode":"tritan"}
],"result":"","order":"","name":"tritan-darkRed-orange"}]}



const expectedTransTaskSubtaskColours0 =   
 [ {"name":"grey-pink","shadeNum":1,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":2,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":3,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":4,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":5,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":6,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":7,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":8,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":9,"conditionCode":"protan"},
{"name":"grey-pink","shadeNum":10,"conditionCode":"protan"}];
 
const expectedTime0 = "n/a" ;
const expectName0 = "protan-grey-pink";
const order0 = "";
const result0 = "";


const expectedTransTaskSubtaskColours1 = 
[{"name":"grey-dark-bluish-green","shadeNum":1,"conditionCode":"protan"},
 {"name":"grey-dark-bluish-green","shadeNum":2,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":3,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":4,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":5,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":6,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":7,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":8,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":9,"conditionCode":"protan"},
{"name":"grey-dark-bluish-green","shadeNum":10,"conditionCode":"protan"}]; 

const result1 = "";
const expectedTime1 = "n/a" ;

const expectName1 = "protan-grey-dark-bluish-green";
const order1 = "";
 

const expectedTransTaskSubtaskColours2 = 
 [{"name":"blue-purple","shadeNum":1,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":2,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":3,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":4,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":5,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":6,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":7,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":8,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":9,"conditionCode":"protan"},
{"name":"blue-purple","shadeNum":10,"conditionCode":"protan"}];

const expectedTime2 = "n/a" ;
const result2 = "";

 
const expectName2 = "protan-blue-purple";
const order2 = "";



const expectedTransTaskSubtaskColours3 = 
 [{"name":"red-brown","shadeNum":1,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":2,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":3,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":4,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":5,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":6,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":7,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":8,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":9,"conditionCode":"protan"},
{"name":"red-brown","shadeNum":10,"conditionCode":"protan"}];


const expectedTime3 = "n/a" ;
const result3 = "";

 
const expectName3 = "protan-red-brown";
const order3 = "";

 const expectedTransTaskSubtaskColours4 = 


[{"name":"orange-green","shadeNum":1,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":2,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":3,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":4,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":5,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":6,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":7,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":8,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":9,"conditionCode":"protan"},
{"name":"orange-green","shadeNum":10,"conditionCode":"protan"}];
 
const expectedTime4 = "n/a" ;
const result4 = "";
const expectName4 = "protan-orange-green";
const order4 = "";

const expectedTransTaskSubtaskColours5 = 
[{"name":"grey-pink","shadeNum":1,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":2,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":3,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":4,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":5,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":6,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":7,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":8,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":9,"conditionCode":"deutan"},
{"name":"grey-pink","shadeNum":10,"conditionCode":"deutan"}]; 

const expectedTime5 = "n/a" ;
const result5 = "";

const expectName5 = "deutan-grey-pink";
const order5 = "";

const expectedTransTaskSubtaskColours6 = 

 [{"name":"grey-bluish-green","shadeNum":1,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":2,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":3,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":4,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":5,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":6,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":7,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":8,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":9,"conditionCode":"deutan"},
{"name":"grey-bluish-green","shadeNum":10,"conditionCode":"deutan"}];

const expectedTime6 = "n/a" ;
const result6 = "";
 
const expectName6 = "deutan-grey-bluish-green";
const order6 = "";
const expectedTransTaskSubtaskColours7 = 

 [{"name":"dodgerBlue-purple","shadeNum":1,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":2,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":3,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":4,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":5,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":6,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":7,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":8,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":9,"conditionCode":"deutan"},
{"name":"dodgerBlue-purple","shadeNum":10,"conditionCode":"deutan"}];

const expectedTime7 = "n/a" ;
const result7 = "";

const expectName7 = "deutan-dodgerBlue-purple";
const order7 = "";


const expectedTransTaskSubtaskColours8 = 

 [{"name":"orange-red","shadeNum":1,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":2,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":3,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":4,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":5,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":6,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":7,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":8,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":9,"conditionCode":"deutan"},
{"name":"orange-red","shadeNum":10,"conditionCode":"deutan"}]
const expectedTime8 = "n/a" ;
const result8 = "";

 
const expectName8 = "deutan-orange-red";
const order8 = "";

const expectedTransTaskSubtaskColours9 = 

 [{"name":"yellow-green","shadeNum":1,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":2,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":3,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":4,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":5,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":6,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":7,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":8,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":9,"conditionCode":"deutan"},
{"name":"yellow-green","shadeNum":10,"conditionCode":"deutan"}];

const expectedTime9 = "n/a" ;
const result9 = "";

 
const expectName9 = "deutan-yellow-green";
const order9 = "";

// "result":"","order":"","name":"deutan-yellow-green"},
// {"time":"n/a","colours":

const expectedTransTaskSubtaskColours10 = 
[{"name":"grey-purple","shadeNum":1,"conditionCode":"tritan"},
 {"name":"grey-purple","shadeNum":2,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":3,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":4,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":5,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":6,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":7,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":8,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":9,"conditionCode":"tritan"},
{"name":"grey-purple","shadeNum":10,"conditionCode":"tritan"}];


// "result":"","order":"","name":"tritan-grey-purple"},
// {"time":"n/a","colours":
const expectedTime10 = "n/a" ;
const result10 = "";
 
 
const expectName10 = "tritan-grey-purple";
const order10 = "";

const expectedTransTaskSubtaskColours11 = 
[{"name":"grey-yellow","shadeNum":1,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":2,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":3,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":4,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":5,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":6,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":7,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":8,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":9,"conditionCode":"tritan"},
{"name":"grey-yellow","shadeNum":10,"conditionCode":"tritan"}];

const expectedTime11 = "n/a" ;
const result11 = "";
 
const expectName11 = "tritan-grey-yellow";
const order11 = "";

// "result":"","order":"","name":"tritan-grey-yellow"},
// {"time":"n/a","colours":

const expectedTransTaskSubtaskColours12 = 

[{"name":"purple-yellow","shadeNum":1,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":2,"conditionCode":"tritan"}
,{"name":"purple-yellow","shadeNum":3,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":4,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":5,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":6,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":7,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":8,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":9,"conditionCode":"tritan"},
{"name":"purple-yellow","shadeNum":10,"conditionCode":"tritan"}];
// ],"result":"","order":"","name":"tritan-purple-yellow"},
// {"time":"n/a","colours":
const expectedTime12 = "n/a" ;
const result12 = "";
 
 
const expectName12 = "tritan-purple-yellow";
const order12 = "";

const expectedTransTaskSubtaskColours13 = 

[{"name":"green-bluish-green","shadeNum":1,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":2,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":3,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":4,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":5,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":6,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":7,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":8,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":9,"conditionCode":"tritan"},
{"name":"green-bluish-green","shadeNum":10,"conditionCode":"tritan"}];

// "result":"","order":"","name":"tritan-green-bluish-green"},
// {"time":"n/a","colours":
const expectedTime13 =  "n/a" ;
const result13 = "";
 
 
const expectName13 = "tritan-green-bluish-green";
const order13 = "";


const expectedTransTaskSubtaskColours14 = 


[{"name":"darkRed-orange","shadeNum":1,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":2,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":3,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":4,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":5,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":6,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":7,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":8,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":9,"conditionCode":"tritan"},
{"name":"darkRed-orange","shadeNum":10,"conditionCode":"tritan"}]

const expectedTime14 = "n/a" ;
const result14 = "";
 
 
const expectName14 = "tritan-darkRed-orange";
const order14 = "";




// ],"result":"","order":"","name":"tritan-darkRed-orange"}]}

  //should have checked if length is 15 or 90
  expect(  actualTransTask.getSubTasks[0].getColoursTest) .toEqual( expectedTransTaskSubtaskColours0 );
  expect(  actualTransTask.getSubTasks[1].getColoursTest) .toEqual( expectedTransTaskSubtaskColours1 );
  expect(  actualTransTask.getSubTasks[2].getColoursTest) .toEqual( expectedTransTaskSubtaskColours2 );
  expect(  actualTransTask.getSubTasks[3].getColoursTest) .toEqual( expectedTransTaskSubtaskColours3 );
  expect(  actualTransTask.getSubTasks[4].getColoursTest) .toEqual( expectedTransTaskSubtaskColours4);
  expect(  actualTransTask.getSubTasks[5].getColoursTest) .toEqual( expectedTransTaskSubtaskColours5 );
  expect(  actualTransTask.getSubTasks[6].getColoursTest) .toEqual( expectedTransTaskSubtaskColours6 );
  expect(  actualTransTask.getSubTasks[7].getColoursTest) .toEqual( expectedTransTaskSubtaskColours7 );
  expect(  actualTransTask.getSubTasks[8].getColoursTest) .toEqual( expectedTransTaskSubtaskColours8 );
  expect(  actualTransTask.getSubTasks[9].getColoursTest) .toEqual( expectedTransTaskSubtaskColours9 );
  expect(  actualTransTask.getSubTasks[10].getColoursTest) .toEqual( expectedTransTaskSubtaskColours10 );
  expect(  actualTransTask.getSubTasks[11].getColoursTest) .toEqual( expectedTransTaskSubtaskColours11 );
  expect(  actualTransTask.getSubTasks[12].getColoursTest) .toEqual( expectedTransTaskSubtaskColours12 );
  expect(  actualTransTask.getSubTasks[13].getColoursTest) .toEqual( expectedTransTaskSubtaskColours13 );
  expect(  actualTransTask.getSubTasks[14].getColoursTest) .toEqual( expectedTransTaskSubtaskColours14 );

  expect(  actualTransTask.getSubTasks[0].getAResult) .toEqual(result0 );
  expect(  actualTransTask.getSubTasks[1].getAResult) .toEqual( result1 );
  expect(  actualTransTask.getSubTasks[2].getAResult) .toEqual( result2 );
  expect(  actualTransTask.getSubTasks[3].getAResult) .toEqual( result3 );
  expect(  actualTransTask.getSubTasks[4].getAResult) .toEqual(result4);
  expect(  actualTransTask.getSubTasks[5].getAResult) .toEqual( result5 );
  expect(  actualTransTask.getSubTasks[6].getAResult) .toEqual( result6 );
  expect(  actualTransTask.getSubTasks[7].getAResult) .toEqual( result7);
  expect(  actualTransTask.getSubTasks[8].getAResult) .toEqual( result8 );
  expect(  actualTransTask.getSubTasks[9].getAResult) .toEqual( result9 );
  expect(  actualTransTask.getSubTasks[10].getAResult) .toEqual( result10 );
  expect(  actualTransTask.getSubTasks[11].getAResult) .toEqual( result11 );
  expect(  actualTransTask.getSubTasks[12].getAResult) .toEqual( result12 );
  expect(  actualTransTask.getSubTasks[13].getAResult) .toEqual( result13 );
  expect(  actualTransTask.getSubTasks[14].getAResult) .toEqual( result14 );

  expect(  actualTransTask.getSubTasks[0].getTime) .toEqual( expectedTime0 );
  expect(  actualTransTask.getSubTasks[1].getTime) .toEqual( expectedTime1 );
  expect(  actualTransTask.getSubTasks[2].getTime) .toEqual( expectedTime2 );
  expect(  actualTransTask.getSubTasks[3].getTime) .toEqual( expectedTime3 );
  expect(  actualTransTask.getSubTasks[4].getTime) .toEqual( expectedTime4);
  expect(  actualTransTask.getSubTasks[5].getTime) .toEqual( expectedTime5 );
  expect(  actualTransTask.getSubTasks[6].getTime) .toEqual( expectedTime6 );
  expect(  actualTransTask.getSubTasks[7].getTime) .toEqual( expectedTime7);
  expect(  actualTransTask.getSubTasks[8].getTime) .toEqual( expectedTime8 );
  expect(  actualTransTask.getSubTasks[9].getTime) .toEqual( expectedTime9 );
  expect(  actualTransTask.getSubTasks[10].getTime) .toEqual( expectedTime10 );
  expect(  actualTransTask.getSubTasks[11].getTime) .toEqual( expectedTime11 );
  expect(  actualTransTask.getSubTasks[12].getTime) .toEqual( expectedTime12 );
  expect(  actualTransTask.getSubTasks[13].getTime) .toEqual( expectedTime13 );
  expect(  actualTransTask.getSubTasks[14].getTime) .toEqual( expectedTime14 );
  
  expect(  actualTransTask.getSubTasks[0].getName) .toEqual( expectName0 );
  expect(  actualTransTask.getSubTasks[1].getName) .toEqual( expectName1 );
  expect(  actualTransTask.getSubTasks[2].getName) .toEqual( expectName2 );
  expect(  actualTransTask.getSubTasks[3].getName) .toEqual( expectName3 );
  expect(  actualTransTask.getSubTasks[4].getName) .toEqual( expectName4);
  expect(  actualTransTask.getSubTasks[5].getName) .toEqual( expectName5 );
  expect(  actualTransTask.getSubTasks[6].getName) .toEqual( expectName6 );
  expect(  actualTransTask.getSubTasks[7].getName) .toEqual( expectName7);
  expect(  actualTransTask.getSubTasks[8].getName) .toEqual( expectName8 );
  expect(  actualTransTask.getSubTasks[9].getName) .toEqual( expectName9 );
  expect(  actualTransTask.getSubTasks[10].getName) .toEqual( expectName10 );
  expect(  actualTransTask.getSubTasks[11].getName) .toEqual( expectName11 );
  expect(  actualTransTask.getSubTasks[12].getName) .toEqual(expectName12 );
  expect(  actualTransTask.getSubTasks[13].getName) .toEqual( expectName13 );
  expect(  actualTransTask.getSubTasks[14].getName) .toEqual( expectName14 );

  expect(  actualTransTask.getSubTasks[0].getOrder) .toEqual( order0 );
  expect(  actualTransTask.getSubTasks[1].getOrder) .toEqual( order1 );
  expect(  actualTransTask.getSubTasks[2].getOrder) .toEqual( order2 );
  expect(  actualTransTask.getSubTasks[3].getOrder) .toEqual( order3 );
  expect(  actualTransTask.getSubTasks[4].getOrder) .toEqual(order4);
  expect(  actualTransTask.getSubTasks[5].getOrder) .toEqual( order5 );
  expect(  actualTransTask.getSubTasks[6].getOrder) .toEqual( order6 );
  expect(  actualTransTask.getSubTasks[7].getOrder) .toEqual( order7);
  expect(  actualTransTask.getSubTasks[8].getOrder) .toEqual( order8 );
  expect(  actualTransTask.getSubTasks[9].getOrder) .toEqual( order9 );
  expect(  actualTransTask.getSubTasks[10].getOrder) .toEqual( order10 );
  expect(  actualTransTask.getSubTasks[11].getOrder) .toEqual( order11 );
  expect(  actualTransTask.getSubTasks[12].getOrder) .toEqual(order12 );
  expect(  actualTransTask.getSubTasks[13].getOrder) .toEqual( order13 );
  expect(  actualTransTask.getSubTasks[14].getOrder) .toEqual( order14 );

  
  expect(actualTransTask.getSubTasks.length).toBe(15);

  })


 
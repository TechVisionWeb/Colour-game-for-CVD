const  Task = require('./Task');
const SubTask = require('./SubTask');
 
  test("test if the actualTask equals the expectedTask with name trans unaided, a subtasks with no time", () =>{



  let subTasks =  [];

for(let i = 0; i < 15; i++){

    subTasks.push(new SubTask());
}

  const actualTask =  new Task("transition unaided",subTasks); 
  const expectedTaskSubtasks =  [{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},
  {"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},
     {"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}]
     
  const expectName =   "transition unaided";  
  
  //should have checked if length is 15 or 90
  expect(  actualTask.getSubTasksTest ).toEqual( expectedTaskSubtasks );

  expect(  actualTask.getName  ).toEqual( expectName );

  expect(actualTask.getSubTasksTest.length).toBe(15);

  })


  test("test if the actualTask equals the expectedTask with name, sorted unaided, subtasks with no time", () =>{



    let subTasks =  [];
  
  for(let i = 0; i < 90; i++){
  
      subTasks.push(new SubTask());
  }
  
    const actualTask =  new Task("sorted unaided",subTasks);;
    const expectName =  "sorted unaided" ;   
   const expectedTaskSubtasks = [{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"} 
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"} 
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"} 
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}
                ,{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"},{"time":"n/a"}]


       
    //should have checked if length is 15 or 90
    expect(  actualTask.getSubTasksTest  ).toEqual( expectedTaskSubtasks );

    expect(  actualTask.getName  ).toEqual( expectName );
  
    expect(actualTask.getSubTasksTest.length).toBe(90);
    })

    test("test if the actualTask equals the expectedTask with name, a subtasks with times", () =>{

      let subTasks = [];

        subTasks =  [{"time":"00:00:100"},{"time":"00:00:200"},{"time":"00:00:300"},{"time":"00:00:301"},{"time":"00:00:400"}
      ,{"time":"00:00:501"},{"time":"00:00:600"},{"time":"00:00:700"},{"time":"00:00:800"},{"time":"00:00:900"}
      ,{"time":"00:01:000"},{"time":"00:01:100"},{"time":"00:01:200"},{"time":"00:01:300"},{"time":"00:01:400"}
      ,{"time":"00:01:500"},{"time":"00:01:600"},{"time":"00:01:700"},{"time":"00:01:800"},{"time":"00:01:900"} 
      ,{"time":"00:02:000"},{"time":"00:02:100"},{"time":"00:02:200"},{"time":"00:02:300"},{"time":"00:02:400"} 
      ,{"time":"00:02:500"},{"time":"00:02:600"},{"time":"00:02:700"},{"time":"00:02:800"},{"time":"00:02:900"} 
      ,{"time":"00:03:000"},{"time":"00:03:100"},{"time":"00:03:200"},{"time":"00:03:300"},{"time":"00:03:400"}
      ,{"time":"00:03:500"},{"time":"00:03:600"},{"time":"00:03:700"},{"time":"00:03:800"},{"time":"00:03:900"}
      ,{"time":"00:04:000"},{"time":"00:04:100"},{"time":"00:04:200"},{"time":"00:04:300"},{"time":"00:04:400"}
      ,{"time":"00:04:500"},{"time":"00:04:600"},{"time":"00:04:700"},{"time":"00:04:800"},{"time":"00:04:900"}
      ,{"time":"00:05:000"},{"time":"00:05:100"},{"time":"00:05:200"},{"time":"00:05:300"},{"time":"00:05:400"}
      ,{"time":"00:05:500"},{"time":"00:06:100"},{"time":"00:05:700"},{"time":"00:05:800"},{"time":"00:05:900"}
      ,{"time":"00:06:000"},{"time":"00:07:100"},{"time":"00:06:200"},{"time":"00:06:300"},{"time":"00:06:400"}
      ,{"time":"00:06:000"},{"time":"00:07:600"},{"time":"00:06:700"},{"time":"00:06:800"},{"time":"00:06:900"}
      ,{"time":"00:06:500"},{"time":"00:08:100"},{"time":"00:07:200"},{"time":"00:07:300"},{"time":"00:07:400"}
      ,{"time":"00:07:000"},{"time":"00:08:600"},{"time":"00:07:700"},{"time":"00:07:800"},{"time":"00:07:900"}
      ,{"time":"00:07:500"},{"time":"00:09:100"},{"time":"00:08:200"},{"time":"00:08:300"},{"time":"00:08:400"}
      ,{"time":"00:08:000"},{"time":"00:09:600"},{"time":"00:08:700"},{"time":"00:08:800"},{"time":"00:08:900"}];
    
    
      const actualTask =  new Task("sorted unaided",subTasks);
      const expectedTask =  {"name":"sorted unaided",   
       "subTasks":[{"time":"00:00:100"},{"time":"00:00:200"},{"time":"00:00:300"},{"time":"00:00:301"},{"time":"00:00:400"}
                  ,{"time":"00:00:501"},{"time":"00:00:600"},{"time":"00:00:700"},{"time":"00:00:800"},{"time":"00:00:900"}
                  ,{"time":"00:01:000"},{"time":"00:01:100"},{"time":"00:01:200"},{"time":"00:01:300"},{"time":"00:01:400"}
                  ,{"time":"00:01:500"},{"time":"00:01:600"},{"time":"00:01:700"},{"time":"00:01:800"},{"time":"00:01:900"} 
                  ,{"time":"00:02:000"},{"time":"00:02:100"},{"time":"00:02:200"},{"time":"00:02:300"},{"time":"00:02:400"} 
                  ,{"time":"00:02:500"},{"time":"00:02:600"},{"time":"00:02:700"},{"time":"00:02:800"},{"time":"00:02:900"} 
                  ,{"time":"00:03:000"},{"time":"00:03:100"},{"time":"00:03:200"},{"time":"00:03:300"},{"time":"00:03:400"}
                  ,{"time":"00:03:500"},{"time":"00:03:600"},{"time":"00:03:700"},{"time":"00:03:800"},{"time":"00:03:900"}
                  ,{"time":"00:04:000"},{"time":"00:04:100"},{"time":"00:04:200"},{"time":"00:04:300"},{"time":"00:04:400"}
                  ,{"time":"00:04:500"},{"time":"00:04:600"},{"time":"00:04:700"},{"time":"00:04:800"},{"time":"00:04:900"}
                  ,{"time":"00:05:000"},{"time":"00:05:100"},{"time":"00:05:200"},{"time":"00:05:300"},{"time":"00:05:400"}
                  ,{"time":"00:05:500"},{"time":"00:06:100"},{"time":"00:05:700"},{"time":"00:05:800"},{"time":"00:05:900"}
                  ,{"time":"00:06:000"},{"time":"00:07:100"},{"time":"00:06:200"},{"time":"00:06:300"},{"time":"00:06:400"}
                  ,{"time":"00:06:000"},{"time":"00:07:600"},{"time":"00:06:700"},{"time":"00:06:800"},{"time":"00:06:900"}
                  ,{"time":"00:06:500"},{"time":"00:08:100"},{"time":"00:07:200"},{"time":"00:07:300"},{"time":"00:07:400"}
                  ,{"time":"00:07:000"},{"time":"00:08:600"},{"time":"00:07:700"},{"time":"00:07:800"},{"time":"00:07:900"}
                  ,{"time":"00:07:500"},{"time":"00:09:100"},{"time":"00:08:200"},{"time":"00:08:300"},{"time":"00:08:400"}
                  ,{"time":"00:08:000"},{"time":"00:09:600"},{"time":"00:08:700"},{"time":"00:08:800"},{"time":"00:08:900"}]
  
  
      } ;
      //should have checked if length is 15 or 90
      expect(  actualTask.getSubTasks  ).toEqual( subTasks );
       
    
      })
  test("test if the actualTask equals the expectedTask with name, a subtasks with with times", () =>{



    let subTasks =  [];
  
  for(let i = 0; i < 15; i++){
  
      subTasks.push(new SubTask());

      if( i + 1 <= 9){
      subTasks[i].setTime = "0" +  (i + 1) + ":00:000";
      }
      else{

        subTasks[i].setTime =  (i + 1) + ":00:000";

      }
  }
  
    const actualTask =  new Task("transition unaided",subTasks);;
    const expectedTaskName = "transition unaided";

   const expectedTransSubTask = [{"time":"01:00:000"},{"time":"02:00:000"},{"time":"03:00:000"},{"time":"04:00:000"},
     {"time":"05:00:000"},{"time":"06:00:000"},{"time":"07:00:000"},{"time":"08:00:000"},{"time":"09:00:000"},
        {"time":"10:00:000"},{"time":"11:00:000"},{"time":"12:00:000"},{"time":"13:00:000"},{"time":"14:00:000"},{"time":"15:00:000"}];
    //should have checked if length is 15 or 90
    expect(  actualTask.getName ).toEqual(expectedTaskName) ;
    expect(  actualTask.getSubTasksTest ).toEqual(expectedTransSubTask) ;

     
  
    })
const  Task = require('./Task');
const SubTask = require('./SubTask');
jest.mock('./Task')

  test("test if the constructor is called once", () =>{



  let subTasks =  [];

for(let i = 0; i < 15; i++){

    subTasks.push(new SubTask());
}

    new Task("transition unaided",subTasks);;
  expect( Task).toHaveBeenCalledTimes(1);
 
    

  })

 

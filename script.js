let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    const arr1 = arr.map((person) => {
        return person;
    }).filter((person) => {
        return person.profession === "developer";
    })

    console.log(arr1);
  }
  
  function addData() {
    //Write your code here, just console.log
    const obj = {id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log

    const removeAdmin = arr.filter((person) => {
        return person.profession !== "admin";
    })

    console.log(removeAdmin);

    // for(let i=0; i<arr.length; i++){
    //     if(arr[i].profession === "admin")
    //     {
    //         arr.splice(i, 1);
    //     }
    // }
    // console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let newArr = [
        { id: 4, name: 'helly', age: 21, profession: 'manager' },
        { id: 5, name: 'jelly', age: 22, profession: 'HR' },
        { id: 6, name: 'kelly', age: 23, profession: 'intern' },
      ];

      const concat = arr.concat(newArr);

      console.log(concat);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }
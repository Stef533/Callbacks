function printName(callback, name) {
    setTimeout(() => {
      callback(); 
      setTimeout(() => {
        console.log(name);
      }, 2000);
    }, 1000);
  }
  
  function callback() {
    console.log("Hello");
  }
  
  const name = "John";
  printName(callback, name);
  
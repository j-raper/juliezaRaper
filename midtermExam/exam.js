/*If the global and local variable have the same name, the local variable takes the precedence*/

let scopeVar = 'I am global variable';  //declaring global variable

var midtermExam = () => {                   /*a function that have local variable with 
                                                the same name with global variable and have 
                                                different value*/
    let scopeVar = 'I am local variable';   
    console.log(scopeVar);                  //printing/displaying the variable name
    
};
midtermExam();                              //call and test what variable will be printed.
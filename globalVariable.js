let globeVar = "AI";
myFunction();

function myFunction(){
    console.log("the global Variable: ", globeVar);
    console.log("the type of global Variable: ", typeof globeVar);

}

console.log("Can access outside the function also : ", globeVar);

/*  In contrast, global variables are the variables that define outside of functions. These variables have a global scope, so they can be used by any function without passing them to the function as parameters. */
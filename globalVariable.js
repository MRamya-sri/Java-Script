let globeVar = "AI";
myFunction();

function myFunction(){
    console.log("the global Variable: ", globeVar);
    console.log("the type of global Variable: ", typeof globeVar);

}

console.log("Can access outside the function also : ", globeVar);
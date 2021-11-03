// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

const wagsTail = function(){
    return "swishswoosh";
}

const barksWoof = function(){
    return "Woof!";
}

function receivesAFunction(innerFunct){
    return innerFunct();
}

console.log(receivesAFunction(barksWoof))


// The returnsANamedFunction function should:

// take no arguments
// return a named function

function returnsANamedFunction(){
    return wagsTail
}

console.log(returnsANamedFunction())

// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function


function returnsAnAnonymousFunction() {
    return () => {
        return "I am unnamed";
    }
}

console.log(returnsAnAnonymousFunction()())
/**
 * What is a closure
 * Whenever a function is invoked, a new scope is created for that call. 
 * The local variable declared inside the function belong to that scope
 *  – they can only be accessed from that function -
 * Remember:
 * - The function scope is created for a function call, not for the function itself
 * - Every function call creates a new scope
 * - When the function has finished the execution, the scope is usually destroyed. A simple example of such function is this: 
 *
 */

function buildName(name) { 
    var greeting = "Hello, " + name; 
    return greeting;
}

/**
 * It doesn’t get more simple than that. The function buildName() 
 * declares a local variable greeting and returns it. 
 * Every function call creates a new scope with a new local variable and. After the function is done executing, we have no way to refer to that scope again, so it’s garbage collected.
 * But how about when we have a link to that scope? Let’s look at the next function:
 */

function buildName(name) { 
    var greeting = "Hello, " + name + "!"; 
    var sayName = function() {
        var welcome = greeting + " Welcome!";
        greeting = 'Bye'
        console.log('inner function value (greeting:' + greeting); 
    };
    console.log('outer function value (greeting):' + greeting); 
    return sayName; 
}

var sayMyName = buildName("John");
sayMyName();  // Hello, John. Welcome!
sayMyName();  // Hello, John. Welcome!
sayMyName();  // Hello, John. Welcome!

///

function buildName(name) { 
    var greeting = "Hello, " + name + "!"; 
    (function() {
        var welcome = greeting + " Welcome!";
        greeting = 'Bye'
        console.log('inner function value (greeting:' + greeting); 
    })()
    console.log('outer function value (greeting):' + greeting); 
    //return sayName;
}

/**
 * The function sayName() from this example is a closure.
 * A closure is a function which has access to the variable from another function’s scope. 
 * This is accomplished by creating a function inside a function. 
 * Of course, the outer function does not have access to the inner scope.
 * 
 * The sayName() function has it’s own local scope (with variable welcome) and has also access to the outer (enclosing) function’s scope.
 * It this case, the variable greeting from buildName().
 * After the execution of buildName is done, the scope is not destroyed in this case. 
 * The sayMyName() function still has access to it, so it won’t be garbage collected. 
 * However, there is not other way of accessing data from the outer scope except the closure.
 * 
 * This is the big gotcha of the entire concept. The closure serve as the gateway between the global context and the outer scope. 
 * I cannot access directly variables from the outer scope if the closure is not allowing it. 
 * This way, I can protect the variables from the outer scope. They are – by all means – private and the closure can serve as a getter or setter for them.
 * Remember:
 * - Closure are nested function which has access to the outer scope
 * - After the outer function is returned, by keeping a reference to the inner function (the closures) we prevent the outer scope to be destroyed.
 * 
 * Another extremely important thing to understand is that a closure is created at every function call.
 * Whenever I’m using the closure, it will reference the same outer scope. If any variable is change in the outer scope, than the change will be visible in the next call as well.
 * 
 */


function buildContor(i) { 
    var contor = i;
    var displayContor = function() {
        console.log(contor++);
        contor++;
    };
    return displayContor; 
}

var myContor = buildContor(1);
myContor(); // 1
myContor(); // 2
myContor(); // 3

// new closure - new outer scope - new contor variable
var myOtherContor = buildContor(10);
myOtherContor(); // 10 
myOtherContor(); // 11

// myContor was not affected 
myContor(); // 4



//Use closures to store private data

function initializeData() {
    var myVar = 1; 
    return { 
        getVar: function() {
            return myVar;
        },
        setVar: function(v) {
            myVar = v;
        }
    };
}

obj = initializeData();

console.log(obj.getVar()); // 1

obj.setVar(2);
console.log(obj.getVar()); // 2

obj.setVar("string");
console.log(obj.getVar()); // string


/**
 * A closure is the combination of a function bundled together (enclosed) 
 * with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function’s scope from an inner function. 
 * In JavaScript, closures are created every time a function is created, at function creation time.
 * 
 * To use a closure, define a function inside another function and expose it. 
 * To expose a function, return it or pass it to another function.
 * The inner function will have access to the variables in the outer function scope,
 * even after the outer function has returned.
 */


const getSecret = (secret) => {
    return {
        get: () => secret
    };
};

test('Closure for object privacy.', assert => {
    const msg = '.get() should have access to the closure.';
    const expected = 1;
    const obj = getSecret(1);

    const actual = obj.get();

    try {
        assert.ok(secret, 'This throws an error.');
    } catch (e) {
        assert.ok(true, `The secret var is only available
        to privileged methods.`);
    }

    assert.equal(actual, expected, msg);
    assert.end();
});

//In the example above, the `.get()` method is defined inside the scope of `getSecret()`,
// which gives it access to any variables from `getSecret()`, 
//and makes it a privileged method. In this case, the parameter, `secret`.

const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
add10(5);

// partialApply(targetFunction: Function, ...fixedArgs: Any[]) =>
//   functionWithFewerParams(...remainingArgs: Any[])
const partialApply = (fn, ...fixedArgs) => {
    return function (...remainingArgs) {
        return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
};

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

/* outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar */


//In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
//In the inner function, though, this no longer refers to myObject. 
//As a result, this.foo is undefined in the inner function, 
//whereas the reference to the local variable self remains in scope and is accessible there.

function foo1()
{
    return {
        bar: "hello"
    };
}

function foo2()
{
    return
    {
        bar: "hello"
    };
}

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
    }

//(a) What gets logged to the console when the user clicks on “Button 4” and why?
//(b) Provide one or more alternate implementations that will work as expected.
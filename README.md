# Asynchronous JavaScript
Asynchronous simply means is  running after a certain time.
So we just set the dealy to the function for example:

```
function functionOne() {
  setTimeout(()=> {
    console.log('Hi i'm the first appearance');
  }, 3000);
}

function functionTwo(){
  console.log( 'I'm the second');
}

functionOne();
functionTwo();

```
# Callback Javascript
Call back is something like use a function as a agrument for another function In other words, 
the frist function will call the second function back later once its execution is finish.
for example:
```
function functionOne(callback) {
  setTimeout(()=> {
    console.log("I'm the second");
    callback();
    }, 500);
}

function functionTwo() {
  console.log("And I'm the last !!!!");
}

functionOne(()=>{
  functionTwo();
});

console.log("Hi i'm the first appearance");

```
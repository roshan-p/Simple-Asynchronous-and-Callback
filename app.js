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
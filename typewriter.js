const typewriter = function(string) {
  let time = 0;
  for(const char of sentence) {
    //console.log(char);
    let count = 0;
    setTimeout(() => {
      process.stdout.write(char);
    }, time) 
    time += 100; 
}

setTimeout(() => {
  process.stdout.write("\n");

},time)

  
};

const sentence = "hello there! this is Ella, I am 10 years old. I love my mum the most";
typewriter(sentence);
// nested if else

// winning number 19
// 19 your guess is right
// 17 your guess is low
// 20 your guess is high
let winningNumber =19;
let GuessNumber = +prompt("Enter the number");

if(winningNumber===GuessNumber){
          console.log("your guess is right");
}else{
    if(GuessNumber<winningNumber){
        console.log('too low');
        }
          else{
              console.log('too high');
          }
}
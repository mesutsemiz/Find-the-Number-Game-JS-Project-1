var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

// console.log(msg1);
var no_of_guesses = 0;
var guess_num = [];

let randomNumber = Math.floor(Math.random() *100)


function play(){
    let user_guess = document.getElementById("guess").value
    msg1.style.backgroundColor="green"
    console.log(msg1);
   

    if (user_guess<1 || user_guess>100) {
        alert("Please enter a number between 1 - 100")
        
    }else{
        guess_num.push(user_guess);
        no_of_guesses++;

        if (user_guess<randomNumber) {
            msg1.textContent="your guess is too low";
            msg2.textContent="No. Of Guesses : " + no_of_guesses;
            msg3.textContent="guessed number are : " + guess_num;

           
            
        }else if(user_guess>randomNumber) {
            msg1.textContent="your guess is too high";
            msg2.textContent="No. Of Guesses : " + no_of_guesses;
            msg3.textContent="guessed number are : " + guess_num;
        
        }else if(user_guess=randomNumber){
            
            msg1.textContent="Congrast!!! FİNALLY YOU FİND İT";
            msg2.textContent="No. Of Guesses : " + no_of_guesses;
            msg3.textContent="guessed number are : " + guess_num;
            

        }

    }

  
}

play()
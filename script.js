let btn = document.getElementById('btn');
let output = document.querySelector('.text1');

let number = [Math.floor(Math.random() * 50)];

btn.addEventListener('click',function(){
    let input = document.querySelector('.input').value;
    if(input > 50 || input < 1){
        alert("Enter a number between 1 - 50");
    }else{
        if(input > number){
            output.innerHTML = "too high!!";
        }else if(input < number){
            output.innerHTML = "too low!!";
        }else if(input == number){
            output.innerHTML = "You guessed right!!";
        }
    }
    
});



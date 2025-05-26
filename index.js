const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const textarea = document.querySelector('#textarea');
const output = document.querySelector('#output');
const para = document.querySelector('#para');
var winCount = 0;
    btn.addEventListener('click',()=>{
        const givenValue = input.value;
        const randomNumber = parseInt(Math.random()*5);
        if(givenValue==randomNumber){
            textarea.innerHTML="You are win"
            output.innerHTML="Random was : "+randomNumber
            winCount++; 
        }else{
            textarea.innerHTML="You Lose"
            output.innerHTML="Random was : "+randomNumber
        }
        para.innerHTML="You are win : "+winCount + "times"
    })
    



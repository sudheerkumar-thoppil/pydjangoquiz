console.log("working");
var data={"questions":questions};
var ctr=0;
var qlen=document.getElementById('slNo');
console.log(qlen);
document.getElementsByClassName('test').innerHTML=dataAnswer;

const demoelement =document.getElementById('demo');
function displayAnswers(){
        data.answers.forEach(answers => {
              bt1.innerHTML=answers 
              bt2.innerHTML=answers
              bt3.innerHTML=answers
              bt4.innerHTML=answers
        });

}

function getOption(){   
        const opt=document.getElementById("btn1").innerHTML;
        const opt2=document.getElementById("btn2").innerHTML;
        const opt3=document.getElementById("btn3").innerHTML;
        const opt4=document.getElementById("btn4").innerHTML;

        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt == ans_btn){
                alert("Correct");
                document.getElementById("btn1").style.backgroundColor="green";
                document.getElementById("demo").innerHTML=ans_btn;
                }
                    
        else{
                alert("InCorrect");
                document.getElementById("btn1").style.backgroundColor="blue";
                document.getElementById("demo").innerHTML=ans_btn;
        }
document.getElementById("answer.buttons").style.display="block";

}
function getOption2(){
        const opt2 =document.getElementById("btn2").innerHTML;
        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt2 == ans_btn){
                alert("Correct");
                document.getElementById("btn2").this.style.color="green";
                document.getElementById("demo").this.innerHTML="Correct";
        }
        else{
                alert("InCorrect");
                document.getElementById("btn2").style.backgroundColor="blue";
                document.getElementById("demo").innerHTML=ans_btn;
        }     
document.getElementById("answer.buttons").style.display="block";
}
function getOption3(){
        const opt3=document.getElementById("btn3").innerHTML;
        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt3 == ans_btn){
                alert("Correct");
                document.getElementById("btn3").style.color="green";
                document.getElementById("demo").innerHTML="Correct";
        }
        else{
                alert("InCorrect");
                document.getElementById("btn3").style.backgroundColor="red";
                document.getElementById("demo").innerHTML=ans_btn;
        }  
document.getElementById("answer.buttons").style.display="block";
}
function getOption4(){
        const opt4=document.getElementById("btn4").innerHTML;
        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt4 == ans_btn){
                alert("Correct");
                document.getElementById("btn4").style.backgroundColor="green";
                document.getElementById("demo").innerHTML="Correct";
        }
        else{
                alert("InCorrect");
                document.getElementById("btn4").style.backgroundColor="red";
                document.getElementById("demo").innerHTML=ans_btn;   
        }
document.getElementById("answer.buttons").style.display="block";
}
        // const optt=document.getElementById("answer.buttons").innerHTML;
        // console.log(opt1);
        // console.log(ans_btn);
        
        

        
                // ans_btn.style.display="block";
                // ans_btn.innerHTML=`your answer ${opt}`;

                
                // btn.display.style="incorrect";  

                // const button =document.createElement("button");
                // button.addEventListener("click",selectAnswer);
       
        
       
                
function selectAnswer(){
                
                const button =document.createElement("button");
                button.innerHTML=answers.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
               
                
                
}    

function wait(){
        alert("wait");
}

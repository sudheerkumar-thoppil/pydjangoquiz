console.log("working");

const demoelement =document.getElementById("demo");

function getOption(){   
        const opt=document.getElementsByClassName("btn").innerHTML;
        const ans_btn=document.getElementById("ans_btn").innerHTML;
        console.log(opt);
       
        if(opt == ans_btn){
                alert("Correct");
                document.getElementsByClassName("btn").style.backgroundColor="green";
                document.getElementById("demo").innerHTML="Correct";
                }
                    
        else{
                alert("InCorrect");
                document.getElementsByClassName("btn").style.backgroundColor="Red";
                document.getElementById("demo").innerHTML="InCorrect";
        }

}


                

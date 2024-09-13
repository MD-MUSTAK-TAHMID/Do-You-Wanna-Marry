let age = document.getElementById("age");
let salary = document.getElementById("salary");
let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click" , function(){
    if(age.value != "" && salary.value != ""){
        if(age.value <= 35){
            if(age.value >= 20){
                if(salary.value >= 35000){
                    output.innerHTML = "Tin Kobul";
                }else{
                    output.innerHTML = "Cholbe na, ja bhag!";
                }
            }else{
                output.innerHTML = "packnami kom kor!"
            }
        }else{
            output.innerHTML = "Your time is over.";
        }
    }else{
        output.innerHTML = "Enter a valid value!";
    }
})

const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumberInput = document.querySelector("#luckyNumber");
const buttonToCheck = document.querySelector("#buttonToCheck");
const outputBox = document.querySelector("#out-putBox");
buttonToCheck.addEventListener("click",function checkLuckyOrNot(){
    var dob = dateOfBirth.value; 
    var luckyNumber = Number(luckyNumberInput.value);
    // console.log(dob.getDate());
    if(dob === '' && luckyNumber === 0)
    {
        outputBox.innerHTML = "Enter both details!!! 😒😑😑😑😑😒"
    }
    else if(dob === ''){
        outputBox.innerHTML = "Please enter Your DOB! 😒😒";
    }
    else if(luckyNumber === 0)
    {
        outputBox.innerHTML = "Please enter your Lucky Number! 😑😑😑😑";
    }
    else{
    var dobWithoutHyphen = dob.replaceAll("-","");
    var sum = 0;
    var addingStrings = addBirthDateNumber(sum,dobWithoutHyphen);
    // console.log(typeof(sum));
    // console.log(typeof(luckyNumber));
    // console.log(sum);
    // console.log(luckyNumber);
    checkDivisbleOrNot(addingStrings,luckyNumber);
    }
});
function addBirthDateNumber(sum,dob){
    for(var i=0;i<dob.length;i++)
    {
        sum = sum + Number(dob[i]);
    }
    return sum;
}
function checkDivisbleOrNot(addingStrings,luckyNumber){
    if(addingStrings % luckyNumber === 0){
        outputBox.innerHTML="Your birthday is lucky 🥳🤩";}
    else{
        outputBox.innerHTML="Your birthday is not lucky 😐😶😐";}
}
const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumberInput = document.querySelector("#luckyNumber");
const buttonToCheck = document.querySelector("#buttonToCheck");
const outputBox = document.querySelector("#outputBox");
buttonToCheck.addEventListener("click",function checkLuckyOrNot(){
    var dob = dateOfBirth.value; 
    var luckyNumber = Number(luckyNumberInput.value);
    var dobWithoutHyphen = dob.replaceAll("-","");
    var sum = 0;
    var addingStrings = addBirthDateNumber(sum,dobWithoutHyphen);
    // console.log(typeof(sum));
    // console.log(typeof(luckyNumber));
    // console.log(sum);
    // console.log(luckyNumber);
    checkDivisbleOrNot(addingStrings,luckyNumber);
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
        outPutBox.innerText="Your birthday is lucky 🥳🤩";}
        else{
        outPutBox.innerText="Your birthday is not lucky 😐😶😐";}
}

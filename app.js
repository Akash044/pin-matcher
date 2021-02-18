const pinGenerateBtn = document.getElementById("pin-generate-btn");
const showPin = document.getElementById("show-pin");
const calBody = document.getElementById("cal-body");
const inputedPinShow = document.getElementById("inputed-pin-show");
const submitBtn = document.getElementById("submit-btn");

pinGenerateBtn.addEventListener("click",()=>{
    generatedPin();
})
submitBtn.addEventListener("click",()=>checkingMatch());
let genePin = "";
const generatedPin = ()=>{
    genePin = Math.round(Math.random()*1000000);
    genePin+="";
    showPin.value = genePin;
}
let inputedPin ="";
calBody.addEventListener("click",(event)=>{
    let clickedNum = event.target.innerHTML;
    inputedPin+=''+clickedNum;
    inputedPinShow.value = inputedPin;
})
const checkingMatch = ()=>{
    if (genePin === inputedPin) {
        const Matched = document.getElementById("matched");
        Matched.style.display = "block";
        inputedPinShow.value = "";
        inputedPin ="";
    } else {
        document.getElementById("try-left").innerText = document.getElementById("try-left").innerText-1;
        const didntMatch = document.getElementById("didnt-match");
        console.log(didntMatch);
        didntMatch.style.display = "block";
        inputedPinShow.value = "";
        inputedPin ="";
    }
}

var button=document.querySelector(".bt");
var res=document.querySelector(".otpmes");
var inpu=document.getElementById("t1");
var inn=document.querySelector(".inmes");
var subm=document.querySelector("#submit");
var randNum=Math.floor((Math.random()*900000)+100000);


button.addEventListener("click",function(){
    res.innerHTML=randNum;
});

subm.addEventListener("click",function(){
    if (inpu.value==randNum){
    alert("loged in successfully")
}else{
    alert("invalid OTP")
}

});

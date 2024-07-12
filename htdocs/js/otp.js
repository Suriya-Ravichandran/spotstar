var GeneratedOTP=Math.floor(Math.random()*999999)
alert(GeneratedOTP)
function OTPVerification(){
    var EnteredOTP=document.getElementById("Enteredotp").value 
    if(GeneratedOTP==EnteredOTP){
        window.location.href="index.php"
    }else{
        document.getElementById("error").innerHTML="Incorrect OTP"
    }
}
function ResendOTP(){
    window.location.href="otp.php"
}

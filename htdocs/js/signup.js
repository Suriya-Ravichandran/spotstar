function SignupValidation(){
    // Phone Number Validation
    var Phone=document.getElementById("phone").value 
    var PhoneFlag=false
    if((Phone>=6000000000)&&(Phone<=9999999999)){
        PhoneFlag=true
    }

    // Email Validation
    var Email=document.getElementById("mail").value
    var EmailFlag=false 
    var flag1=false 
    var flag2=true 
    for(var i=0;i<Email.length;i++){
        if(Email[i]=='@'){
            flag1=true
        }
        if((Email[i]>='A')&&(Email[i]<='Z')){
            flag2=false
        }
    }
    if((flag1==true)&&(flag2==true)){
        EmailFlag=true
    }
    

    // Password Validation
    var Password=document.getElementById("pass").value 
    var PasswordFlag=false 
    var upper=0
    var lower=0
    var num=0
    var special=0
    for(var i=0;i<Password.length;i++){
        if((Password[i]>='A')&&(Password[i]<='Z')){
            upper++
        }else if((Password[i]>='a')&&(Password[i]<='z')){
            lower++
        }else if((Password[i]>='0')&&(Password[i]<='9')){
            num++
        }else{
            special++
        }
    }
    if((Password.length>=8)&&(Password.length<=16)&&(upper>=1)&&(lower>=1)&&(num>=1)&&(special>=1)){
        PasswordFlag=true
    }

    // Confirm Password Validation
    var Confirm=document.getElementById("confirm").value 
    var confirmFlag=false
    if(Password==Confirm){
        confirmFlag=true
    }

    // Final Validation
    if((PhoneFlag==true)&&(EmailFlag==true)&&(PasswordFlag==true)&&(confirmFlag==true)){
        window.location.href="otp.php"
    }
    else if(PasswordFlag!=true){
        document.getElementById("error").innerHTML="Invaild Password"
    }
    else if(EmailFlag!=true){
        document.getElementById("error").innerHTML="Invaild Email"
    }
    else if(confirmFlag!=true){
        document.getElementById("error").innerHTML="Confirm Password not match"
    }
    else if(PhoneFlag!=true){
        document.getElementById("error").innerHTML="Invaild Phone no"
    }
    else{
        document.getElementById("error").innerHTML="invalid credentials"
    }
}
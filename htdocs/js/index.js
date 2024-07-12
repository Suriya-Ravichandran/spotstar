function LoginValidation(){
    var db={'Yellow':'CSK','Red':'RCB','Blue':'MI','Orange':'SRH'}
    var Username=document.getElementById("user").value 
    var Password=document.getElementById("pass").value 
    var keyuser=Object.keys(db)
    var flag=false 
    for(var i=0;i<keyuser.length;i++){
        if(keyuser[i]==Username){
            if(db[Username]==Password){
                flag=true
            }
        }
    }
    if(flag==true){
        window.location.href="home.php"
    }else{
        document.getElementById("error").innerHTML="Invalid Credential"
    }

}
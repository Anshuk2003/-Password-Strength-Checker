const pass_checker=document.getElementsByClassName('passcheck');
const password=document.getElementById('Password');
const progress_bar=document.getElementById('bar');

password.onkeyup=() =>{
    console.log(password.value);
    checkStrength(password.value);
}

function checkStrength(password){
    let strength=0;
    //uppercase
    if(password.match(/(?=.*[A-Z])/)) strength++;
    if(password.match(/(?=.*[a-z])/)) strength++;
    if(password.match(/(?=.*[0-9])/)) strength++;
    if(password.match(/(?=.*[!@#$%^&*])/)) strength++;
    if(password.length>=9) strength++;
    console.log(strength);
    switch(strength){
        case 0:
            progress_bar.style.cssText=`width: ${(strength/5)*100}%; background-color:unset;`;
            break;
        case 1:
            progress_bar.style.cssText=`width: ${(strength/5)*100}%; background-color:red;`;
            break;
        case 2:
            progress_bar.style.cssText=`width:${(strength/5)*100}%; background-color: orangered;`;
            break;
        case 3:
            progress_bar.style.cssText=`width:${(strength/5)*100}%; background-color:gold;`;
            break;
        case 4:
            progress_bar.style.cssText=`width:${(strength/5)*100}%; background-color:deepskyblue;`;
            break;
        case 5:
            progress_bar.style.cssText=`width:${(strength/5)*100}%; background-color:green;`;
            break;
    }
    
}
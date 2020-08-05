user={name:"admin", password:"admin"}
user2={name:"Jimi333",password:"12345"}
user3={name:"Trevor", password:"sixtynine"}

userBase=[];
userBase.push(user);
userBase.push(user2);
userBase.push(user3);


/*
This code, along with the buttons on the pages, was used to test how session storage works

function setValue(value){

    sessionStorage.setItem("customValue",value);

}

function getValue(){

    alert(sessionStorage.getItem("customValue"));
}

*/ 

function addUser(){
    /*
    Fresh=false;
    if(sessionStorage.getItem("users")!=null && !Fresh){
        userBase=sessionStorage.getItem("users");
    }else{
        fresh=true;
    }
    */

    //alert(sessionStorage.users[0].name);



    form=document.getElementById("registerForm");
    warn=document.createElement("table");
    warn.innerHTML="<tbody>";
    for(gg=0;gg<userBase.length;gg++){

        warn.innerHTML+="<tr><td>"+userBase[gg].name+"</td><td>"+userBase[gg].password+"</td></tr>";
        
    }

    warn.innerHTML+="</tbody>";

    form.parentNode.insertBefore(warn,form);

    username=document.getElementsByName("name")[0].value;
    password= document.getElementsByName("pwd")[0].value;

    
    if(!userExists(username)){
    newUser={name:String(username),password:String(password)}
    userBase.push(newUser);
}else{
    warn=document.createElement("p");
    warn.innerHTML="THIS ACCOUNT ALREADY EXISTS. MAKE UP SOMETHING ORIGINAL!"
    form.parentNode.insertBefore(warn,form.nextSibling);
}

    sessionStorage.setItem("users",JSON.stringify(userBase));
}


function verifyPassword(){
    password= document.getElementsByName("pwd")[0].value;
    verifyField=document.getElementsByName("vPwd")[0];
    verifyFieldvalue=document.getElementsByName("vPwd")[0].value;

    if(password!=verifyFieldvalue){
    warn=document.createElement("p");
    warn.innerHTML="wrong";
    verifyField.parentNode.insertBefore(warn,verifyField.nextSibling);
}
    
    
}

function validateParams(){
    Fresh=false;
    if(sessionStorage.getItem("users")!=null && !Fresh){
    userBase=JSON.parse(sessionStorage.getItem("users"));
}else{
    Fresh=true;
}
    username=document.getElementsByName("name")[0].value;
    password= document.getElementsByName("pwd")[0].value;

    match=false;

  
    for (x=0;x<userBase.length;x++){
        if(username==userBase[x].name){
            if(userBase[x].password==password){
                
                document.getElementById("loginForm").innerHTML+="Welcome!";
                match=true;
                
            }else{
                document.getElementById("loginForm").innerHTML+="Wrong password!!!";
                match=true;
                
            }
        }else if(x==userBase.length-1 && !match){
            document.getElementById("loginForm").innerHTML+="<p> An account with this username doesn't exist. Would you like to create one?</p>";
        }
    }

    document.getElementById("bleh").innerHTML="You entered: <br>" + "Username: "+username+"<br> Password: "+ password + "<br> Number of users: " + userBase.length;
};

function userExists(username){

    match=false;
    for (x=0;x<userBase.length;x++){
        if(username==userBase[x].name){
            match=true;
        }
    }

    return match;
}
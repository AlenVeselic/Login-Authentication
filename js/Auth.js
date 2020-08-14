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

function generateUserTable(where){

    Fresh=false;

    refreshUsers(Fresh);

    warn=document.createElement("table");
    warn.classList.add("tablay");
    warn.innerHTML="<tbody>";
    for(gg=0;gg<userBase.length;gg++){

        warn.innerHTML+="<tr><td>"+userBase[gg].name+"</td><td>"+userBase[gg].password+"</td></tr>";
        
    }

    warn.innerHTML+="</tbody>";
    
    Eli=document.getElementsByClassName("tablay")[0];

    if(Eli){
        Eli.replaceWith(warn);
    }else{
        where.append(warn);
    }

    
    
    //where.insertBefore(warn,form);
}

function addUser(){
    


    //alert(sessionStorage.users[0].name);



    form=document.getElementById("registerForm");
    generateUserTable(form.parentNode);
    /*warn=document.createElement("table");
    warn.innerHTML="<tbody>";
    for(gg=0;gg<userBase.length;gg++){

        warn.innerHTML+="<tr><td>"+userBase[gg].name+"</td><td>"+userBase[gg].password+"</td></tr>";
        
    }

    warn.innerHTML+="</tbody>";

    form.parentNode.insertBefore(warn,form);
    */
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
    Fresh=false;
    Fresh=refreshUsers(Fresh);
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
    
    
    username=document.getElementsByName("name")[0].value;
    password= document.getElementsByName("pwd")[0].value;

    match=false;

    check=document.getElementsByClassName("Waning")[0];
    dest=document.getElementById("loginForm");

    warn=document.createElement("p");
    warn.classList.add("Waning");

    for (x=0;x<userBase.length;x++){
        if(username==userBase[x].name){
            if(userBase[x].password==password){
                
                wewe=document.createTextNode("Welcome!");
                warn.appendChild(wewe);

                InsertorReplace(check,warn,dest);

                match=true;
                
            }else{
                wewe=document.createTextNode("Wrong password!!!");
                warn.appendChild(wewe);

                InsertorReplace(check,warn,dest);

                match=true;
                
            }
        }else if(x==userBase.length-1 && !match){
            wewe=document.createTextNode("An account with this username doesn't exist. Would you like to create one?");
            warn.appendChild(wewe);

            InsertorReplace(check,warn,dest);


        }
    }

    document.getElementById("bleh").innerHTML="You entered: <br>" + "Username: "+username+"<br> Password: "+ password + "<br> Number of users: " + userBase.length;
};

function newPage(){
    Fresh=false;
    refreshUsers(Fresh);
}

function refreshUsers(Fresh){

    if(sessionStorage.getItem("users")!=null && !Fresh){
    userBase=JSON.parse(sessionStorage.getItem("users"));
}else{
    return true;
}

}

function userExists(username){

    match=false;
    for (x=0;x<userBase.length;x++){
        if(username==userBase[x].name){
            match=true;
        }
    }

    return match;
}

function InsertorReplace(ref,value,el){

if(ref){
    ref.replaceWith(value);
}else{
    el.appendChild(value);
}

}
user={name:"admin", password:"admin"}
user2={name:"Jimi333",password:"12345"}
user3={name:"Trevor", password:"sixtynine"}

userBase=[];
userBase.push(user);
userBase.push(user2);
userBase.push(user3);

function addUser(name,password){



    newUser={name:String(name),password:String(password)}

}

function validateParams(){

    username=document.getElementsByName("name")[0].value;
    password=document.getElementsByName("pwd")[0].value;
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
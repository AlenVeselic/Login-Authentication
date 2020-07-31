user={name:"admin", password:"admin"}
user2={name:"Jimi333",password:"12345"}

userBase=[];
userBase.push(user);
userBase.push(user2);
function validateParams(){
    
    document.getElementById("bleh").innerHTML+=userBase[0].name;

}
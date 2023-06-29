const x = 123 ;
let y = 23;

if(x > y){
    console.log("x is greater than y");
}else{
    console.log("y is greater than x")
}

//for loop
for(let i=1;i<=10;i++){
    console.log(x ,"*",i,"=",x*i);
}
// while loop
let i = 1;
while(i<=10){
    console.log(x ,"*",i,"=",x*i);
     i++;
}

let users = ['john','david','martin','ram'];
for (let i=0; i < users.length; i++){
    console.log("my name is ", users[i]);
}

users.forEach(element => {
    console.log(element)
});



// we had to use command prompt to check the output
// node filename - this is the command we need to use to check




var x=100;
console.log(x);

function city()//function name
{
    //statements
    console.log("hyderabad");
}


function country()
{
    console.log("india");
}
city();
country();

//function with local var
var z=40; //global var
function sum()
{
    //local var
    let a=10,b=20;
    console.log(a+b);
    console.log(a);
}

sum();

//console.log(a);--error

//function with parameters
function add(x,y)//parameters
{
    console.log(x+y);
    console.log(x);//101
    console.log(arguments[2]);
}
add(200,300);//arguments
add(101,201,301);


//function with return keyword
function hello()
{
    var s=111;
    return s;
}
var result=hello();
console.log(result);


//simple function
function test1(a1)
{
    return a1;

}
var r1=test1(101);
console.log(r1);

//function expression
var test2=function(a2)
{
    return a2;
}
var r2=test2(102);
console.log(r2);

//arrow function
var test3=(a3)=>{a3}
var r3=test3(103);
console.log(r3);



var test4=(a4,a5)=>{return a4+a5}
var r4=test4(104,105);
console.log(r4);


function changered()
{
    document.getElementById('demo').style.color="red"
}








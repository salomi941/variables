var marks=[78,89,67,98,32];
var stds=["sai", "ramesh","kittu" ,"nani" ,"ashok", ];

//array literal
var marks=[78,89,67,98,32];
console.log(marks)

var i=0;
while(i<=marks.length)
{
    console.log(marks[i]);
    i++;
}


//array directly
var x;
var stds=new Array();
stds[0]="sai";
stds[1]="salomi";
stds[2]="nani";
for(j=0;j<stds.length;j++)
{
    console.log(stds[j]);
}


//array constructor
var empsal=new Array(20000,30000,40000,50000);
for(k=0;k<empsal.length;k++)
{
    console.log("empsal", empsal[k]);
}


//array methods
var list=[10,20,30,40,50];

//push
list.push(60);
console.log(list);

list.unshift(9);
console.log(list);

list.pop();
console.log(list);

list.shift();
console.log(list);

//list.splice(2,0,22);
console.log(list);

//list.splice(3,1,33);
console.log(list);



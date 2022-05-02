//push the element in the array
const myarray=[];
myarray[0]="prasanth";
myarray[1]=123;
myarray[2]=true;
console.log(myarray);
myarray.push("school");
console.log(myarray);
const newarray=myarray.pop();
console.log(newarray);
console.log(myarray);

//delete
// this method is more complex
delete myarray[1];
console.log(myarray);
myarray.splice(1,1);
console.log(myarray);
myarray.splice(1,1,42);
console.log(myarray);
//slice
const newarray1=["A","B","C","D"];
//const new1 =newarray1.slice(2);
const new1 =newarray1.slice(2,5);
console.log(new1);
//newarray1.reverse();
console.log(newarray1);

//join
const new2=newarray1.join();
console.log(new2);
//split
const new3=new2.split(",");
console.log(new3);
//concat the two array
const new4=[1,2,3];
const new5=[4,5,6];
const new6=new4.concat(new5);
console.log(new6);

const new7=[...new4,...new5];
console.log(new7);
const new8=[new4,new5];
console.log(new8);





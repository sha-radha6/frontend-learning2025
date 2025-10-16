const numbers =[,2,3,4,5]
const doubled =numbers.map((num)=>num*2);
console.log(doubled);

const fruits =["apple","banana","orange"];
upperfruits =fruits.map((fruit)=>fruit.toUpperCase());
console.log(upperfruits);
 
const prices=[10,20,30];
const priceTags =prices.map((price)=>"$"+price);
console.log(priceTags);

const products =[100,50,200];
const withTax=products.map((price)=>price*1.08);
console.log(withTax);
const users =[
    {name:"sharadha",age:19},
    {name:"Ajay",age:16},
    {name:"Sidharth",age:13},
];
const names =users.map((user)=>user.name);
    console.log(names);

const rectangle=[
    {width:10,height:5},
    {width:8,height:3},
    {width:15,height:10},
];
const areas=rectangle.map((rect)=>rect.width*rect.height);
console.log(areas);
 
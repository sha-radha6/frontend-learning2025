const users =[
    { name:"sharadha",active:false},
        {name:"sidharth",active:false},
        {name:"ajay",active:false},
    
];
users.forEach((user)=>(user.active=true));
console.log(users);

const userDetails =[
    { name:"sharadha",email:"sharadhahumnabade@gmail.com"},
        {name:"sidharth",email:"sidharthhumnabade@gmail.com"},
        {name:"ajay",email:"ajayhumnabade@gmail.com"},
    
];
const notification =[];
userDetails.forEach((user)=>{
    notification.push(`Email sent to ${user.name} at ${user.email}`);
})
console.log(notification);


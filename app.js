var Employee=new Array(5);
Employee[0]= {name:"Lokesh S",age:21,salary:"3.3 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560040}};
Employee[1]= {name:"Sathya",age:20,salary:"3.3 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560010}};
Employee[2]= {name:"Vijay",age:20,salary:"3.3 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560017}};
Employee[3]= {name:"Balram",age:21,salary:"3.5 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560019}};
Employee[4]= {name:"Umesh",age:20,salary:"3.4 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560020}};


// to display in console using for loop 

for(var i=0;i<5;i++)
{
	console.log("Employee Name :",Employee[i].name); 
    console.log("Age :",Employee[i].age);
	console.log("Salary :",Employee[i].salary);
	console.log("City :",Employee[i].address.city);
	console.log("State :",Employee[i].address.state);
	console.log("Pincode :",Employee[i].address.pincode);
	console.log("\n");
}


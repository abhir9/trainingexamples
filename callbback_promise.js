//call back
 
	 function add(x,y,callback) {
		 //return x+y;
		 var output = x+y;
		 callback(output);
	 }
	add(2, 3,function(output){
		console.log('callback : hey my program run succesfully  '+output);
	})
      

//promise

	function sum(x,y){
		return new Promise(function(callback, reject){
			var A=x+y+100+200;
				callback(A);
				reject('i dont want to pass this case');
		});
	}  

	sum(4,3).then(function(output){
		console.log("Promise: hey my prog. comepleted succ"+output);		
	}) 
   
var person=function Person(name, age){
	this.name=name;
	this.age=age;
	this.showName=function(){
		console.log(this.name);
	};
	this.showAge=function(){
		console.log(this.age);
	};
}
module.exports= person;
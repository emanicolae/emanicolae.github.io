// var string = "some string";
// var number = 10;
//
// var bool_true = true;
// var bool_false = false;
// var boolean = 1 ==2;
//
// // conditional statements
// if (bool_true) {
//   console.log("The conditional statement executed.")
// }
//
// bool_true = false;
// if (bool_true) {
//   console.log("The conditional statement executed.")
// }
//
// var array = ["array_item1", "2", "3"];
// console.log( typeof bool_true);
// console.log( typeof string);
// console.log( typeof number);
// console.log( typeof array);



// var Pi =3.14;
// var constant1 = 100;
// var math_constant2 = 1.25;
// function add(value1, value2){
//   return value1 + value2;
// }
// function devide(value1, value2){
//   return value1 / value2;
// }
// function explain(){
//   return "math is amazing!";
// }
//
// var car_name = "Nissan Altima";
// var car_year_made = 2015;
// function explain_car(){
//   return "This car is a" + car_name + "made in" + car_year_made;
// }
// var math = {
//   pi: 3.14,
//   other_constant:100,
//   add: function(v1, v2){
//     return v1 + v2,
//   }
// }
//
// var car = {
//   name: "Nissan Altima",
//   year: 2015,
//  explain: function(){
//   return "This car is a" + this.name + "made in" + this.year;
// }
//
// console.log(math.explain());
// console.log(car.explain());
//
// var array = [1, 2, 3, 4, 5];
//
// for (var i=0; i<array.length; i++){
//   //do something
//   console.log(array[i]);
// }
//
// /* String Functions */
// var string = "Some random string to show how string functions work";
// var length = string.lenght;
// console.log("the length of the string is " + length);
//
// /* indexOf */
// var pos_random = string.indexOf("random");
// console.log("position of the string is " + pos_random);
//
// var sliced_string = string.slice(12, 18);
// console.log(sliced_string);
//
// var d = new Date();
// console.log("date is" + d);


var simon = {
  name: "Simon",
  age: "unknown",
}

var date1 = new Date('December 17, 1995 03:24:00');

var car = {
  name: "my car",
  owner: simon,
  date: date1
}

console.log(document);

var header = document.getElementById("first_header");

var headers = document.getElementByClassName("header");
console.log(headers);

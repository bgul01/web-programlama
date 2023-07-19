// Write a message to the console.
console.log('hello world!'.length);
 console.log(10+8);
 console.log("berat" +" gul")

//  var x= 520;
//  var y = 330;

//  var m = x+ y;

// 5

 function denem(x,y){

    return (x+y)
 }

console.log (denem(50,60));


var colors = ["red", "yelo", "blue"];

colors[0]="mavi"

console.log(colors)

var dizibirlestir = ["ahmet","mehmet"].concat(["nuri","ayse"]);

console.log(dizibirlestir)
console.log(colors.pop())
console.log(colors.reverse()) // tersten yazıdır


var araba  = {

    ad:"honda",
    renk:"kırmızı",
    tipi:"suv"
} 
araba.ad="ford"
console.log(araba.ad)


var person = {

    firstname:"mehmet",
    lastname:"nuri",
    fullName: function(){
       return this.firstname + " " + this.lastname

    }
}

console.log (person.fullName())



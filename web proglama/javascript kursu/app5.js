const point = [75,65,85,32,15,47]


const stutudentpasted =  point.filter(puan =>{

         return puan>50;
})

console.log(stutudentpasted)

const student = [

    {name:'can', passed:true},
    {name:'tuba', passed:false},
    {name:'elif', passed:false},
    {name:'osman', passed:true},
]

const gecenogrenci= student.filter(student=>{

    return student.passed 


})


console.log(gecenogrenci)



// Map methodu elemanları tek tek bastırı


const puanekle = point.map(puan => {

    return puan +10;
})

console.log(puanekle)


const kalanlarıgecir = point.map(kalanlar => {

    if(kalanlar < 50  ){

       return kalanlar +10
    }else{

         return kalanlar

    }
})

console.log(kalanlarıgecir)



// REDUCE METOHDU DATAYLA OYNAMAYI SAĞLAR 


const result = point.reduce((value,puan)=>{
if(puan>50)
{

    value++;
}

return value

},0)

console.log(result);


//FİND methodu datanın içerisindeki değeri bulmada kullanılır
// aynı değerin sadece iilkini getirir diğerine bakmaz

const higPoin = point.find(puan => {

 return puan>70

})
console.log(higPoin);




// push ve pop kullanımı  sonuna ve başına veri ekler


const puanlar = [95,63,85,75];


puanlar.push(100);// push sonuna ekler

console.log(puanlar)

puanlar.pop();
console.log(puanlar)









/// findindex dizideki belli elemanın değerini güncelleme


const arrayIndex = puanlar.findIndex(point => point ==85) // üstteki puanları değiştirdik 
puanlar[arrayIndex] = 42;
console.log(puanlar)

















const ogencilerr = [

    {name:'can', point:50},
    {name:'nuri', point:60},
    {name:'sevket', point:80},
    {name:'kamil', point:40},

]




const objectın=ogencilerr.findIndex(student => student.name == 'nuri')
ogencilerr[objectın].name='kemal'

console.log(ogencilerr)


// reverse  sort methodu = sort sıralamak alfabetik küükten büyüğe gibi 




const names = ['mehemt','ali','erbil'];


names.sort();

console.log(names)


names.reverse();

console.log(names)
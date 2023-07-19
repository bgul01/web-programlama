// alert("merhaba");



// let ad= ["mehmet", "ali","ayşe","Kemal"]
// for(let i=0 ;i<=ad.length; i++){


//     console.log(ad[i]);
    
    
// }

// let i=0;
// while(i<10){

//     console.log(i);
//     i++;
// }
// i=0
// while( i < ad.length){


//     console.log(ad[i])
//     i++;
// }

// let not ="AA"
// switch(not){
//     case 'AA':
//     console.log("başarılı")
//     break;
//     case 'bA':
//     console.log("iyi")
//     break;
//     case 'cc':
//     console.log("geçer")
//     break;
//     case 'ff':
//     console.log("kalır")
//     break;
// }


// let ogrenci = {

// ad:'can',
// yas:29

// }

// DOM KISMI 


// const selam = document.querySelector('.selamlama');

// console.log(selam);

// const hata = document.querySelector('p') // ilk p yi seçer hespini değil
// const hata = document.querySelector('.eror')// clası eror olanı seçer
// const hata = document.querySelector('div.error') //clası eror olan div i seçecek

const hata = document.querySelector('p')
hata.innerText = "selamun aleyküm"
console.log(hata.innerText)


const pdegeri = document.querySelectorAll('p');

pdegeri.forEach(a =>{

    a.innerText +='yeni isim'
})

// get attirbute 

const link  = document.querySelector('a')

console.log(link.getAttribute('href'))

link.setAttribute('href', 'www.youtube.com');// önce attirbute sonra değeri

link.textContent='youtube'



// css  düzenleme

link.style.padding='50px'
// css clasıı eklemeke

link.classList.add('bu-bir-class-name-dir') 
 // silmek için  ===  link.classList.remove('bu-bir-class-name-dir')



 
const form = document.querySelector('.myform')
const username=document.querySelector('#exampleInputEmail1')
const uyari=document.querySelector('.mesaj')

form.addEventListener('submit', e=>{
e.preventDefault();
    console.log('form gönderildi')
    // console.log(username.value)

    const password  = form.password.value
    const passwordPattern=/^[a-z]{6,10}$/
    // console.log(form.password.value)  // html de name e email verdik
   if(passwordPattern.test(password)){

    uyari.textContent='başarılı'



   }else{

    uyari.textContent='başarısız'

   }


})
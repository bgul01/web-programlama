const correctAnswer= ['E','E', 'E','E'];
const form  =  document.querySelector('.anket-form')
const result  = document.querySelector('.result')


form.addEventListener('submit', e => {

    e.preventDefault()
     let score = 0 ;
     const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,]

     userAnswer.forEach((answer,index) =>{

        if(answer===correctAnswer[index]){


            score +=25;
        }




     })

    //  console.log(score)
    result.classList.remove('d-none');
    result.querySelector('span').textContent =  `${score}%`

})
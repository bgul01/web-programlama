
const sektion =  document.querySelector('section')
console.log(sektion.children); // childlara böyle ulaşılıyor

console.log(Array.from(sektion.children)); // araya çevirrek bastık 

Array.from(sektion.children).forEach(child =>{

    child.classList.add('section-element');
})

const paraf=document.querySelector('p')
console.log(paraf.parentElement);// parenti yani bir üstü almak 
const openBtn=document.getElementById("open");
const modalConatiner=document.querySelector(".modal-container");
const closeBtn=document.getElementById('close');
// console.log(modalConatiner)

openBtn.addEventListener('click',()=>{
    // console.log("hello")
    modalConatiner.classList.add('show')
})
closeBtn.addEventListener('click',()=>{
    modalConatiner.classList.remove('show')
})
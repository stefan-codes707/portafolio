const nav = document.getElementById('nav-responsive');
nav.addEventListener('click', ()=>{
    const header = document.getElementById('header');
    header.style.display = "flex";
})

const close = document.getElementById('close');
close.addEventListener('click', ()=>{
    const header = document.getElementById('header');
    header.style.display = "none";
})






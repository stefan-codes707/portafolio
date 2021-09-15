const nav = document.getElementById('nav-responsive');
nav.addEventListener('click', ()=>{
    const header = document.getElementById('header-responsive');
    header.style.display = "flex";
})

const close = document.getElementById('close');
close.addEventListener('click', ()=>{
    const header = document.getElementById('header-responsive');
    header.style.display = "none";
})
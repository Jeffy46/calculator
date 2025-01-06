let container = document.querySelector('.display');
let load = () => {
    let temp = document.querySelectorAll('.button');
    for(let i = 0;i < temp.length; i++){
        temp[i].addEventListener('mousedown', ()=>temp[i].style.filter='brightness(80%)');
        temp[i].addEventListener('mouseup', ()=>temp[i].style.filter='brightness(100%)');
    }
};

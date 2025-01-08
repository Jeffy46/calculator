let display = document.querySelector('.display');
let operation = "";
//adds functions to buttons
let load = () => {
    //darken numbers when clicked
    let temp = document.querySelectorAll('.button');
    for(let i = 0;i < temp.length; i++){
        temp[i].addEventListener('mousedown', ()=>temp[i].style.filter='brightness(80%)');
        temp[i].addEventListener('mouseup', ()=>temp[i].style.filter='brightness(100%)');
    }
    //appends numbers to user display when clicked
    let temp2 = document.querySelectorAll("#num");
        for(let i = 0; i < temp2.length-1; i++){
        console.log(temp2[i]);
        temp2[i].addEventListener('click', ()=>{
            display.append(temp2[i].textContent);
        })
    }
    //clear display when clicked
    let temp3 = document.querySelector("#AC");
    temp3.addEventListener('click', ()=>{
        display.textContent = ""
    })
};

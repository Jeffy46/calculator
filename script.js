let display = document.querySelector('.display');
let num = "";
let altNum = "";
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
        for(let i = 0; i < temp2.length; i++){
        temp2[i].addEventListener('click', ()=>{
            num+=temp2[i].textContent;
            display.append(temp2[i].textContent);
        })
    }
    //clear display when clicked
    let temp3 = document.querySelector("#AC");
    temp3.addEventListener('click', ()=>{
        display.textContent = ""
        num="";
    })
    //postive negative toggle
    let temp4 = document.querySelector("#posNeg");
    temp4.addEventListener('click', () =>{
        num*=-1;
        refresh();
    });
    //deletes last digit
    let temp5 = document.querySelector("#delete");
        temp5.addEventListener('click', ()=>{
            try{
                num = num.substring(0,num.length-1);
                refresh();
            }catch(err){
            }
        })
    }

    //divide by hundred
    let temp6 = document.querySelector("#divByHundred");
    temp6.addEventListener('click', ()=>{
        num = parseFloat(parseFloat(num/100).toFixed(10));
        refresh();
    })

    let temp7 = document.querySelector("#divide");
    temp7.addEventListener('click',()=>{
        operation = "/";
        altNum = num;
        num = "";
        refresh();

    })
    let temp8 = document.querySelector("#multiply");
    temp8.addEventListener('click',()=>{
        operation = "*";
        altNum = num;
        num = "";
        refresh();

    })
    let temp9 = document.querySelector("#subtract");
    temp9.addEventListener('click',()=>{
        operation = "-";
        altNum = num;
        num = "";
        refresh();

    })
    let temp10 = document.querySelector("#add");
    temp10.addEventListener('click',()=>{
        operation = "+";
        altNum = num;
        num = "";
        refresh();
    })

    //computes value
    let temp11 = document.querySelector("#equal");
    temp11.addEventListener('click',()=>{
        num = parseInt(num);
        altNum = parseInt(altNum);
        if(operation === "/"){
            num=altNum/num;
        }
        if(operation === "*"){
            num=altNum*num;
        }
        if(operation === "-"){
            num=altNum-num;
        }
        if(operation === "+"){
            num=altNum+num;
        }
        console.log(num);
        altNum=0;
        refresh();
    })
let refresh = () =>{
    display.innerHTML=num;
    console.log(num)
}
let elementInput = document.getElementsByTagName('input');
let elementSpan =  document.getElementsByTagName('span');
const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
function valid()
{
    for(let i = 0; i<4;i++)
     {
        if(elementInput[i].value == "")
         {
             elementSpan[i].classList.remove('display');
             elementInput[i].classList.add('inpStyle');         } 
        else{
            elementSpan[i].classList.add('display');
            elementInput[i].classList.remove('inpStyle');
        }
     } 
     if(!elementInput[2].value.match(pattern))
     {   
        elementInput[2].classList.add('color');
        elementSpan[2].classList.remove('display');
        elementInput[2].classList.add('inpStyle');
     }
     else{
        elementInput[2].classList.remove('color');
        elementSpan[2].classList.add('display');
        elementInput[2].classList.remove('inpStyle');
     }

}

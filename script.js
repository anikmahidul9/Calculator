let string = '';
let numbtn = document.querySelectorAll('.button');
let displayopration =  document.querySelector('.calc-operation');
let displayvalue = document.querySelector('.calc-typed');
Array.from(numbtn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        displayvalue.innerHTML="";
        displayopration.innerHTML="";
        if(e.target.innerHTML!= 'C') { displayopration.innerHTML = string  + e.target.innerHTML;}
        if(e.target.innerHTML == '='){
            string = eval(string);
            displayvalue.innerHTML = string;
            
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            displayopration.innerHTML="";
            displayvalue.innerHTML="";
        }

        else if(e.target.innerHTML=='C'){
            string=string.slice(0,-1);
            displayvalue.innerHTML=string;
        }
       
        else{
            string = string + e.target.innerHTML;
            displayvalue.innerHTML = string;
        }
       
    })
})
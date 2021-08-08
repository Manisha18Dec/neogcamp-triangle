const sides=document.querySelectorAll('.side-input');
const checkBtn=document.querySelector('#check-btn');
const outputE1=document.querySelector('#output');
function calculateMultOfBaseHeight(base,height){
    const MultOfBaseHeight=0.5*(base*height);
    // console.log(sumOfSquares);
    return MultOfBaseHeight;

}

function calculateArea(){
   const MultOfBaseHeight= calculateMultOfBaseHeight(Number(sides[0].value),Number(sides[1].value));
   console.log(MultOfBaseHeight)
//    outputE1.innerText="The length of hypotenouse is "+ MultOfBaseHeight;
   
}


checkBtn.addEventListener('click',calculateArea);
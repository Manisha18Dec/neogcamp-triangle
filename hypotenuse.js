const sides=document.querySelectorAll('.side-input');
const hypotenousBtn=document.querySelector('#hypotenouse-btn');
const outputE1=document.querySelector('#output');
function calculateSumOfSquares(a,b){
    const sumOfSquares=a*a +b*b;
    // console.log(sumOfSquares);
    return sumOfSquares;

}

function calculateHypotenous(){
   const sumOfSquares= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
   const lengthOfHypotenouse=Math.sqrt(sumOfSquares);
   outputE1.innerText="The length of hypotenouse is "+ lengthOfHypotenouse;
   
}


hypotenousBtn.addEventListener('click',calculateHypotenous );
'use strict';
function getdatafrom(){
    let correct= localStorage.getItem('correctanswers');
    let worng= localStorage.getItem('wronganswers');
    console.log(correct,worng);
    let answarwrong= localStorage.getItem('userwrongansnum');
    let answarwrongObj = JSON.parse(answarwrong);
   console.log(answarwrongObj);
   

    if (Number(correct)>= Number(worng) ){
        document.getElementById('div1').innerHTML=` Congratulations You Passed <br>You have ${correct}correct answar and ${worng} worng answar `
        let green = 'geern';
        document.body.style.background='green';
        console.log(green);
    } else{
        let red = 'red';
        document.getElementById('div1').innerHTML=` Congratulations You faill <br>You have ${correct}correct answar and ${worng} worng answar `
        console.log(red);
        document.body.style.background='red';
    }
}
getdatafrom()
function ruslt(){

}
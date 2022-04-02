`use strict`;
let nextbutton = document.getElementById("nextquestion");
let questiontxt = document.getElementById("question");
let answersdiv = document.getElementById("answers");
let choices = document.getElementsByClassName("qchoices");
let resultbutton = document.getElementById("resultsbutton")
let index = 0;

let htmlquestion = [
     {
        question : "What does HTML stand for?",
        answer1 : "Home Tool Markup Language",
        answer2 : "Hyperlinks and Text Markup Language",
        answer3 : "Hyper Text Markup Language" 
     }
     ,
     {
         question : " We can write HTML code using ________.",
         answer1 : "Microsoft Word",
         answer2 : "Notebad",
         answer3 : "Notepad++"

     }
     ,
     {
         question : "Fundamental blocks in HTML is called as ________.",
         answer1 : "HTML Attribute",
         answer2 : "HTML Tag",
         answer3 : "HTML Element",
     },
     {
        question : "HTML is considered as __________.",
        answer1 : "High Level Language",
        answer2 : "OOP Language",
        answer3 : "Markup Language",
    },
    {
        question : "Choose the correct HTML element for the largest heading:",
        answer1 : "	&#60th1>",
        answer2 : "	&#60th6>",
        answer3 : "	&#60theading>",
    },
    
    ]
    let htmlanswersarr = [1,2,3,3,1];
    let cssanswersarr = [1,1,1,1,1];
    let jsanswersarr = [3,2,1,3,2];

let answersarr = [];
let choosedanswer = 0
function setdataintoarray()
{
   
    let q1 = JSON.stringify(htmlanswersarr);
    localStorage.setItem("htmlanswers" , q1)
    let q2 = JSON.stringify(cssanswersarr);
    localStorage.setItem("cssanswers" , q2)
    let q3 = JSON.stringify(jsanswersarr);
    localStorage.setItem("jsanswers" , q3)
}
setdataintoarray()
choices[0].addEventListener("click" ,getvalue1)
function getvalue1()
{
    choosedanswer = 1;
choices[0].style.background = "red";
choices[1].style.background = "yellow";
choices[2].style.background = "yellow";


}
choices[1].addEventListener("click" ,getvalue2)
function getvalue2()
{
    choosedanswer = 2;
    choices[0].style.background = "yellow";
choices[1].style.background = "red";
choices[2].style.background = "yellow";

}
choices[2].addEventListener("click" ,getvalue3)
function getvalue3()
{
    choosedanswer = 3;
    choices[0].style.background = "yellow";
    choices[1].style.background = "yellow";
    choices[2].style.background = "red";
   
    

}

nextbutton.addEventListener("click" , setdatatoLstorage)
function setdatatoLstorage(event)
{
   let nextqvalue =  nextq(htmlquestion);

   questiontxt.innerHTML = nextqvalue.question;
   choices[0].innerHTML = nextqvalue.answer1;
   choices[1].innerHTML = nextqvalue.answer2;
   choices[2].innerHTML = nextqvalue.answer3;
   answersarr[index -1] = choosedanswer;


   if(index == htmlquestion.length)
   {
       resultbutton.style.display = "block";
       nextbutton.style.display = "none";
       answersdiv.style.display = "none";
       questiontxt.style.display = "none";
   }    
}

resultbutton.addEventListener("click",gotoresultpg)
function gotoresultpg()
{
    let correctcounter = 0;
    let falsecounter = 0;
    for(let i =0 ;  i < answersarr.length;i++)
    {
        if(answersarr[i] == htmlanswersarr[i])
            correctcounter ++;      
        else
        falsecounter ++ 
    }
    let correctansw = JSON.stringify(correctcounter)
    localStorage.setItem("correctanswers" , correctansw)
    let wrongansw = JSON.stringify(falsecounter)
    localStorage.setItem("wronganswers", wrongansw)
    

}

function nextq (x)
{
   let nextqvalue =  x[index];
   index++;
   return nextqvalue;
    
    
}

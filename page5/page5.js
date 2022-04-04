'use strict';
let passtest = document.getElementById("passtest");
let showansbtn = document.getElementById("showanswersbtn");
let ruslt = document.getElementById('passtest');
let table = document.getElementById('table');
let tablebody = document.getElementById('tbody');


/////////////////getdata
let correct = localStorage.getItem('correctanswers');
let worng = localStorage.getItem('wronganswers');
let x = localStorage.getItem('name');
let user = x.slice(0, -1)

console.log(user);
console.log(correct, worng);
let answarwrong = localStorage.getItem('userwrongansnum');
let answarwrongObj = JSON.parse(answarwrong);


let htmlquestion = [
    {
       question : "What does HTML stand for?",
      1 : "Home Tool Markup Language",
      2 : "Hyperlinks and Text Markup Language",
      3 : "Hyper Text Markup Language" 
    }
    ,
    {
        question : " We can write HTML code using ________.",
       1 : "Microsoft Word",
       2 : "Notebad",
       3 : "Notepad++"

    }
    ,
    {
        question : "Fundamental blocks in HTML is called as ________.",
       1 : "HTML Attribute",
       2 : "HTML Tag",
       3 : "HTML Element",
    },
    {
       question : "HTML is considered as __________.",
      1 : "High Level Language",
      2 : "OOP Language",
      3 : "Markup Language",
   },
   {
       question : "Choose the correct HTML element for the largest heading:",
      1 : "	&#60th1>",
      2 : "	&#60th6>",
      3 : "	&#60theading>",
   },  
   {
    question : ` `,
   1 : "	",
   2 : "	",
   3 : "	",
},
   ]
   let Cssquestion = [
       {
          question : "Which of the below is the abbreviation of CSS ?",
         1 : "Cascade sheets style",
         2 : "Color and style sheets",
         3 : "Cascading style sheets" 
       }
       ,
       {
           question : " Which of the below CSS properties is used to change the background color of CSS ?",
          1 : "bg color",
          2 : "background-color",
          3 : "color"
  
       }
       ,
       {
           question : "Which of the below CSS class is used to change the text color of CSS ?",
          1 : "background-color",
          2 : "color",
          3 : "color-background",
       },
       {
          question : "Which of the below is correct syntax when we put a line over text in CSS ?",
         1 : "text-decoration: line",
         2 : "text-decoration: overline",
         3 : "text-decoration: underline",
      },
      {
          question : "How do we set the default width of the font in CSS ?",
         1 : "	font-stretch",
         2 : "	font-weight",
         3 : "	text-transform",
      },
      {
        question : ` `,
       1 : "	",
       2 : "	",
       3 : "	",
    },
      
      
      ]
      let JSquestion = [
       {
          question : "Where is the correct place to insert a JavaScript?",
         1 : "The head section",
         2 : "both the head section and the body section are correct",
         3 : "the body section" 
       }
       ,
       {
           question : `What tag do you need to use to enclose the JavaScript code?`,
          1 : "body",
          2 : "script",
          3 : "code"
  
       }
       ,
       {
           question : `What will the following statements display?
           var test=5+7; document.write(test);`,
          1 : "text",
          2 : "5+7",
          3 : "12",
       },
       {
          question : "What character do we use for multiplication?",
         1 : "x",
         2 : "&",
         3 : "*",
      },
      {
          question : `What's the result of using a modulus operator for 38%5?`,
         1 : "	3",
         2 : "	2",
         3 : "	0",
      },
      {
        question : ` `,
       1 : "	",
       2 : "	",
       3 : "	",
    },  
      
      ]


/////////////////////Show result
ruslt.innerHTML = `Your result is ${Number(correct) / 5 * 100}% <br>
You have ${correct} correct answars and ${worng} worng answars `;



function getdatafrom() {

    console.log(answarwrongObj);


    if (Number(correct) >= Number(worng)) {
        document.getElementById('div1').innerHTML = `Congratulations <span id='username'> ${user.slice(1)} </span> You Pass`;
        document.getElementById('username').style.color = '#79D70F';
        document.getElementById('logo').src = '../img/greenlogo.png';
       
        ruslt.style.color='#79D70F'








    } else {
        document.getElementById('div1').innerHTML = `Unfortunately <span id='username'> ${user.slice(1)} </span> You Fall`;
        document.getElementById('username').style.color = 'red';
        document.getElementById('logo').src = '../img/redlogo.png';
        ruslt.style.color='red'



    }
}
getdatafrom()

function style1rcolor() {
    if (Number(correct) >= Number(worng)) {
        passtest.style.border = '2px solid #009879';

    } else {
        passtest.style.border = '2px solid red';


    }

}
function style2rcolor() {
    if (Number(correct) >= Number(worng)) {

        showansbtn.style.background = '#009879'
    } else {

        showansbtn.style.background = 'red';

    }

}

function noborder() {
    passtest.style.border = 'none'
    showansbtn.style.background = '#ffffff'
}






function gettabledata()
{
    let topic  = localStorage.getItem('topic');
    let topicobj = JSON.parse(topic)
    let htmlcorrect  = localStorage.getItem('htmlanswers');
    let htmlanswers = JSON.parse(htmlcorrect)
    let csscorrect  = localStorage.getItem('cssanswers');
    let cssanswers = JSON.parse(csscorrect)
    let jscorrect  = localStorage.getItem('jsanswers');
    let jsanswers = JSON.parse(jscorrect)
    let correctansw = []
    console.log(  topicobj);
    let showanswers = []

    if(topicobj == 'HTML')
    {
        showanswers = htmlquestion;
        correctansw = htmlanswers
    }
    else if ( topicobj == 'CSS')
    {
        showanswers = Cssquestion;
        correctansw = cssanswers
        console.log(correctansw[0]);

    }
    else if (topicobj == 'JS')
    {
        showanswers = JSquestion
        correctansw = jsanswers
    }

    console.log(showanswers);

    let trow = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    tablebody.appendChild(trow)
    trow.appendChild(td)
    trow.appendChild(td1)
    trow.appendChild(td2)
    td.innerHTML = `${showanswers[0].question} <br>
     1.${showanswers[0][1]} 2.${showanswers[0][2]}  3.${showanswers[0][3]} `
    td1.innerHTML = showanswers[0][correctansw[0]]
    
    td2.innerHTML = worng[0]

    

   

    





}
gettabledata()
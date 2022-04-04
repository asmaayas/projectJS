`use strict`;
let username = document.getElementById("username")
let nextbutton = document.getElementById("nextquestion");
let questiontxt = document.getElementById("question");
let answersdiv = document.getElementById("answers");
let choices = document.getElementsByClassName("qchoices");
let resultbutton = document.getElementById("resultsbutton")
let timercounter = document.getElementById("timercounter");
let timer = document.getElementById("timer")
let qimg = document.getElementById("qimg")
let index = 0;
let dropdownboxchoice ;
let choosedtopicarr = [];
let topiccorrectanswers =[];

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
   {
    question : ` `,
    answer1 : "	",
    answer2 : "	",
    answer3 : "	",
},
   ]
   let Cssquestion = [
       {
          question : "Which of the below is the abbreviation of CSS ?",
          answer1 : "Cascade sheets style",
          answer2 : "Color and style sheets",
          answer3 : "Cascading style sheets" 
       }
       ,
       {
           question : " Which of the below CSS properties is used to change the background color of CSS ?",
           answer1 : "bg color",
           answer2 : "background-color",
           answer3 : "color"
  
       }
       ,
       {
           question : "Which of the below CSS class is used to change the text color of CSS ?",
           answer1 : "background-color",
           answer2 : "color",
           answer3 : "color-background",
       },
       {
          question : "Which of the below is correct syntax when we put a line over text in CSS ?",
          answer1 : "text-decoration: line",
          answer2 : "text-decoration: overline",
          answer3 : "text-decoration: underline",
      },
      {
          question : "How do we set the default width of the font in CSS ?",
          answer1 : "	font-stretch",
          answer2 : "	font-weight",
          answer3 : "	text-transform",
      },
      {
        question : ` `,
        answer1 : "	",
        answer2 : "	",
        answer3 : "	",
    },
      
      
      ]
      let JSquestion = [
       {
          question : "Where is the correct place to insert a JavaScript?",
          answer1 : "The head section",
          answer2 : "both the head section and the body section are correct",
          answer3 : "the body section" 
       }
       ,
       {
           question : `What tag do you need to use to enclose the JavaScript code?`,
           answer1 : "body",
           answer2 : "script",
           answer3 : "code"
  
       }
       ,
       {
           question : `What will the following statements display?
           var test=5+7; document.write(test);`,
           answer1 : "text",
           answer2 : "5+7",
           answer3 : "12",
       },
       {
          question : "What character do we use for multiplication?",
          answer1 : "x",
          answer2 : "&",
          answer3 : "*",
      },
      {
          question : `What's the result of using a modulus operator for 38%5?`,
          answer1 : "	3",
          answer2 : "	2",
          answer3 : "	0",
      },
      {
        question : ` `,
        answer1 : "	",
        answer2 : "	",
        answer3 : "	",
    },


      
      
      ]
      /////////////correctanswersarray
      let htmlanswersarr = [3,2,2,3,1];
    let cssanswersarr = [3,2,2,2,1];
 let jsanswersarr = [2,2,3,3,1];

 function setname() {
     let localstgname = localStorage.getItem('name');
     console.log(localstgname);
 let x = localstgname.slice(0,-1)
    username.innerHTML =   x.slice(1);
 }
 setname()

    function gettopic ()
{
    let userinfo = localStorage.getItem('topic');
    let objuser = JSON.parse(userinfo);
    console.log(objuser);
    return objuser;

}  
function setquestions()
{
    let topic = gettopic()

    if(topic == 'HTML')
    {
        choosedtopicarr = htmlquestion;
        topiccorrectanswers = htmlanswersarr;
        qimg.src = "../img/html-1.jpg";
    }
    else if (topic == 'CSS')
    {
        choosedtopicarr = Cssquestion;
        topiccorrectanswers = cssanswersarr;
        qimg.src = "../img/JS.png";
    }
    else if (topic == 'JS')
    {
        choosedtopicarr = JSquestion;
        topiccorrectanswers = jsanswersarr;
        qimg.src = "../img/learn-css.png";
        console.log(topiccorrectanswers);
        console.log(choosedtopicarr);
    }
}
setquestions()
   

let answersarr = [];
let choosedanswer = 0;
///////////////// function that sets the answers in the local stoarge
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

////////////choosetheanswerbyuser
////////////choosetheanswerbyuser
choices[0].addEventListener("click" ,getvalue1)
function getvalue1()
{
    choosedanswer = 1;
choices[0].style.background = "#FDB827";
choices[1].style.background = "";
choices[2].style.background = "";


}
choices[1].addEventListener("click" ,getvalue2)
function getvalue2()
{
    choosedanswer = 2;
    choices[0].style.background = "";
choices[1].style.background = "#FDB827";
choices[2].style.background = "";

}
choices[2].addEventListener("click" ,getvalue3)
function getvalue3()
{
    choosedanswer = 3;
    choices[0].style.background = "";
    choices[1].style.background = "";
    choices[2].style.background = "#FDB827";
   
    

}
function setinitalquestion()
{
    // let nextqvalue =  nextq(htmlquestion);

    questiontxt.innerHTML = choosedtopicarr[0].question;
    choices[0].innerHTML = choosedtopicarr[0].answer1;
    choices[1].innerHTML = choosedtopicarr[0].answer2;
    choices[2].innerHTML = choosedtopicarr[0].answer3;
    ////////////Toputthe user answer in the answersarr
    // answersarr[index -1] = choosedanswer;

}
setinitalquestion()





nextbutton.addEventListener("click" , setdatatoLstorage)
function setdatatoLstorage(event)
{
    setuseranswer()
 
if(index == choosedtopicarr.length  -2  )
   {
       resultbutton.style.display = "block";
       nextbutton.style.display = "none";
       answersdiv.style.display = "none";
       questiontxt.style.display = "none";
       
       return 0;
   }     
else
{
if(choosedanswer != 0)
{





    let nextqvalue =  nextq(choosedtopicarr);
    //////////To set the next question in the html
   questiontxt.innerHTML = nextqvalue.question;
   choices[0].innerHTML = nextqvalue.answer1;
   choices[1].innerHTML = nextqvalue.answer2;
   choices[2].innerHTML = nextqvalue.answer3;
//    setuseranswer()
   
}
}
function setuseranswer()
{
     ////////////Toputthe user answer in the answersarr
     console.log(typeof answersarr );
   answersarr[index ] = choosedanswer;
   console.log(answersarr);
   console.log(typeof answersarr );
}
    
}
///////function that set the next question 
function nextq (x)
{
    index++;
   let nextqvalue =  x[index];
  
   
   return nextqvalue;
    
    
}


///////// function that check the result and store them in local stoarge
resultbutton.addEventListener("click",gotoresultpg)
function gotoresultpg()
{
    let wrongansarr = [];
    let userwrongansw = [];
    // let wga = 0; //wrongcountforarr
    let x =0;
    let correctcounter = 0;
    let falsecounter = 0;
    for(let i =0 ;  i < answersarr.length;i++)
    {
        if(answersarr[i] == topiccorrectanswers[i])
            correctcounter ++;      
        else
        {
            falsecounter ++ ;
            wrongansarr[x] = i;
            userwrongansw[x] = answersarr[i];
            

            x++;
        }

    }

    let correctansw = JSON.stringify(correctcounter)
    console.log(correctansw);
    localStorage.setItem("correctanswers" , correctansw)
    let wrongansw = JSON.stringify(falsecounter)
    console.log(wrongansw);
    localStorage.setItem("wronganswers", wrongansw)
    let wrongansertolocal = JSON.stringify(wrongansarr)
    localStorage.setItem("userwrongansnum" , wrongansertolocal)
    let userwrongansers = JSON.stringify(userwrongansw)
    localStorage.setItem("userwrongans" , userwrongansers)


}





//////////timer
let mins = 9;
let secs = 59;
setInterval(() => {
    timercounter.innerHTML = mins + ":" + secs;
    if(secs == 0)
    {
        mins--;
        secs = 60;
    }
    secs--;
    if(mins ==0 && secs == 0 )
    {

        setTimeout(() => {
       resultbutton.style.display = "block";
       nextbutton.style.display = "none";
       answersdiv.style.display = "none";
       questiontxt.style.display = "none";
       timer.style.display = "none";

       setuseranswer()

            
        }, 2000);
        

    }  
}, 1000);
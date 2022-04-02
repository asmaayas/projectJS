let email = document.getElementById('email');
let passsword = document.getElementById("password")

function getinfofromlocal(){
    let userinfo=localStorage.getItem(email.value);
    console.log(userinfo);
    if(userinfo)
    {
    let userinfoObj = JSON.parse(userinfo)
    console.log(userinfoObj);
    console.log(userinfoObj[0].password);
    
    console.log(passsword.value);
    
    if(userinfoObj[0].password == passsword.value)
    {
        let storeTopic= userinfoObj[0].topic;
        
        // window.location.href = "../Project-2/Questionpage.html"
        let storTopicSt= JSON.stringify(storeTopic);
        localStorage.setItem('topic',storTopicSt)
        console.log(storTopicSt);

    }
    }
    else
    {
        console.log("incorrect email");
    }
}

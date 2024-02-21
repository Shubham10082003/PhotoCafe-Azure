var form = document.querySelector('form')
var user = document.querySelector('#user')
var pass = document.querySelector('#pass')
var btn1 = document.querySelector('#btn1')
var euser  = document.querySelector('#euser')
var epass  = document.querySelector('#epass')
var ebut  = document.querySelector('#ebut')
var storage = JSON.parse(localStorage.getItem("data"))
var flag=true;

// btn1.addEventListener('click',(pagal)=>{
    form.addEventListener('submit',(pagal)=>{
    euser.innerHTML=""
    epass.innerHTML=""
    ebut.innerHTML=""

    if(user.value=="" && pass.value==""){
        euser.innerHTML=`enter the username <br>`
        epass.innerHTML=`enter the pass`
        pagal.preventDefault()
        flag=false;
    }
    else if(user.value==""){
        euser.innerHTML=`enter the username`
        pagal.preventDefault()
        flag=false;
    }
    else if(pass.value==""){
        epass.innerHTML=`enter the pass`
        pagal.preventDefault()
        flag=false;
    }


    for(var i=0;i<storage.length;i++){
    if(user.value == storage[i].first && pass.value == storage[i].pass){
        alert("welcome")
        flag=false;
    } 
   }  

   if(flag){
    ebut.innerHTML=`not matching`;
    pagal.preventDefault()
}

   // else{
    //     ebut.innerHTML=`invalid data`
    //     pagal.preventDefault()
    //     user.value=""
    //     pass.value=""
    // }
})


// ebtn.addEventListener("click",()=>{
//     user.value=""
//     pass.value=""
//     euser.value=""
//     epass.value=""
//     stay.preventDefault()
// })



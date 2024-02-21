var user=document.querySelector("#user")
var pass=document.querySelector("#pass")
var form=document.querySelector("form")
var epass=document.querySelector("#epass")
var euser=document.querySelector("#euser")

var log=document.querySelector("#log")
var elog=document.querySelector("#elog")

var local=JSON.parse(localStorage.getItem("Data"))
var ob=true

form.addEventListener("submit",(hj)=>{
     euser.innerHTML=""
     epass.innerHTML=""
     elog.innerHTML=""

    if(user.value=="" && pass.value==""){
        euser.innerHTML="Please enter Email"
        epass.innerHTML="Please enter password"
        hj.preventDefault()
        ob=false
    }

    else if(pass.value==""){
        epass.innerHTML="Please Enter Password"
        hj.preventDefault()
        ob=false
    }

    else if(user.value==""){
        euser.innerHTML="Please Enter Email"
        hj.preventDefault()
        ob=false
    }
 
    for(var i=0; i<local.length; i++){
    if(user.value==local[i].number && pass.value==local[i].pass){
        alert("Success")
        ob=false
        
    }
    // else if(user.value==local[i].number && pass.value!=local[i].pass){
    //     epass.innerHTML="Wrong password"
    //     hj.preventDefault()
    // }
 
   
     
    }
    if(ob){
        elog.innerHTML=`Wrong Credentials`
        hj.preventDefault()
    }

    //  else if(user.value!=local[i].number && pass.value!=local[i].pass){
    //     elog.innerHTML=`invalid data`
    //     hj.preventDefault()
    //     user.value=""
    //     pass.value=""
    // }
    
    

})

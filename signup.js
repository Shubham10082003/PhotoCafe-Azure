var first=document.querySelector("#first")
var last=document.querySelector("#last")
var number=document.querySelector("#number")
var email=document.querySelector("#email")
var pass=document.querySelector("#pass")
var pass1=document.querySelector("#pass1")

var firstname=document.querySelector("#firstname")
var lastname=document.querySelector("#lastname")
var mnumber=document.querySelector("#mnumber")
var memail=document.querySelector("#memail")
var mpass=document.querySelector('#mpass')
var mpass1=document.querySelector("#mpass1")

var button=document.querySelector("#sign")
var hj=true
var store=[]

var local=JSON.parse(localStorage.getItem("Data"))
if(local){
   store=local
}

button.addEventListener("click",(valid)=>{
    
     var num=/^[a-zA-Z]{2,10}$/
     var num1=/^[6-9][0-9]{9}$/
     var num2=/^[a-zA-Z0-9]{6,15}$/


//-----------------for first name--------------
    if(first.value==""){
      firstname.innerHTML="Please Enter your name"
      hj=false
    }
    else if(num.test(first.value)){
        firstname.innerHTML=""
    }
    else{
        firstname.innerHTML="Invalid First Name"
        hj=false
    }


    //---------------for last name-----------

    if(last.value==""){
        lastname.innerHTML="Please enter last name"
        hj=false
    }
    else if(num.test(last.value)){
        lastname.innerHTML=""
    }
    else{
        lastname.innerHTML="Invalid last name"
        hj=false
    }


    //----------------for mobile number-------------
   if(number.value==""){
    mnumber.innerHTML="Please enter number"
    hj=false
   }
   else if(num1.test(number.value)){
    mnumber.innerHTML=""
   }
   else{
    mnumber.innerHTML="Invalid number"
    hj=false
   }
//    for(i=0; i<local.length; i++){
//       if(number.value==local[i].number){
//        mnumber.innerHTML="Number Already Registered"
//        hj=false
//       }
     
//    }
  
 
  

    //---------------for Email---------

   if(email.value==""){
    memail.innerHTML="Please Enter email"
    hj=false
   }
   else{
    memail.innerHTML=""
   }
   //    for(i=0; i<local.length; i++){
//       if(email.value==local[i].email){
//        memail.innerHTML="Email Already Registered"
//        hj=false
//       }
     
//    }

   


    //-------------------for password-----------

    if(pass.value==""){
        mpass.innerHTML="Please Enter password"
        hj=false
    }
    else if(num2.test(pass.value)){
        mpass.innerHTML=""
    }
    else{
        mpass.innerHTML="Invalid Password"
        hj=false
    }

    if(pass.value==pass1.value){
        mpass1.innerHTML=""
    }
    else if(pass1.value==""){
        mpass1.innerHTML="Please Enter password"
        hj=false
    }
    else{
        mpass1.innerHTML="Password does not match"
        hj=false
    }


    if(hj){
        alert("login succes")
          var signin={
              first :first.value,
              last :last.value,
              number :number.value,
              email :email.value,
              pass :pass.value
          }
  
          store.push(signin)
          localStorage.setItem("Data",JSON.stringify(store))
     }
     else{
        valid.preventDefault()
     }
  


})
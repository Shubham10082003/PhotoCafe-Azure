var storage=[{
            id: "div1",
            src :"./images/men1.jpg",
            shirt :"Ray-Ban",
            price : 3000,
            rating : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
            stock : 0,
            flag:false
        },{
            id: "div2",
            src :"./images/men2.jpg",
            shirt :"Oakley",
            price : 4000,
            rating : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
            flag:false
        },{
            id: "div3",
            src :"./images/men3.jpg",
            shirt :"Maui Jim",
            price : 5000,
            rating : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
            flag:false
        },{
            id: "div4",
            src :"./images/men4.jpg",
            shirt :"Persol",
            price : 4000,
            rating : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
            flag:false
        }]

var women=[{
    id: "div9",
    src :"./images/women1.jpg",
    shirt :"Gucci",
    price : 3000,
    rating : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
},{
    id: "div10",
    src :"./images/women2.jpg",
    shirt :"Prada",
    price : 4000,
    rating :  `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
},{
    id: "div11",
    src :"./images/women3.jpg",
    shirt :"Versace",
    price : 5000,
    rating :  `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
},{
    id: "div12",
    src :"./images/women4.jpg",
    shirt :"Tom Ford",
    price : 4000,
    rating :  `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
}

]
        


var brand=[{
    id: "div13",
    src :"./images/kid1.jpg",
    shirt :"Chanel",
    price : 3000,
    rating : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
},{
    id: "div14",
    src :"./images/kid2.jpg",
    shirt :"Oliver Peoples",
    price : 4000,
    rating :  `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
},{
    id: "div15",
    src :"./images/kid3.jpg",
    shirt :"Burberry",
    price : 5000,
    rating :  `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
},{
    id: "div16",
    src :"./images/kid4.jpg",
    shirt :"Carrera",
    price : 4000,
    rating :  `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
    flag:false
}

]

var main=document.querySelector("main")
var logo=document.querySelector(".fa-solid.fa-cart-shopping")
var popup=document.querySelector("#popup")
var close=document.querySelector(".fa-solid.fa-circle-xmark")
var count=document.querySelector("#count")
var wo=document.querySelector("#wo")
var bd=document.querySelector("#bd")
var logout=document.querySelector("#logout")
var local=JSON.parse(localStorage.getItem("Data"))

function oc(){
logo.addEventListener("click",()=>{
    popup.style.right=`0%`
})
count.addEventListener("click",()=>{
    popup.style.right="0%"
})
close.addEventListener("click",()=>{
    popup.style.right="-100%"
})


//----------------extra practice--------
// function opencart(){
//     popup.style.right=`0%`
// }

}
// function pop(){
//     count.addEventListener("click",()=>{
//         popup.style.right="0"
//     })

// }


function logoutbt(){
    alert("Logged out succes")
    window.location.href="./login.html";
}
logout.addEventListener("click",logoutbt);





function cart(){

        storage.forEach((e)=>{
           
            main.innerHTML += ` <div id=${e.id}>
                                     <img src=${e.src} alt="">
                                     <h3>${e.shirt}</h3>
                                    
                                     <div class="un"><span>Rs.${e.price}</span><span>Rating:${e.rating}</span></div>
                                     <button class="fav"><i class="fa-solid fa-bag-shopping"></i></button>
                               </div>`
                               
                            //    if(e.stock==0){
                            //     var fav=document.querySelector(".out")
                
                            //     fav.innerHTML="Out of stock"
                            //     fav.style="color:red text-align:center"
                            // }
        })

    }

    function womencart(){

        women.forEach((e)=>{
            wo.innerHTML += ` <div id=${e.id}>
                                     <img src=${e.src} alt="">
                                     <h3>${e.shirt}</h3>
                                    
                                     <div class="un"><span>Rs.${e.price}</span><span>Rating:${e.rating}</span></div>
                                     <button class="fav"><i class="fa-solid fa-bag-shopping"></i></button>
                               </div>`
        })

    }

    function brandcart(){

        brand.forEach((e)=>{
            bd.innerHTML += ` <div id=${e.id}>
                                     <img src=${e.src} alt="">
                                     <h3>${e.shirt}</h3>
                                   
                                     <div class="un"><span>Rs.${e.price}</span><span>Rating:${e.rating}</span></div>
                                     <button class="fav"><i class="fa-solid fa-bag-shopping"></i></button>
                               </div>`
        })

    }


    function addcart(){
        var fav=document.querySelectorAll(".fav")
        var not=document.querySelector(".not")

        fav.forEach((a)=>{
           a.addEventListener("click",()=>{
        //    not.style="margin-left:42%"
           

            var parentid=a.parentElement.id

            storage.forEach((b)=>{
                if(parentid==b.id && b.flag!=true){  //!b.flag another way
                    var dynamic=document.querySelector("#dynamic")
                    dynamic.innerHTML+=`<div class="cont">
                                         <img src=${b.src} alt="">
                                       <div class="m">
                                         <h4>${b.shirt}</h4>
                                         <p>Rs.${b.price}</p>
                                         <input type="number" class="input" value="1">
                                        </div>
                                       <div><span class="sub">Rs.${b.price}</span><i class="fa-solid fa-trash-can"></i></div>
                                       </div>`
                                      b.flag=true
                }
                remove()
                removewomen()
                removebrand()
                calcu()
                total()
            })
           })
        //    not.style="margin-left:-100%"
        })
    }

    //------------for woemen----------

    function addcartwomen(){
        var fav=document.querySelectorAll(".fav")

        fav.forEach((a)=>{
           a.addEventListener("click",()=>{
            

            var parentid=a.parentElement.id

            women.forEach((b)=>{
                if(parentid==b.id && b.flag!=true){  //!b.flag another way
                    var dynamic=document.querySelector("#dynamic")
                    dynamic.innerHTML+=`<div class="cont">
                                         <img src=${b.src} alt="">
                                       <div class="m">
                                         <h4>${b.shirt}</h4>
                                         <p>Rs.${b.price}</p>
                                         <input type="number" class="input">
                                        </div>
                                       <div><span class="sub">Rs.${b.price}</span><i class="fa-solid fa-trash-can"></i></div>
                                       </div>`
                                      b.flag=true
                }
                remove()
                removewomen()
                removebrand()
                calcu()
                total()
            })
           })
        })
    }

    function addcartbrand(){
        var fav=document.querySelectorAll(".fav")

        fav.forEach((a)=>{
           a.addEventListener("click",()=>{
            

            var parentid=a.parentElement.id

            brand.forEach((b)=>{
                if(parentid==b.id && b.flag!=true){  //!b.flag another way
                    var dynamic=document.querySelector("#dynamic")
                    dynamic.innerHTML+=`<div class="cont">
                                         <img src=${b.src} alt="">
                                       <div class="m">
                                         <h4>${b.shirt}</h4>
                                         <p>Rs.${b.price}</p>
                                         <input type="number" class="input">
                                        </div>
                                       <div><span class="sub">Rs.${b.price}</span><i class="fa-solid fa-trash-can"></i></div>
                                       </div>`
                                      b.flag=true
                }
                remove()
                removewomen()
                removebrand()
                calcu()
                total()
            })
           })
        })
    }



 function shopping(){
        cart()
        brandcart()
        oc()
        addcart()
        addcartbrand()

        womencart()
        addcartwomen()
        removewomen()
        removebrand()
    }
    shopping()


function remove(){
    var del=document.querySelectorAll(".fa-solid.fa-trash-can")
    del.forEach((c)=>{ 
        c.addEventListener("click",()=>{
            // c.parentElement.parentElement.remove()

            var parentelement=c.parentElement.parentElement
            var goa=parentelement.querySelector("h4")

            storage.forEach((j)=>{
                if(j.shirt==goa.innerHTML){

                    j.flag=false
                }
            })
            parentelement.remove()
            total()
            
        })
    })
}



//remove for women
function removewomen(){
    var del=document.querySelectorAll(".fa-solid.fa-trash-can")
    del.forEach((c)=>{ 
        c.addEventListener("click",()=>{
            // c.parentElement.parentElement.remove()

            var parentelement=c.parentElement.parentElement
            var goa=parentelement.querySelector("h4")

            women.forEach((j)=>{
                if(j.shirt==goa.innerHTML){

                    j.flag=false
                }
            })
            parentelement.remove()
            total()
            
        })
    })
}

function removebrand(){
    var del=document.querySelectorAll(".fa-solid.fa-trash-can")
    del.forEach((c)=>{ 
        c.addEventListener("click",()=>{
            // c.parentElement.parentElement.remove()

            var parentelement=c.parentElement.parentElement
            var goa=parentelement.querySelector("h4")

            brand.forEach((j)=>{
                if(j.shirt==goa.innerHTML){

                    j.flag=false
                }
            })
            parentelement.remove()
            total()
            
        })
    })
}
function calcu(){
   var input=document.querySelectorAll(".input")

   input.forEach((d)=>{
    d.addEventListener("input",()=>{
        if(d.value<1 || isNaN(d.value)){
            d.value=1
        }
        

        
        var parent=d.parentElement.parentElement
        var price=parent.querySelector("p").innerHTML.replace("Rs.","")
        var subtotal=d.value*price
        var sub=parent.querySelector(".sub")
        sub.innerHTML=`Rs.${subtotal}`
       
       
        total()


    })
   })
}


function total(){
         var Gtotal=document.querySelector("#total")
         var gsub=document.querySelectorAll(".sub")
         var temp=0

         gsub.forEach((f)=>{
            f=parseInt(f.innerHTML.replace("Rs.",""))
            temp +=f

         })
         if(gsub.length>0){
            Gtotal.innerHTML=`Total :Rs.${temp}`
         }
         else{
            Gtotal.innerHTML=`Total :`
         }

         
        
        count.innerHTML=gsub.length
}



       
        // var a=[1,2,3,4,5]




        // a.map((e)=>{
        //     console.log(e)
        // })

        // a.forEach((e)=>{
        //     e=e*2
        // })
        // console.log(a)
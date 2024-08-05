// var dark = document.getElementById("dark");

// dark.addEventListener("click", () => {
//     document.getElementById("d1").classList.toggle("add");
//     document.getElementById("d2").classList.toggle("add");
//     document.getElementById("d3").classList.toggle("add");
// document.querySelector(".i").classList.toggle("add1");
// });

var all=[


    {name:"Loan calculator",cat:"calulator",href:"https://fasih-nasirloan-calculator.netlify.app/",img:"img/36.png"},
 {name:"Case Converter",cat:"website",href:"https://fasih-nasircaseconverter.netlify.app/",img:"img/39.png"},
    {name:"Admin Pannel",cat:"website",href:"https://fasih-nasirjsproject27.netlify.app/",img:"img/32.png"},
    {name:"Keypress Game",cat:"game",href:"https://fasih-nasirkeypress.netlify.app/",img:"img/38.png"},
    {name:"tic-tac-toe",cat:"game",href:"https://fasih-nasirtictoe.netlify.app/",img:"img/281.png"},
    
        {name:"Wesbite",cat:"website",href:"https://fasihnasirdemo2.netlify.app/",img:"img/40.png"},
      {name:"Wesbite",cat:"website",href:"https://fasihnasirwi.netlify.app/",img:"img/41.png"},
    
    {name:"Budget calculator",cat:"calulator",href:"https://fasih-nasirbudgetcalculator.netlify.app/",img:"img/37.png"},
    {name:"Quiz App",cat:"website",href:"https://fasih-nasirjsproject24.netlify.app/",img:"img/24.png"},
    {name:"calculator",cat:"calulator",href:"https://fasih-nasirjsproject17.netlify.app/cal.html",img:"img/16.jpg"},
    {name:"Text Editor",cat:"website",href:"https://fasih-nasirjsproject20.netlify.app/",img:"img/19.jpg"},
    {name:"Dynamic Product",cat:"website",href:"https://fasih-nasirjsproject25.netlify.app/",img:"img/30.png"},
    {name:"Logistic",cat:"website",href:"https://wilogistic.netlify.app/",img:"img/29.png"},
    {name:"Password Checker",cat:"website",href:"https://fasih-nasirpasswordcheck.netlify.app/",img:"img/35.png"},
    {name:"Ballon Game",cat:"game",href:"https://fasih-nasirballongame.netlify.app/",img:"img/33.png"},
    {name:"Qr Code",cat:"calulator",href:"https://fasih-nasirqrcode.netlify.app/",img:"img/26.jpg"},
    {name:"Ecommerce Web",cat:"website",href:"https://fasih-nasirjsproject231.netlify.app/",img:"img/23.jpg"},
    {name:"Spot Finder",cat:"website",href:"https://fasih-nasirproject14.netlify.app/",img:"img/14.jpg"},
    {name:"W3 School",cat:"website",href:"https://fasih-nasirproject8.netlify.app/",img:"img/25.jpg"},
    {name:"Login/LogOut",cat:"website",href:"https://fasih-nasirjsproject23.netlify.app/",img:"img/22.jpg"}

]
// document.getElementById("len").innerHTML=`(${all.length+2})`
 fn(all)

 function fn(all){
    
    // console.log(all);
    // fn()
    var main=document.getElementById("main")
    main.innerHTML=``
    for(let i=0;i<all.length;i++){
        main.innerHTML+=`
        <div class="col-xl-3 col-6 tr">
        <img src="${all[i].img}" class="img-fluid col-11" alt="">
        <div class="col-lg-11 d-flex flex-xl-row flex-column justify-content-around flex-row align-items-center">
                    <h6 class="pt-2">${all[i].name}</h6>

                    <a  class="d-flex align-items-center justify-content-center flex-row" href="${all[i].href}" target="_blank"><i class="fa-solid fa-play"></i></a>
                    
                    </div>
                    </div>
                    `
                    
                }
            }
var sel=document.getElementById("sel")
var arr=[]
for(let i=0;i<all.length;i++){
   
if(arr.indexOf(all[i].cat) === -1){

    arr.push(all[i].cat)
}
}

for(let i=0;i<arr.length;i++){

    sel.innerHTML+=`
        <option value="${arr[i]}" >${arr[i]}</option>
    `
}
sel.addEventListener("change",function () {
var vl=sel.value
    if(sel.value ==="C"){
        fn(all);
    }
    else{
        var fil=[];
        for(let i=0;i<all.length;i++){
            // console.log(sel.value );
            if(all[i].cat === vl){
                fil.push(all[i])
                
           
            }
        }
       setTimeout(() => {
        
           fn(fil)
           
       }, 40);
        console.log(fil);

}

})










var searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
    var searchValue = searchInput.value.toLowerCase();
    var filtered = all.filter(function(project) {
        return project.name.toLowerCase().includes(searchValue) || project.cat.toLowerCase().includes(searchValue);
    });
    fn(filtered);
});



function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("message").value,
      message: document.getElementById("email").value,
    };
  if(params.name && params.email && params.message){
            document.getElementById("fill").innerHTML=``
    const serviceID = "service_8ohznev";
    const templateID = "template_i9hwpji";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert( params.name + " Your msg sent successfully!!")
  
      })
      .catch(err=>console.log(err));
    }
    else{
        document.getElementById("fill").innerHTML=`Fill Field First`
        // prompt("Fill All Fields")
    } 
  }

let SubBtn = document.getElementById("submit_id");
let selected_num = document.getElementById("selected_num");

// get Selected Num 
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five"); 




function selectedone() {
   one.style.backgroundColor="orange";
   one.style.color= "black";   

   selected_num.innerText = "1";
   
}
function selectedtwo() {
   two.style.backgroundColor="orange";
   two.style.color= "black";  
   one.style.backgroundColor="orange";
   one.style.color= "black"; 

   selected_num.innerText = "2";
}

function selectedthree(params) {
   one.style.backgroundColor="orange";
   one.style.color= "black"; 
   two.style.backgroundColor="orange";
   two.style.color= "black"; 
   three.style.backgroundColor= "orange";
   three.style.color="black";

   selected_num.innerText = "3";
}

function selectedfour() {
   one.style.backgroundColor="orange";
   one.style.color= "black"; 
   two.style.backgroundColor="orange";
   two.style.color= "black"; 
   three.style.backgroundColor= "orange";
   three.style.color="black";
   four.style.backgroundColor= "orange";
   four.style.color = "black";

   selected_num.innerText = "4";
}

function selectedfive() {
   one.style.backgroundColor="orange";
   one.style.color= "black"; 
   two.style.backgroundColor="orange";
   two.style.color= "black"; 
   three.style.backgroundColor= "orange";
   three.style.color="black";
   four.style.backgroundColor= "orange";
   four.style.color = "black";
   five.style.backgroundColor = "orange";
   five.style.color= "black";

   selected_num.innerText = "5";
}







SubBtn.addEventListener("click", function  () {
   
    let thankyou_section = document.getElementById("thankyou_section_id");
    thankyou_section.style.display = "block";

    let section_one_id = document.getElementById("section_one_id");
    section_one_id.style.display = "none";

    

})

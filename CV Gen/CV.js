const addWefield=()=>{
let newNode=document.createElement('textarea');
newNode.classList.add("form-control");
newNode.classList.add("wEfield");
newNode.classList.add("mt-3");
newNode.setAttribute('id' ,1);
let weObj=document.getElementById("wE_field");
let wEbtn=document.getElementById("WE");
weObj.insertBefore(newNode,wEbtn);
}

const DeleteWefield=()=>{
    let weObj=document.getElementById("1");
    let wEbtn=document.getElementById("delete");
    weObj.remove();
    }
//Acadami//
    const addAqfield=()=>{
        let newNode=document.createElement('textarea');
        newNode.classList.add("form-control");
        newNode.classList.add("aQ");
        newNode.classList.add("mt-3");
        newNode.setAttribute('id' ,1);
        let aqObj=document.getElementById("AQ_field");
        let aQbtn=document.getElementById("AQ");
        aqObj.insertBefore(newNode,aQbtn);
        }  
    const DeleteAqfield=()=>{
            let aqObj=document.getElementById("1");
            let wEbtn=document.getElementById("delete");
            aqObj.remove();
        }
 //Skill
 const addskillfield=()=>{
    let newNode=document.createElement('input');
    newNode.classList.add("form-control");
    newNode.classList.add("Sk");
    newNode.classList.add("mt-3");
    newNode.setAttribute('id' ,1);
    let skillObj=document.getElementById("Skill_field");
    let skillbtn=document.getElementById("skillbtn");
    skillObj.insertBefore(newNode,skillbtn);
    }  
const Deleteskillfield=()=>{
        let  skillObj=document.getElementById("1");
        let wEbtn=document.getElementById("delete");
        skillObj.remove();
    }
//Project
const addProjectfield=()=>{
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("p_f");
    newNode.classList.add("mt-3");
    newNode.setAttribute('id' ,1);
    let proObj=document.getElementById("project_field");
    let probtn=document.getElementById("projectbtn");
    proObj.insertBefore(newNode,probtn);
    }  
const DeleteProjectfield=()=>{
        let proObj=document.getElementById("1");
        let probtn=document.getElementById("delete");
        proObj.remove();
    }


// generete CV
  const CV_Generete=() =>{
    console.log("hi....Omi")  
    let name =document.getElementById("name").value;           
    let nameT =document.getElementById("nameT");
    nameT.innerHTML=name;
    
  document.getElementById("contactT").innerHTML=document.getElementById("contact").value;  
  document.getElementById("mailT").innerHTML=document.getElementById("mail").value;  
  document.getElementById("addressT").innerHTML=document.getElementById("address").value;

  document.getElementById("HRT").innerHTML=document.getElementById("HR").value;
  document.getElementById("GHT").innerHTML=document.getElementById("GH").value;
  document.getElementById("LDT").innerHTML=document.getElementById("LD").value;

  document.getElementById("objT").innerHTML=document.getElementById("obj").value;
  
  //WE
  let wes=document.getElementsByClassName("wEfield");
   let str1=" ";
   for(let e of wes) {
    str1 = str1 + `<li> ${e.value} </li>`;   
   }
   document.getElementById("wET").innerHTML=str1;
   //AQ
   let aqs=document.getElementsByClassName("aQ");
   let str2=" ";
   for(let e of aqs) {
    str2 = str2 + `<li> ${e.value} </li>`;   
   }
   document.getElementById("aQT").innerHTML=str2;
//skills
let sk=document.getElementsByClassName("Sk");
let str3=" ";
for(let e of sk) {
 str3 = str3 + `<li> ${e.value} </li>`;   
}
document.getElementById("skillT").innerHTML=str3;

//Language
let lg1= document.getElementById("Language1");

let lg2= document.getElementById("Language2");
let lg3= document.getElementById("Language3");


let lg= document.getElementById("LanguageT");
if(lg1.checked && lg2.checked && lg3.checked){
    lg.innerHTML=lg1.value+","+lg2.value+","+lg3.value;
}else if(lg1.checked && lg2.checked){
    lg.innerHTML=lg1.value+","+lg2.value;
}else if(lg1.checked && lg3.checked){
    lg.innerHTML=lg1.value+","+lg3.value;
}else if(lg2.checked && lg3.checked){
    lg.innerHTML=lg2.value+","+lg3.value;
}else if(lg1.checked ){
    lg.innerHTML=lg1.value;
    console.log(lg1);
}else if(lg2.checked ){
    lg.innerHTML=lg2.value;
}else if(lg3.checked ){
    lg.innerHTML=lg3.value;
}

//Upload Photos
let file_pic=document.getElementById("pic").files[0];
console.log(file_pic);

let redder=new FileReader();
redder.readAsDataURL(file_pic);

let pictemp=document.getElementById("picT");

redder.onloadend = function () {
    pictemp.src=redder.result;
}








document.getElementById("Cv-form").style.display='none';
document.getElementById("CV-temp").style.display='block';


  }
  
  //print CV
  const CV_print=()=>{
    window.print();
  }
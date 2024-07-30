 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

 const firebaseConfig = {
   apiKey: "AIzaSyByiyLTKA1V8OeAnXdFf9BteRN8LsD2Bgg",
   authDomain: "absolute-totem-400311.firebaseapp.com",
   databaseURL: "https://absolute-totem-400311-default-rtdb.firebaseio.com",
   projectId: "absolute-totem-400311",
   storageBucket: "absolute-totem-400311.appspot.com",
   messagingSenderId: "430382513434",
   appId: "1:430382513434:web:942ef616f04bab9d1b00a3",
   measurementId: "G-BXHYVQEKC3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
import { getDatabase, ref} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
const db = getDatabase();
const dbRef = ref(db);
window.onload = () => {
    var firstval;
    if(localStorage.getItem("value") && localStorage.getItem("value").length==64){
      if(!localStorage.getItem("value").includes("<")){
        //main contents goes here..
        firstval=localStorage.getItem("value");
        document.querySelector(".logout").addEventListener("click", ()=>{
          var boolean = confirm("Wanna Logout?");
          if(boolean==true){
            localStorage.clear();
            window.location.href = "/signup.html";
          }
         else{}
        });
        
       
    }
  else{
    localStorage.clear();
  }}
    //main cotent ends here..
    else if(localStorage.getItem("value")==null||localStorage.getItem("value")==undefined){
        window.location.href="/signup.html";
    }
   else if(localStorage.getItem("value").length!=64){
    localStorage.clear();
   }

//-------------------------
   window.addEventListener("storage", (e)=>{
    if(localStorage.getItem("value")){
    if(e.key == "value" && firstval!=localStorage.getItem("value")){
        localStorage.clear();
        window.location.href="/signup.html";
    }
  }
  });
  window.onbeforeunload=()=>{
    console.log(firstval);
    if(firstval!=localStorage.getItem("value")){
    localStorage.clear();
    window.location.href="/signup.html";
     
    }
  }
};
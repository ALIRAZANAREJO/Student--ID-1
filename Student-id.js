import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase,ref,get,set,child,update, remove } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCvFB82TeK-CZhpPwLuuj3V5FfXDpsW9B0",
    authDomain: "sign-up-and-in-7a325.firebaseapp.com",
    databaseURL: "https://sign-up-and-in-7a325-default-rtdb.firebaseio.com",
    projectId: "sign-up-and-in-7a325",
    storageBucket: "sign-up-and-in-7a325.appspot.com",
    messagingSenderId: "184191318961",
    appId: "1:184191318961:web:7eb3d6282a90282e34db90",
    measurementId: "G-SRMHJDFEDM"
  };
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = getDatabase();

var namebox = document.getElementById("Namebox");
var rollbox = document.getElementById("Rollbox");
var secbox = document.getElementById("Secbox");
var genbox = document.getElementById("Genbox");

var insBtn = document.getElementById("Insbtn");
var SelBtn = document.getElementById("Selbtn");
var UpdBtn = document.getElementById("Updbtn");
var delBtn = document.getElementById("Delbtn");

function InsertData(){
    set(ref(db,"TheStudents/" +rollbox.value),{
        NameofStd : namebox.value,
        RollNo    : rollbox.value,
        Section   : secbox.value,
        Gender   : genbox.value,
    })
    .then(()=>{
        alert("Data Store Successfully");
    })
    .catch((error)=>{
        alert("unsuccessfully,error"+error);
    });
}

// const dbRef = ref(getDatabase());

function SelectData(){
 const dbref = ref(db);

  get(child(dbref,"TheStudents/"+rollbox.value)).then((snapshot)=>{
    if(snapshot.exists()){
      namebox.value = snapshot.val().NameofStd;
      secbox.value  = snapshot.val().Section;
      genbox.value = snapshot.val().Gender;
    }
    else{
      alert("No Data Found");
    }
  })
  .catch((error)=>{
    alert("Unsuccessful,error"+error);
  });
}





function UpdateData(){
  update(ref(db,"TheStudents/"+rollbox.value),{
      NameofStd : namebox.value,
      Section   : secbox.value,
      Gender   : genbox.value
  })
  .then(()=>{
      alert("Data Update Successfully");
  })
  .catch((error)=>{
      alert("Unsuccessfully,error"+error);
  });
}



function DeleteData(){
  remove(ref(db,"TheStudents/"+rollbox.value))
  .then(()=>{
      alert("Data remove Successfully");
  })
  .catch((error)=>{
      alert("unsuccessfully,error"+error);
  })
}





insBtn.addEventListener('click',InsertData);
SelBtn.addEventListener('click',SelectData);
UpdBtn.addEventListener('click',UpdateData);
delBtn.addEventListener('click',DeleteData);



























;

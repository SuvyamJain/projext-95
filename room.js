function Logout() {
    window.location = "login_page.html"

 
}


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDDIFxJPpwGW66_UijZq7eaRGcQfuz_MMA",
    authDomain: "chattingapp-b5fd5.firebaseapp.com",
    databaseURL: "https://chattingapp-b5fd5-default-rtdb.firebaseio.com",
    projectId: "chattingapp-b5fd5",
    storageBucket: "chattingapp-b5fd5.appspot.com",
    messagingSenderId: "903879020755",
    appId: "1:903879020755:web:aaa2b2e06fd357aeaa8426",
    measurementId: "G-PBRX8C3XNY"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 username = localStorage.getItem("username")
 document.getElementById("usernsme").innerHTML = "WELCOME " + username + "!!!";
 function Make_room() {
   Room_names = document.getElementById("Room_name").value;
   firebase.database().ref("/").child(Room_names).update({ purpose : "adding room name" });
   localStorage.setItem("Room_name",  Room_names);
   window.location = "room.html";}

   
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "room.html"
    
}
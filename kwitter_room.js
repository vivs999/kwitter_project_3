var firebaseConfig = {
    apiKey: "AIzaSyAX8Ixn_BA7d7bmYfmNy8Tjb2nACBvxOs8",
    authDomain: "kwitter-project-59773.firebaseapp.com",
    databaseURL: "https://kwitter-project-59773-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-59773",
    storageBucket: "kwitter-project-59773.appspot.com",
    messagingSenderId: "634321840194",
    appId: "1:634321840194:web:0090b0b79b1c38f85fa5db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

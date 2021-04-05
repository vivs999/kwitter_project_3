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

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
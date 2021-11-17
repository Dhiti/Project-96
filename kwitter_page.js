var firebaseConfig = {
    apiKey: "AIzaSyBrlCsEQD_wCzQ-gQ52f8BCLg-jrrML7lE",
    authDomain: "let-schat-fb837.firebaseapp.com",
    databaseURL: "https://let-schat-fb837-default-rtdb.firebaseio.com",
    projectId: "let-schat-fb837",
    storageBucket: "let-schat-fb837.appspot.com",
    messagingSenderId: "464264005213",
    appId: "1:464264005213:web:90882ae90dbe56ac922fb4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("roomName");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message: msg,
         like: 0
      });
      document.getElementById("msg").value = "";
}

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

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

console.log("Room_names" + Room_names);
row = "<div class='room_name' id=" + Room_names +"onclcick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML+= row;

});});}
getData();

function addRoom()
{
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({purpose:"adding room name"});
    localStorage.setItem("roomName", roomname);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("roomName", name);
      
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("roomName");
      localStorage.removeItem("user_name");
      
      window.location = "index.html"; 
}

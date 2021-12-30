var firebaseConfig = {
      apiKey: "AIzaSyBPsI7zqR6S7swTlA_4OHv2KoOOq6QjkPk",
      authDomain: "kwitter-dfb95.firebaseapp.com",
      databaseURL: "https://kwitter-dfb95-default-rtdb.firebaseio.com",
      projectId: "kwitter-dfb95",
      storageBucket: "kwitter-dfb95.appspot.com",
      messagingSenderId: "988595751229",
      appId: "1:988595751229:web:9fcfd57b404f1cdc591d54"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout() {
      localStorageStorage.removeItem("user-name");
      localStorage.removeTem("room_name");
          window.location = "index.html"
}

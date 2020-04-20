// Initialize Firebase
var config = {
    apiKey: "AIzaSyCgn1qoPfYPqqqgWeKeeqUW8Tg1OQRVqYA",
    authDomain: "contactform-2d974.firebaseapp.com",
    databaseURL: "https://contactform-2d974.firebaseio.com",
    projectId: "contactform-2d974",
    storageBucket: "contactform-2d974.appspot.com",
    messagingSenderId: "247248926293"
};
firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('Messages');

//Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();

    //Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var country = getInputVal('country');
    var phone = getInputVal('phnnumber');
    var message = getInputVal('message');

    //Save messages
    saveMessage(name, email, country, phone, message);

    //sent alert
    document.querySelector('#messagesent').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('#messagesent').style.display = 'none';
    }, 5000);

    //Reset after sending
    document.getElementById('contactform').reset();
}

//Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, country, phnnumber, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: name,
        Email: email,
        Country: country,
        Phone: phnnumber,
        Message: message
    });
}
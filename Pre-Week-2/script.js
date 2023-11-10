let subjectLengthSubmit = false;
let messageLengthSubmit = false;
let subjectString, messageString, subjectLength, messageLength, link;

function trackerLength() {
    subjectString = document.getElementById("subject");
    messageString = document.getElementById("message");
    subjectLength = subjectString.value.length;
    messageLength = messageString.value.length;

    subjectLengthSubmit = subjectLength >= 5 && subjectLength <= 20;
    messageLengthSubmit = messageLength >= 20 && messageLength <= 540;
}

function submitForm() {
    event.preventDefault(); 
    if (messageLengthSubmit == true && subjectLengthSubmit == true) {
        mailtoLink();
        window.open(link);
    } else if (messageLengthSubmit == true && subjectLengthSubmit != true) {
        alert("The subject input hasn't met the required input length! (5-20 Characters)");
    } else if (messageLengthSubmit != true && subjectLengthSubmit == true) {
        alert("The message hasn't met the required input length! (20-540 Characters)");
    } else {
        alert("The subject and message input haven't met the required input length!");
    }
}

function mailtoLink() {
    link = "https://mail.google.com/mail/?view=cm&fs=1&to=javana.dz@gmail.com" + 
           "&su=" + encodeURIComponent(subjectString.value) + "&body=" + encodeURIComponent(messageString.value);
}

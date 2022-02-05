"use strict";

function logMessage(message) {
    console.log(message);
}

function logMessageWithDateAndHours(message) {
    let options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}
    console.log(new Date().toLocaleDateString("fr-FR", options) + ' : ' + message);
}
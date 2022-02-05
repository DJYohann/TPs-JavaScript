"use strict";

function loopLogColor() {
    for (let i = 0; i < 5; ++i) {
        if (i === 0) {
            logMessage(GREEN);
        } else {
            if (i % 2 === 0) {
                logMessage(RED);
            } else {
                logMessage(BLUE);
            }
        }
    }
}
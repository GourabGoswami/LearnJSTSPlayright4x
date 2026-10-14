let age = 26;
if (age >= 18) {
    console.log("You are eligible to vote");
    if (age >= 21) {
        console.log("You are eligible to drink");
    }
    else {
        console.log("You are not eligible to drink");
    }
}



let score = -1;
if (score > 100 || score < 0) {
    console.log("Invalid score");
}
else {
    if (score >= 90) {
        console.log("You got A grade");
    } else if (score > 80 && score <= 90) {
        console.log("You got B grade");
    } else if (score > 70 && score <= 80) {
        console.log("You got C grade");
    } else if (score > 60 && score <= 70) {
        console.log("You got D grade");
    } else if (score > 50 && score <= 60) {
        console.log("You got E grade");
    } else {
        console.log("You got F grade- Failed");
    }
}

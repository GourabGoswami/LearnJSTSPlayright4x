 /*diff between for, while and do while loop is that in for loop 
  we have initialisation, 
 condition and updation in one line whereas in while loop we have only condition and in do while loop the code inside the loop is executed first and then the condition is checked.*/

 //for loop - initialisation,condition,updation ICU
for (let _1 = 0; _1 < 10; ++_1) {
    console.log(_1);
}

for (let i = 0; i > 1; ++i) { //no output because condition is false
    console.log(i);
}

for (let a = 0; ; a++) { //infinite loop because condition is missing
    console.log(a);
}

for (let a = 0; a < 18; a++) { //loop will run until a is less than 18
    if (a > 15) {
        console.log("You are too old to go on the ride");
    }
    else {
        console.log("You can go on the ride");
    }
}

//while loop - condition is checked first and then the code inside the loop is executed
let b = 0;
while (b < 10) {
    console.log(b);
    b++;
}

let age = 7;
while(age<7) { //no output because condition is false
    console.log(age);
    age++;
}

let d  = 0;
while(d<7) { //while loop - condition is checked first and then the code inside the loop is executed
    
    d++;
}console.log(d);

//do while loop - code inside the loop is executed first and then the condition is checked

let c = 0;
do { //do while loop - code inside the loop is executed first and then the condition is checked
    console.log(c);
    c++;
}while (c < 10);

let s = 7;
do { //do while loop - code inside the loop is executed first and then the condition is checked
    console.log(s);
    s++;

    } while (s < 7); //output will be 7 because the code inside the loop is executed first and then the condition is checked       

   
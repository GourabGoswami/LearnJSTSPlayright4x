let age = 2;
let goa = (age >= 18) ? (age > 25 ? "drink" : "no drink") : "not goa";
console.log(goa);

let Statuscode = 404;
let category = Statuscode<300?"Success":
(Statuscode<400?"Redirect":
(Statuscode<500?"Client Error":"Server Error"));
console.log(category);

let temp=40;
let tempStatus=(temp>35?"Hot":
    (temp>25?"Warm":
        (temp>15?"Cool":"Cold")));
console.log(tempStatus);
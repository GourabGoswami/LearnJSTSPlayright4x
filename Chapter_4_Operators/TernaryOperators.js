let age =20;
let goOn = (age>=18) ? "You can go on the ride" : "You are too young to go on the ride";
console.log(goOn);

let actualStatusCode = 200;
let expectedStatusCode= 200;
let isMatch = (actualStatusCode === expectedStatusCode) ? "Status codes match" : "Status codes do not match";
console.log(isMatch);

let env = "Production";
let baseUrl=(env==="Staging") ? "https://staging.example.com" : (env==="Production") ? "https://example.com" : "https://dev.example.com";
console.log(baseUrl);

let responseTime =800;
let sla =1000;
let slaStatus = (responseTime <= sla) ? "SLA met" : "SLA not met";
console.log(`Response: ${responseTime}ms, SLA: ${sla}ms, Status: ${slaStatus}`);
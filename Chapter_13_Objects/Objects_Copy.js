let a = { status: "fail", s: "har", details: { reason: "timeout" } }; // Include a nested object to demonstrate deep copying.

let b = a; // This copies the reference, so b and a point to the same object.
b.status = "pass"; // Changing b also changes a because they refer to the same object.
console.log(a); // Print a with status "pass".

let c = { ...a }; // Spread makes a shallow copy: top-level fields are copied, but nested objects are still shared.
c.status = "ok"; // This top-level change affects c only.
c.details.reason = "network error"; // This nested change affects a too because c.details and a.details are shared.
console.log(a); // Print a with status "pass" and reason "network error".

let deepCopy = structuredClone(a); // Create a deep copy, including independent copies of nested objects.
deepCopy.status = "copied"; // Change the copied object's top-level property.
deepCopy.details.reason = "copied reason"; // Change the copied nested object without changing a.
console.log(a); // The original still has status "pass" and reason "network error".
console.log(deepCopy); // The deep copy has status "copied" and reason "copied reason".
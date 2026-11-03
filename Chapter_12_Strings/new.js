let str = "Hello World";
let newstr = str.replace(" ","");
console.log(newstr);
 let vowels =0;
        let consonants = 0;
        for(i=0; i<newstr.length; i++){
       if (newstr[i] =='a'|| newstr[i]=='e'|| newstr[i]=='i'|| newstr[i]=='o'|| newstr[i]=='u')
            {
                vowels++;
            }
            else {
                consonants++;
            }
        }
            console.log("Vowels:", vowels );
            console.log("Consonants:", consonants)

let s1 = "listen"
let s2 = "silent"
let s3 = s1.split('').sort().join('')
let s4 = s2.split('').sort().join('')
if (s3 == s4)
{
    console.log("Yes")

}
else
{
    console.log("No")
}
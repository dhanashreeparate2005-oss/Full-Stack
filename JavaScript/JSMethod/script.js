const str = "Dhanashree Parate";

console.log(str.charAt(3));
console.log(str.at(3));
console.log(str.at(-4));

const str2 = str.slice(2,6);
console.log(str2);

const S_Str = str.substring(0, 4);
console.log(S_Str);

const str3 = "ring ring"

console.log(str3.indexOf("ring"));
console.log(str3.indexOf("ring", 1));

console.log(str3.lastIndexOf("ring"));
console.log(str3.lastIndexOf("l"));

const email = "student@gmail.com";

console.log(email.includes("@"));
console.log(email.includes("hotmail"));

const d = Math.random();
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

function Greetings(name) {
  return function () {
    console.log("Welcome to web development class!!!", name);
  };
}

const greetShree = Greetings("Shree");
const greetAnand = Greetings("Anand");

greetShree();
greetAnand();
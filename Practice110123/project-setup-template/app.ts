// enum Role {
//     ADMIN = "ADMIN",
//     READ_ONLY = 21,
// };

// var obj = {
//   name: "ilya",
//   age: 24,
//   hobby: ["walking", "sleeping"],
//   favorite_hobby: ["sports", "cooking"],
//   role: Role.ADMIN
// };
// type product = {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// };
// var product = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["nice-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "Agreat carpet - almost brand-new!",
//   },
// };
// console.log(product.details.description);
// console.log(obj.name);

// obj.favorite_hobby.forEach((hobby) => {
//   console.log(hobby.toUpperCase());
// });

// let code: string | number;
// code = 1234;
// code = "AVB";
// console.log(code);

type Combinable = number | string;
type ConversonDescriptor = "as-num" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversonDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-num"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combinedAge = combine(30, 25, "as-num");
console.log(combinedAge);

let combinedStringAge = combine("30", "25", "as-num");
console.log(combinedStringAge);

let combinedNames = combine("James", 24, "as-string");
console.log(combinedNames);

type alias = string | number;
type objectAlias = { name: string; uid: alias };

const logDetails = (uid: alias, item: alias) => {
  console.log(`${item} has uid of ${uid}`);
};
const greet = (user: objectAlias) => {
  console.log(`${user.name} says hello`);
};
let user1: objectAlias = { name: "Ilya", uid: "3" };
logDetails("id", "item test");
greet(user1);

type User = { name: string } | string;
let u1: User = { name: "Max" };
u1 = "Michael";

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}
sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});

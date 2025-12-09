let obj = {
  name: "Harsh",
  age: 27,
};
function abcd(a, b, c) {
  console.log(this, a, b, c);
}
// abcd();
abcd.call(obj, 1, 2, 3);
abcd.apply(obj, [1, 2, 3]);
let fnc = abcd.bind(obj, 1, 2, 3);
fnc();

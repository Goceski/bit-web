function outer() {
  console.log("in outer");
}
{
  function inner() {
    console.log("in inner");
  }
  outer(); // works
  inner(); // works
}
outer(); // works
inner(); // throws
//
const sandwich = {
  bread: "italian",
  meat: "tuna",
  cheese: "swiss",
};
const { bread, meat } = sandwich;
console.log(bread, meat); // italian tuna

//
const sandwich = ["italian", "tuna", "swiss"];
const [bread, meat] = sandwich;
console.log(bread, meat); // italian tuna

let companies = ["Apple", "Microsoft", "Samsung"];
const [firstCompanies] = ["Apple", "Microsoft", "Samsung"];
console.log(firstCompanies); // Apple
console.log(lastCompanies); // Apple
// console.log(Company); // Apple

const [, , a] = ["Apple", "Microsoft", "Samsung"];
console.log(a); // Samsung

const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];
console.log(tahoe);
console.log(tahoe.join(", "));

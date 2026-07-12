var products = ["item 1", "item 2", "item 3"];
var prices = [100, 200, 300];

// object
var products = [
  {
   proname: "item 1",
    proprice: 100
  },
  {
    proname: "item 2",
    proprice: 200
  },
  {
    proname: "item 3",
    proprice: 300
  }
];products[1].price = 250;
//reed
console.log(products);
console.log(products[0].name);
console.log(products[0].price);


// Add
products.push({
  name: "item 4",
  price: 400
});
console.log(products);

//  Update (تعديل)
products[1].name = "item 1";
products[1].name = "item 2";
products[1].name = "item 3";
products[1].price = 100;
products[1].price = 200;
products[1].price = 300;
console.log(products);


//  Delete 
products.splice(2, 1);
console.log(products);
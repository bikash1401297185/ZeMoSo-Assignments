var fruits=[{name: "strawberry", quantity: "15", priceperunit: 10},
{name: "pineapple", quantity: "10", priceperunit: 40},
{name: "apple", quantity: "6", priceperunit: 20},
{name: "mango", quantity: "12", priceperunit: 50},
{name: "pear", quantity: "10", priceperunit: 80}]

for(var i=0;i<fruits.length;i++)
{
  var prod=fruits[i].priceperunit * fruits[i].quantity
  if(prod>250)
  {
  console.log(fruits[i].name)
  }
}

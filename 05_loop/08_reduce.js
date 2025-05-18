const myNum = [1, 2, 3, 4, 5];

// const myTotal=myNum.reduce(function (acc,curVal){
//     console.log(`acc: ${acc} , curVal:${curVal}`);
//     return acc + curVal;
// },0)
const myTotal = myNum.reduce((acc,cur)=> acc + cur,0)
console.log(myTotal)

const shoppingCart = [
    {
        itemname:"dsa",
        price: 2909
    },
    {
        itemname:"Web-3",
        price: 2564
    },
    {
        itemname:"python",
        price: 3000
    }
]

const total = shoppingCart.reduce((acc,item)=> acc+item.price,0);
console.log(total);

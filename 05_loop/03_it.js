// for of
let str ="hello world";
const arr  = [1, 2, 3, 4, 5];

for (const it of arr) {
   // console.log(it);
}

// for(const ch of str){
//     if(ch===' ') continue;
//    console.log(`Each char is ${ch}`);
// }

// Maps

const map = new Map();
map.set('IN',"India");
map.set('US',"United States");
map.set('UK',"United kingdome");
// console.log(map);
// console.log(map.get('IN')); // India
// map.clear(); // clear the map
// console.log(map.size); // 3
// console.log(map.has('IN'));// true
// console.log(map.keys()); // [Map Iterator] { 'IN', 'US', 'UK' }
// console.log(map.values()); // [Map Iterator] { 'India', 'United States', 'United kingdome' }
// console.log(map.entries()); // [Map Iterator] { [ 'IN', 'India' ], [ 'US', 'United States' ], [ 'UK', 'United kingdome' ] }
// map.delete('IN'); // delete the key
// console.log(map); // Map(2) { 'US' => 'United States', 'UK' => 'United kingdome' }

// for( const it of map){
//     console.log(it[0]); //key 
//     console.log(it[1]); //value
// }

for(const [key , val] of map){
    // console.log(`key is: ${key} and value is ${val}`);
    // console.log(key,":-",val);
}

const myObj = {
    'game1': 'Nfs',
    'game2': 'spiderman',
}

/*
for(const [m1 , m2] of myObj){
    console.log(m1,":-",m2);
}
    myObj is not iterable
*/


// map me forin loop nhi laga sakte hain.
const myobj ={
    js: "javascript",
    cpp: "c++",
    rb : "ruby",
    swift:"swift by apple",
}

// for in loop // can iterate objects
for (const key in myobj){
    // console.log(key);// for printing key
    // console.log(myobj[key]); // for printing value
}

const arr = ["js","cpp","rb","swift"];
for ( const it in arr){
    console.log(it); // keys of array.
    console.log(arr[it]); // keys of array.
}

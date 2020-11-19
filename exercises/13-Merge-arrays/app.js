var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = [];
    for(let i = 0; i < chunk_one.length ; i++){
        for (let j = 0; j < chunk_two.length ; j++){
          let arrays = firstArray[i].concat(secondArray[j])
           newArray.push(arrays)
             
            
        }
    }
    //your code here
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));
//i had put firstArray[i].concat(secondArray[i]), it returned the alot of names and repeated, why is that?

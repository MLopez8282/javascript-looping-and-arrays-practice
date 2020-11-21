let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
//const map1 = array1.map(x => x * 2);

function words(param){
    if(param === 0){
        return 'woko'
    }else{
        return 'wiki'
    }

}
console.log(theBools.map(words))
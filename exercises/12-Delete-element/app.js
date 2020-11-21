var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    let newList = [];
    for(let i = 0; i < people.length; i++){
    if(people[i] !== personName){
        newList.push(people[i]);
        
        //delete people[i];

    }
};
    return newList
	//your code here
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
//how come do not use .length -1?
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {
   
};
let newArray = par.split(' ')
let str = newArray.join('')

for(let i = 0; i < str.length; i++){
    let letter = str[i].toLowerCase();
   if(counts.hasOwnProperty(letter)){
       counts[letter] =+ 1;
       console.log(' i am here')
   }else{
       counts[letter] = 1;
   }

   
      

   
}
  console.log(counts)



// your code here


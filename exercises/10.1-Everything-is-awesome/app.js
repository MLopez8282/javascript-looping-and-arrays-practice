let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
        for(let i = 0; i < myArray.length; i++){
        if(item === '1'){
            return_array.push(myArray[i])
        }else if(item === '0'){
                    return_array.push(myArray[i])
        
                
                    }
            
                 return return_array;
            }
             }
    );
             
        console.log(ZerosToYahoos(myArray[i]));
            // magic goes inside these bracket
    

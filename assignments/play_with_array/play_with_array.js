function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   even=[];
   for(i of arr){
       if (i%2==0){
           even.push(i)
       }
   }
   return even
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   mul=[];
   for(num of arr){
       mul.push(num*n)
   }
   return mul
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   let out=[];
   for(let i=0;i<arr.length;i++){
       if(i != n){
           out.push(arr[i])
       }
   }
   return out
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}
//normal  Functions
const square = function(x)
{
    return x*x;
};

//ES6 function

const sq = (x) => x*x; 

console.log(sq(9));


/* or you can use it like this:

   const sq = (x) => {
       return x*x;
   }

*/


/*
const multiplier ={
  numbers : [1,6],
  mBy : 2,
  mutliply(){
    return this.numbers.map((n) => this.mBy*n);
  }
};
console.log(multiplier.mutliply());
*/

const sName = (x) => x.split(' ')[0];

console.log(sName('Ando Mindo'));
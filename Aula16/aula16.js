/*function delta(a,b, c){
    return (b*-1 + Math.sqrt(4*a*c));
}

function parimpar(n=0){
    if(n%2==0)
        return 'par';
    else    
        return 'ímpar';

}

console.log(`resultado: ${delta(3,4,5)}`);
console.log(parimpar(3));

*/

/*function fatorial(num) {
    let fat = 1;
    for (let i = num; i > 1; i--) {
        fat *= i;

    }
    return fat;
}
*/

//função recursiva 
function fatorial(n){
    if(n<=1)
        return 1;
    else    
        return n*fatorial(n-1);

}

console.log(fatorial(6));
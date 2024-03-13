
// NÚMEROS PRIMOS

    // Number.prototype.isPrime = function() {
    //         for( let i=2; i<this; i++ ) {
    //             if( this % i === 0 ) {            
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }

        const IsPrime = num => {
            for (let i = 2; i < this; i++){
                num % i === 0 ? false
                : true
            }
        } //CÓDIGO SINTETIZADO
        
        const { performance } = require('perf_hooks');
        const start = performance.now();
        let primeCount = 0;
        let num = 2; // por razones matemáticas, 1 se considera primo
        while( primeCount < 1e4 ) {
            if( IsPrime ) {
                primeCount++;
            }
            num++;
        }
        console.log(`The 10,000th prime number is ${num-1}`);
        console.log(`This took ${performance.now() - start} milliseconds to run`);

console.log('estoy corriendo Números primos') 


// FIBONACCI
    // recursive
    function rFib( n ) {
            if ( n < 2 ) {
                return n;
            }
            return rFib( n-1 ) + rFib( n-2 );
        }
        console.log(rFib(20))


//FORMA DE ESCRIBIR EL CÓDIGO MÁS SINTETIZADO
const rFib = n => n < 2 ? n : rFib(n-1) + rFib(n-2);
console.log(rFib(20))

    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    console.log(iFib(20))


console.log('estoy corriendo Fibonacci') 
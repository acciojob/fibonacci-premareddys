function fibonacci(num) {
// your code here
	let num1=0;
	let num2=1;
	let sum;
	for(let i=1;i<num;i++){
		sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
console.log("Fibonacci(1): " + fibonacci(1));
console.log("Fibonacci(5): " + fibonacci(5));


module.exports = fibonacci;

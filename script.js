function fibonacci(num) {
// your code here
	let num1=0;
	let num2=1;
	let sum=0;
	for(let i=2;i<num;++i){
		sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}

module.exports = fibonacci;

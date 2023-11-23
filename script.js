function fibonacci(num) {
// your code here
	let f1=0;
	let f2=1;
	let sum=0;
	for(let i=2;i<num;i++){
		sum = f1 +f2;
		return sum;
		f1=f2;
		f2=f3;
	}
}

module.exports = fibonacci;

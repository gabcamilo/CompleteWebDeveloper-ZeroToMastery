/*CLOSURES:
	1 - a function ran;
	2 - the function executed;
	3 - it's never going to be executed again BUT it's going to remember that there are references to those variables
	so the child scope always has access to the parent scope.
	*/ 
const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	} 
	return second;
}
const newFunc = first();
newFunc();


	/*CURRYING
	It's the process of converting a function that takes multiple arguments into a function that takes them one at a time
	*/
	const multiply = (a, b) => a * b;
	const carryedMultiply = (a) => (b) => a * b;
	//ex de uso:
	const multiplyby5 = carryedMultiply(5);


/*COMPOSE
Is the act of putting 2 functions together perform a 3th function with the output of one function as the input of the other
*/
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose (sum, sum)(5); //7

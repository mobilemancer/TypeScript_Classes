class LessSimpleDroid {
	private expression: string = "";

	constructor(expression: string){
		this.expression = expression;
	}
	
	public speak(): string {
		return this.expression;
	}
}

var lessSimpleTest = (function() {
	var droid = new LessSimpleDroid("Bloop-BOP!");
	console.log(droid.speak());
}) ();



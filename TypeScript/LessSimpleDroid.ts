class LessSimpleDroid {
	private _expression: string = "";

	constructor(expression: string){
		this._expression = expression;
	}
	
	public speak(): string {
		return this._expression;
	}
}

var lessSimpleTest = (function() {
	var droid = new LessSimpleDroid("Bloop-BOP!");
	console.log(droid.speak());
}) ();



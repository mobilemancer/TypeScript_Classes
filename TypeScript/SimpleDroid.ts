class SimpleDroid {
	private _expression: string = "Bee-BEEP!";
	
	public speak(): string {
		return this._expression;
	}
}

var droidTest = (function() {
	var droid = new SimpleDroid();
	console.log(droid.speak());
}) ();


class SimpleDroid {
	private expression: string = "Bee-BEEP!";

	public speak(): string {
		return this.expression;
	}
}

var droidTest = (function() {
	var droid = new SimpleDroid();
	console.log(droid.speak());
}) ();


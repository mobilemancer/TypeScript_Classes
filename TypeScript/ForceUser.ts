class ForceUser {
	constructor(public midichlorianCount: number, private lightSaberColor: string, test: string) {
	}

	public toString(): string {
		return "ForceUser has " + this.midichlorianCount + " midichlorians and wields a " + this.lightSaberColor + " lightsaber";
	}
}

var forceUserTest1 = (function() {
	var forceUser: ForceUser;
	forceUser = new ForceUser(10, "blue", "test");
	console.log(forceUser.toString());
})();

var forceUserTest2 = (function() {
	var forceUser: ForceUser;
	forceUser = new ForceUser(10, "blue", "test");
	console.log(forceUser.lightSaberColor);
})();


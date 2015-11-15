class ForceUser {
	private _midichlorians: number;

	constructor(midichlorianCount: number) {
		this._midichlorians = midichlorianCount;
	}

	public toString(): string {
		return "ForceUser has " + this._midichlorians + " midichlorians";
	};
}

var forceUserTest = (function() {
	var forceUser: ForceUser;
	forceUser = new ForceUser(10);
	console.log(forceUser.toString());
})();

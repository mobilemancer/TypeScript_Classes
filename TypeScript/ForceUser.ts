class ForceUser {
	private midichlorians: number;

	constructor(midichlorianCount: number) {
		this.midichlorians = midichlorianCount;
	}

	public toString(): string {
		return "ForceUser has " + this.midichlorians + " midichlorians";
	};
}

function test() {
	var forceUser: ForceUser;
	forceUser = new ForceUser(10);
	alert(forceUser.toString());
}

test();
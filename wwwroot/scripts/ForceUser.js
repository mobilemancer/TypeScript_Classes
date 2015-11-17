var ForceUser = (function () {
    function ForceUser(midichlorianCount, lightSaberColor, test) {
        this.midichlorianCount = midichlorianCount;
        this.lightSaberColor = lightSaberColor;
    }
    ForceUser.prototype.toString = function () {
        return "ForceUser has " + this.midichlorianCount + " midichlorians and wields a " + this.lightSaberColor + " lightsaber";
    };
    return ForceUser;
})();
var forceUserTest1 = (function () {
    var forceUser;
    forceUser = new ForceUser(10, "blue", "test");
    console.log(forceUser.toString());
})();
var forceUserTest2 = (function () {
    var forceUser;
    forceUser = new ForceUser(10, "blue", "test");
    console.log(forceUser.lightSaberColor);
})();

var ForceUser = (function () {
    function ForceUser(midichlorianCount) {
        this._midichlorians = midichlorianCount;
    }
    ForceUser.prototype.toString = function () {
        return "ForceUser has " + this._midichlorians + " midichlorians";
    };
    ;
    return ForceUser;
})();
var forceUserTest = (function () {
    var forceUser;
    forceUser = new ForceUser(10);
    console.log(forceUser.toString());
})();

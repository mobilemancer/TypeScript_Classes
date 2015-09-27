var ForceUser = (function () {
    function ForceUser(midichlorianCount) {
        this.midichlorians = midichlorianCount;
    }
    ForceUser.prototype.toString = function () {
        var _this = this;
        (function () { return "ForceUser has " + _this.midichlorians + " midichlorians"; });
    };
    ;
    return ForceUser;
})();
function test() {
    var forceUser;
    forceUser = new ForceUser(10);
    alert(forceUser.toString());
}
test();

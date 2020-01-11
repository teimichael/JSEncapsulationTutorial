// Plugin encapsulation
; (function (global, undefined) {
    "use strict"
    var _global;
    var plugin = {
        add: function (n1, n2) {
            return n1 + n2;
        }
    }

    _global = (function () { return this || (0, eval)('this'); }());
    !('plugin' in _global) && (_global.plugin = plugin);
}());

// Object encapsulation
function Plugin() {

    this.add = function (n1, n2) {
        return n1 + n2;
    };

}

// Static object encapsulation
var StaticPlugin = {

    add: function (n1, n2) {
        return n1 + n2;
    }

};

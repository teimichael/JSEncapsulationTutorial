// Plugin encapsulation
; (function (undefined) {
    "use strict"
    var _global;
    var plugin = {
        add: function (a, b) {
            return a + b;
        }
    }

    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = plugin;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return plugin; });
    } else {
        !('plugin' in _global) && (_global.plugin = plugin);
    }

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

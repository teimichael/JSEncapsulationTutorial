// Plugin call
with (plugin) {
    console.log(add(1, 1));
}
console.log(plugin.add(1, 1));

// Object call
var plugin = new Plugin();
console.log(plugin.add(1, 1));

// Static object
console.log(StaticPlugin.add(1, 1));
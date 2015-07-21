var candidates = require("./candidates-list");

// Make a hash for easier lookups by handle
candidates._twitterHandles = {};
candidates.forEach(function(c) {
    console.log(c);
    var iHandle = c.twitter.toLowerCase();
    this._twitterHandles[iHandle] = true;
}, candidates);


candidates.contains = function(handle) {
    var iHandle = handle.toLowerCase();
    return !!candidates._twitterHandles[iHandle];
};

module.exports = candidates;
var candidates = require("./candidates-list").map(function(s) { return s.toLowerCase(); });

// Make a hash for easier lookups by handle
candidates._twitterHandles = {};
candidates.forEach(function(c) {
    var iHandle = c.twitter.toLowerCase();
    this._twitterHandles[iHandle] = true;
}, candidates);


candidates.contains = function(handle) {
    var iHandle = handle.toLowerCase();
    return !!candidates._hash[iHandle];
};

module.exports = candidates;
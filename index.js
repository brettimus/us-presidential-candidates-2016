var candidates = require("./candidates-list");

// NEW
candidates.exists = function(query) {
    return candidates.some(function(c) {
        return queryCompare(query, c);
    });
};

candidates.where = function(query) {
    return candidates.filter(function(c) {
        return queryCompare(query, c);
    });
};

function queryCompare(query, candidate) {
    var isMatch;
    for (var prop in query) {
        isMatch = (lower(query[prop]) === lower(candidate[prop]));
        if (!isMatch) return false;
    }
    return true;
}

function lower(s) {
    if (s.toLowerCase) {
        return s.toLowerCase();
    }
    return s;
}

// LEGACY
candidates._twitterHandles = {};
candidates.forEach(function(c) {
    var iHandle = c.twitter.toLowerCase();
    this._twitterHandles[iHandle] = true;
}, candidates);


candidates.contains = function(handle) {
    var iHandle = handle.toLowerCase();
    return !!candidates._twitterHandles[iHandle];
};

module.exports = candidates;
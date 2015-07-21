(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var D = "democrat",
    R = "republican",
    I = "independent",
    S = "silly";

var candidates = [
    {
        name: "Hillary Clinton",
        affiliation: D,
        twitter: "HillaryClinton",
        website: "hillaryclinton.com",
    },

    {
        name: "Bernie Sanders",
        affiliation: D,
        twitter: "BernieSanders",
        website: "berniesanders.com",
    },

    {
        name: "Joe Biden",
        affiliation: D,
        twitter: "JoeBiden",
        website: "draftbiden2016",
    },

    {
        name: "Jim Webb",
        affiliation: D,
        twitter: "JimWebbUSA",
        website: "webb2016.com",
    },

    {
        name: "Martin O'Malley",
        affiliation: D,
        twitter: "MartinOMalley",
        website: "martinomalley.com",
    },

    {
        name: "Lincoln Chaffee",
        affiliation: D,
        twitter: "LincolnChafee",
        website: "chafee2016.com",
    },

    {
        name: "Scott Walker",
        affiliation: R,
        twitter: "ScottWalker",
        website: "scottwalker.com",
    },

    {
        name: "Donald Trump",
        affiliation: R,
        twitter: "realdonaldtrump",
        website: "donaldjtrump.com"
    },

    {
        name: "Jeb Bush",
        affiliation: R,
        twitter: "jebbush",
        website: "jeb2016.com"
    },

    {
        name: "Mike Huckabee",
        affiliation: R,
        twitter: "GovMikeHuckabee",
        website: "mikehuckabee.com",
    },

    {
        name: "Marco Rubio",
        affiliation: R,
        twitter: "MarcoRubio",
        website: "marcorubio.com",
    },

    {
        name: "Rand Paul",
        affiliation: R,
        twitter: "RandPaul",
        website: "randpaul.com",
    },

    {
        name: "Ben Carson",
        affiliation: R,
        twitter: "RealBenCarson",
        website: "bencarson.com",
    },

    {
        name: "Ted Cruz",
        affiliation: R,
        twitter: "TedCruz",
        website: "tedcruz.org",
    },

    {
        name: "Bobby Jindal",
        affiliation: R,
        twitter: "BobbyJindal",
        website: "bobbyjindal.com",
    },

    {
        name: "Rick Santorum",
        affiliation: R,
        twitter: "RickSantorum",
        website: "ricksantorum.com",
    },

    {
        name: "Rick Perry",
        affiliation: R,
        twitter: "GovernorPerry",
        website: "rickperry.org",
    },

    {
        name: "Chris Christie",
        affiliation: R,
        twitter: "ChrisChristie",
        website: "chrischristie.com",
    },

    {
        name: "Boots McShoes",
        affiliation: S,
        twitter: "rudeboot",
        website: "brettim.us",
    },

    {
        name: "God",
        affiliation: I,
        twitter: "TheTweetOfGod",
        website: "anactofgod.com",
    }
];

module.exports = candidates;
},{}],2:[function(require,module,exports){
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

if (window) window._candidates = candidates;

module.exports = candidates;
},{"./candidates-list":1}]},{},[2]);
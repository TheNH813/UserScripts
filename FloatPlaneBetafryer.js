// ==UserScript==
// @name        FloatPlane Betafryer
// @description	Makes sure you're using only the most Floaty of Planes
// @version		1.0
// @match       *://*.floatplane.com/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

if ( window.location.host != "beta.floatplane.com" ) {
    var floatPlane  = window.location.protocol + "//" + "beta.floatplane.com" + window.location.pathname + window.location.search + window.location.hash;
    window.location.replace(floatPlane);
}

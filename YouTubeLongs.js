// ==UserScript==
// @name        YouTube Longs
// @description	Gets rid of the useless neverending loop of shorts. (C) TheNH813 2022. License WTFPLV2
// @version		1.0
// @match       *://*.youtube.com/shorts/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

if ( window.location.pathname.split('/')[1] = 'shorts' ) {
    var ytLongs = window.location.pathname.split('/'); ytLongs[1]='watch?v='; ytLongs='/'+ytLongs[1]+ytLongs[2]
    window.location.replace (ytLongs);
}

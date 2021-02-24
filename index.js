// ==UserScript==
// @name         Temporary replacement document title
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @match        *://*
// @include      *://*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var title = 'hello world' // 自定义一个替换的title
    function setTabListener() {
      if (document && document.visibilityState) {
        document.addEventListener('visibilitychange', browserTabChange);
        window.onbeforeunload = () => {
          document.removeEventListener('visibilitychange', browserTabChange);
        }
      }
    }
    function browserTabChange() {
      if (document.visibilityState === 'visible') {
          document.title = window.originTitle
      } else if (document.visibilityState === 'hidden') {
        document.title = title
      }
    }
    window.onload = function(){
        window.originTitle = document.title
        setTabListener()
    }
})();

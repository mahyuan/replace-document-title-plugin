// ==UserScript==
// @name         Temporary replacement document title
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @include      *.zhihu.com/*
// @include      *.juejin.cn/*
// @include      *.weixin.qq.com/*
// @include      *.sdn.net/*
// @include      *.cnblogs.com*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var title = location.hostname
    function setTabListener() {
      if (document && document.visibilityState) {
        document.addEventListener('visibilitychange', browserTabChange);
        window.onbeforeunload = () => {
            window.originTitle = ''
          document.removeEventListener('visibilitychange', browserTabChange);
        }
      }
    }
    function browserTabChange() {
      if (document.visibilityState === 'visible') {
          if(window.originTitle) {
            document.title = window.originTitle
          }
      } else if (document.visibilityState === 'hidden') {
        document.title = title
      }
    }
    window.onload = function(){
        window.originTitle = document.title
        setTabListener()
    }
})();

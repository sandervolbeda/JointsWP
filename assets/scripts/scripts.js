function _interopRequireDefault(o){return o&&o.__esModule?o:{"default":o}}function _interopRequireDefault(o){return o&&o.__esModule?o:{"default":o}}function _interopRequireDefault(o){return o&&o.__esModule?o:{"default":o}}!function(o,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("whatInput",[],n):"object"==typeof exports?exports.whatInput=n():o.whatInput=n()}(this,function(){return function(o){function n(e){if(i[e])return i[e].exports;var t=i[e]={exports:{},id:e,loaded:!1};return o[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var i={};return n.m=o,n.c=i,n.p="",n(0)}([function(o,n){"use strict";o.exports=function(){var o=document.documentElement,n="initial",i=null,e=["input","select","textarea"],t=[16,17,18,91,93],u={keydown:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},r=[],a=!1,d=!1,f={x:null,y:null},_={2:"touch",3:"touch",4:"mouse"},l=function(){u[g()]="mouse",c(),p()},c=function(){window.PointerEvent?(o.addEventListener("pointerdown",s),o.addEventListener("pointermove",q)):window.MSPointerEvent?(o.addEventListener("MSPointerDown",s),o.addEventListener("MSPointerMove",q)):(o.addEventListener("mousedown",s),o.addEventListener("mousemove",q),"ontouchstart"in window&&(o.addEventListener("touchstart",v),o.addEventListener("touchend",v))),o.addEventListener(g(),q),o.addEventListener("keydown",s)},s=function(o){if(!a){var r=o.which,d=u[o.type];if("pointer"===d&&(d=y(o)),n!==d||i!==d){var f=document.activeElement,_=!1;f&&f.nodeName&&e.indexOf(f.nodeName.toLowerCase())===-1&&(_=!0),("touch"===d||"mouse"===d||"keyboard"===d&&_&&t.indexOf(r)===-1)&&(n=i=d,p())}}},p=function(){o.setAttribute("data-whatinput",n),o.setAttribute("data-whatintent",n),r.indexOf(n)===-1&&(r.push(n),o.className+=" whatinput-types-"+n)},q=function(n){if(f.x!==n.screenX||f.y!==n.screenY?(d=!1,f.x=n.screenX,f.y=n.screenY):d=!0,!a&&!d){var e=u[n.type];"pointer"===e&&(e=y(n)),i!==e&&(i=e,o.setAttribute("data-whatintent",i))}},v=function(o){"touchstart"===o.type?(a=!1,s(o)):a=!0},y=function(o){return"number"==typeof o.pointerType?_[o.pointerType]:"pen"===o.pointerType?"touch":o.pointerType},g=function(){var o=void 0;return o="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"};return"addEventListener"in window&&Array.prototype.indexOf&&l(),{ask:function(o){return"loose"===o?i:n},types:function(){return r}}}()}])});var _jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery),_foundation=require("../../foundation.core"),_foundationUtil=require("../../foundation.util.core"),_foundation2=require("../../foundation.plugin");_foundation.Foundation.addToJquery(_jquery2["default"]),_foundation.Foundation.rtl=_foundationUtil.rtl,_foundation.Foundation.GetYoDigits=_foundationUtil.GetYoDigits,_foundation.Foundation.transitionend=_foundationUtil.transitionend,_foundation.Foundation.Plugin=_foundation2.Plugin,window.Foundation=_foundation.Foundation;var _foundation=require("./foundation.core"),_foundationUtil=require("../../foundation.util.box");_foundation.Foundation.Box=_foundationUtil.Box;var _foundation=require("./foundation.core"),_foundationUtil=require("../../foundation.util.imageLoader");_foundation.Foundation.onImagesLoaded=_foundationUtil.onImagesLoaded;var _foundation=require("./foundation.core"),_foundationUtil=require("../../foundation.util.keyboard");_foundation.Foundation.Keyboard=_foundationUtil.Keyboard;var _foundation=require("./foundation.core"),_foundationUtil=require("../../foundation.util.mediaQuery");_foundation.Foundation.MediaQuery=_foundationUtil.MediaQuery;var _foundation=require("./foundation.core"),_foundationUtil=require("../../foundation.util.motion");_foundation.Foundation.Motion=_foundationUtil.Motion,_foundation.Foundation.Move=_foundationUtil.Move;var _foundation=require("./foundation.core"),_foundationUtil=require("../../foundation.util.nest");_foundation.Foundation.Nest=_foundationUtil.Nest;var _foundation=require("./foundation.core"),_foundationUtil=require("../../foundation.util.timer");_foundation.Foundation.Timer=_foundationUtil.Timer;var _jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery),_foundationUtil=require("../../foundation.util.touch");_foundationUtil.Touch.init(_jquery2["default"]),window.Foundation.Touch=_foundationUtil.Touch;var _foundation=require("./foundation.core"),_jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery),_foundationUtil=require("../../foundation.util.triggers");_foundationUtil.Triggers.init(_jquery2["default"],_foundation.Foundation);var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.abide");_foundation.Foundation.plugin(_foundation2.Abide,"Abide");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.accordion");_foundation.Foundation.plugin(_foundation2.Accordion,"Accordion");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.accordionMenu");_foundation.Foundation.plugin(_foundation2.AccordionMenu,"AccordionMenu");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.drilldown");_foundation.Foundation.plugin(_foundation2.Drilldown,"Drilldown");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.dropdown");_foundation.Foundation.plugin(_foundation2.Dropdown,"Dropdown");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.dropdownMenu");_foundation.Foundation.plugin(_foundation2.DropdownMenu,"DropdownMenu");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.equalizer");_foundation.Foundation.plugin(_foundation2.Equalizer,"Equalizer");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.interchange");_foundation.Foundation.plugin(_foundation2.Interchange,"Interchange");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.magellan");_foundation.Foundation.plugin(_foundation2.Magellan,"Magellan");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.offcanvas");_foundation.Foundation.plugin(_foundation2.OffCanvas,"OffCanvas");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.orbit");_foundation.Foundation.plugin(_foundation2.Orbit,"Orbit");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.responsiveMenu");_foundation.Foundation.plugin(_foundation2.ResponsiveMenu,"ResponsiveMenu");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.responsiveToggle");_foundation.Foundation.plugin(_foundation2.ResponsiveToggle,"ResponsiveToggle");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.reveal");_foundation.Foundation.plugin(_foundation2.Reveal,"Reveal");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.slider");_foundation.Foundation.plugin(_foundation2.Slider,"Slider");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.sticky");_foundation.Foundation.plugin(_foundation2.Sticky,"Sticky");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.tabs");_foundation.Foundation.plugin(_foundation2.Tabs,"Tabs");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.toggler");_foundation.Foundation.plugin(_foundation2.Toggler,"Toggler");var _foundation=require("./foundation.core"),_foundation2=require("../../foundation.tooltip");_foundation.Foundation.plugin(_foundation2.Tooltip,"Tooltip"),jQuery(document).foundation(),jQuery(document).ready(function(){jQuery(".accordion p:empty, .orbit p:empty").remove(),jQuery(".archive-grid .columns").last().addClass("end"),jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function(){jQuery(this).innerWidth()/jQuery(this).innerHeight()>1.5?jQuery(this).wrap("<div class='widescreen flex-video'/>"):jQuery(this).wrap("<div class='flex-video'/>")})});
//# sourceMappingURL=scripts.js.map

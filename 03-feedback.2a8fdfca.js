function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(E,t),l?g(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function E(){var e=p();if(j(e))return w(e);f=setTimeout(E,function(e){var n=t-(e-u);return s?v(n,i-(e-c)):n}(e))}function w(e){return f=void 0,m&&o?g(e):(o=r=void 0,a)}function O(){var e=p(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(E,t),g(u)}return void 0===f&&(f=setTimeout(E,t)),a}return t=y(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(p())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const g=document.querySelector(".feedback-form"),h=g.querySelectorAll("input, textarea");g.addEventListener("submit",(e=>{e.preventDefault();const t={};h.forEach((e=>{t[e.name]=e.value})),console.log(t),localStorage.removeItem("feedback-form-state"),h.forEach((e=>{e.value=""}))}));const j=e(t)((()=>{const e={};h.forEach((t=>{e[t.name]=t.value})),localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);g.addEventListener("input",j),(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);h.forEach((e=>{e.value=t[e.name]||""}))}})();
//# sourceMappingURL=03-feedback.2a8fdfca.js.map
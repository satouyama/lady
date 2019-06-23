/* Vivum JavaScript animation library
 * 
 * Includes Robert Penner's Easing Functions
 * http://www.robertpenner.com/easing/
 * 
 * Vivum Copyright (c) FelisPhasma 2014
 */
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return window.setTimeout(n,1e3/60)}}(),function(n,t){function e(n){return null==n?String(n):"object"==typeof n||"function"==typeof n?o[c.call(n)]||"object":typeof n}function r(r,o){function c(){if(!I){M++;var t=u[r.easing](20*M,r.from,r.to-r.from,r.duration);o(t),M!=h?n.setTimeout(c,20):r.complete(1*new Date-f)}}var s=["from","to"];for(i=0;i<s.length;i++)if("number"!=e(r[s[i]]))throw new Error("Property '"+s[i]+"' must be set and be a number.");"number"!=e(r.duration)&&(r.duration=a[r.duration]==t?a._def:a[r.duration]),r.easing=u[r.easing]==t?"linear":r.easing,r.complete=r.complete?r.complete:function(){};var f=1*new Date,h=Math.floor(r.duration/20),M=0,I=!1;return c(),{abort:function(){I=!0}}}var u={linear:function(n,t,e,r){return e*(n/r)+t},easeInQuad:function(n,t,e,r){return e*(n/=r)*n+t},easeOutQuad:function(n,t,e,r){return-e*(n/=r)*(n-2)+t},easeInOutQuad:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},easeInCubic:function(n,t,e,r){return e*(n/=r)*n*n+t},easeOutCubic:function(n,t,e,r){return e*((n=n/r-1)*n*n+1)+t},easeInOutCubic:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t},easeInQuart:function(n,t,e,r){return e*(n/=r)*n*n*n+t},easeOutQuart:function(n,t,e,r){return-e*((n=n/r-1)*n*n*n-1)+t},easeInOutQuart:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n*n+t:-e/2*((n-=2)*n*n*n-2)+t},easeInQuint:function(n,t,e,r){return e*(n/=r)*n*n*n*n+t},easeOutQuint:function(n,t,e,r){return e*((n=n/r-1)*n*n*n*n+1)+t},easeInOutQuint:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n*n*n+t:e/2*((n-=2)*n*n*n*n+2)+t},easeInSine:function(n,t,e,r){return-e*Math.cos(n/r*(Math.PI/2))+e+t},easeOutSine:function(n,t,e,r){return e*Math.sin(n/r*(Math.PI/2))+t},easeInOutSine:function(n,t,e,r){return-e/2*(Math.cos(Math.PI*n/r)-1)+t},easeInExpo:function(n,t,e,r){return 0==n?t:e*Math.pow(2,10*(n/r-1))+t},easeOutExpo:function(n,t,e,r){return n==r?t+e:e*(-Math.pow(2,-10*n/r)+1)+t},easeInOutExpo:function(n,t,e,r){return 0==n?t:n==r?t+e:(n/=r/2)<1?e/2*Math.pow(2,10*(n-1))+t:e/2*(-Math.pow(2,-10*--n)+2)+t},easeInCirc:function(n,t,e,r){return-e*(Math.sqrt(1-(n/=r)*n)-1)+t},easeOutCirc:function(n,t,e,r){return e*Math.sqrt(1-(n=n/r-1)*n)+t},easeInOutCirc:function(n,t,e,r){return(n/=r/2)<1?-e/2*(Math.sqrt(1-n*n)-1)+t:e/2*(Math.sqrt(1-(n-=2)*n)+1)+t},easeInElastic:function(n,t,e,r){var u=1.70158,a=0,o=e;if(0==n)return t;if(1==(n/=r))return t+e;if(a||(a=.3*r),o<Math.abs(e)){o=e;var u=a/4}else var u=a/(2*Math.PI)*Math.asin(e/o);return-(o*Math.pow(2,10*(n-=1))*Math.sin(2*(n*r-u)*Math.PI/a))+t},easeOutElastic:function(n,t,e,r){var u=1.70158,a=0,o=e;if(0==n)return t;if(1==(n/=r))return t+e;if(a||(a=.3*r),o<Math.abs(e)){o=e;var u=a/4}else var u=a/(2*Math.PI)*Math.asin(e/o);return o*Math.pow(2,-10*n)*Math.sin(2*(n*r-u)*Math.PI/a)+e+t},easeInOutElastic:function(n,t,e,r){var u=1.70158,a=0,o=e;if(0==n)return t;if(2==(n/=r/2))return t+e;if(a||(a=.3*r*1.5),o<Math.abs(e)){o=e;var u=a/4}else var u=a/(2*Math.PI)*Math.asin(e/o);return 1>n?-.5*o*Math.pow(2,10*(n-=1))*Math.sin(2*(n*r-u)*Math.PI/a)+t:o*Math.pow(2,-10*(n-=1))*Math.sin(2*(n*r-u)*Math.PI/a)*.5+e+t},easeInBack:function(n,e,r,u,a){return a==t&&(a=1.70158),r*(n/=u)*n*((a+1)*n-a)+e},easeOutBack:function(n,e,r,u,a){return a==t&&(a=1.70158),r*((n=n/u-1)*n*((a+1)*n+a)+1)+e},easeInOutBack:function(n,e,r,u,a){return a==t&&(a=1.70158),(n/=u/2)<1?r/2*n*n*(((a*=1.525)+1)*n-a)+e:r/2*((n-=2)*n*(((a*=1.525)+1)*n+a)+2)+e},easeInBounce:function(n,t,e,r){return e-u.easeOutBounce(r-n,0,e,r)+t},easeOutBounce:function(n,t,e,r){return(n/=r)<1/2.75?7.5625*e*n*n+t:2/2.75>n?e*(7.5625*(n-=1.5/2.75)*n+.75)+t:2.5/2.75>n?e*(7.5625*(n-=2.25/2.75)*n+.9375)+t:e*(7.5625*(n-=2.625/2.75)*n+.984375)+t},easeInOutBounce:function(n,t,e,r){return r/2>n?.5*u.easeInBounce(2*n,0,e,r)+t:.5*u.easeOutBounce(2*n-r,0,e,r)+.5*e+t}},a={slow:600,fast:200,_def:400},o={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object Error]":"error"},c=o.toString;n.vivum=r,n.vivumInfo={easings:function(){var n=[];for(j in u)n.push(j);return n},speeds:function(){return a}}}(window);
(function() {
  Element.prototype.addEvent = Object.prototype.addEvent = function(type, fn, useCapture) {
    if (this.attachEvent) {
      this['e' + type + fn] = fn;
      this[type + fn] = function() {
        this['e' + type + fn](window.event);
      };
      this.attachEvent('on' + type, this[type + fn]);
    } else {
      useCapture = useCapture ? useCapture : false;
      this.addEventListener(type, fn, useCapture);
    };
  };
  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  }
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = 0, len = this.length; i < len; i++) {
      if (this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  }
  var prompt = "> ",
    self = document.getElementById("terminal"),
    commands = {
      "gatinhos": function() {
        //kittens from: http://user.xmission.com/~emailbox/ascii_cats.htm
        var kittens = [
          ["   |\\      _,,,---,,_", "   /,`.-'`'    -.  ;-;;,_", "  |,4-  ) )-,_..;\\ (  `'-'", " '---''(_/--'  `-'\\_)  "],
          ["\\    /\\", " )  ( ')", "(  /  )", " \\(__)|]"],
          [" /\\___/\\", " )     (", "=\\     /=", "  )   (", " /     \\", " )     (", "/       \\", "\\       /", " \\__ __/", "     ))", "     //", "    ((", "     \\) "]
        ];
        logs = kittens[Math.floor(Math.random() * kittens.length)];
        for (var i = 0, l = logs.length; i < l; i++)
          setTimeout(function(n) {
            log(logs[n]);
          }, i * 100, i);
        setTimeout(function() {
          animatedLog("> Isso funcionou ? ", "#00FF00", "animatedIntroMessage3", function() {
            animatedLog("> Bem, Talvez a página esteja perdida para sempre", "#00FF00", "animatedIntroMessage4", function() {
              animatedLog("> se você encontrar o problema, contate o administrador", "#00FF00", "animatedIntroMessage5", function() {
                animatedLog("> Ele também gosta de gatinhos!", "#00FF00", "animatedIntroMessage6", function() {
                  newline();
                }, 400, 1000);
              }, 1400, 1000);
            }, 800, 1000);
          }, 500);
        }, ((logs.length + 1) * 100) + 1000);
      },
      "Lanna": function() {
        //kittens from: http://user.xmission.com/~emailbox/ascii_cats.htm
        var kittens = [
         
        ];
      
        setTimeout(function() {
          animatedLog("> Bem Vinda Lanna Vogel!", "#00FF00", "animatedIntroMessage3", function() {
            animatedLog("> Redirecionando...", "#00FF00", "animatedIntroMessage4", function() {
              animatedLog("> Estamos trabalhando no seu site... aguarde.", "#00FF00", "animatedIntroMessage5", function() {
                animatedLog(">Obrigado por aguardar...", "#00FF00", "animatedIntroMessage6", function() {
                  window.location.href = "/portfolio";
                  newline();
                }, 400, 1000);
              }, 1400, 1000);
            }, 800, 1000);
          }, 500);
        }, 1000);
      }
    };

  function newline() {
    var node = document.createElement("p");
    node.setAttribute("class", "input");
    node.innerHTML = '<span class=prompt>' + prompt + '</span><input />';
    self.appendChild(node);
    self.getElementsByTagName("input")[0].focus();
    self.getElementsByTagName("input")[0].addEvent("keydown", function(e) {
      if (e.keyCode == 13) {
        var elems = self.getElementsByTagName("*");
        for (var i = 0; i < elems.length; i++) {
          if (elems[i] == this) {
            var previous = elems[i - 1];
            previous.innerHTML = previous.innerHTML + this.value;
            this.parentElement.removeChild(this);
          };
        };
        handler(this.value)
      };
    }, false);
  };

  function log(txt, color, id) {
    var node = document.createElement("p");
    node.style.color = color || "#2E64FE";
    node.innerHTML = txt.toUpperCase();
    node.setAttribute("class", "response");
    if (id != undefined)
      node.setAttribute("id", id);
    self.appendChild(node);
  };

  function handler(input) {
    if (commands[input.split(" ")[0]] == undefined) {
      log('Command not found', "#FF0000");
      newline();
    } else {
      commands[input.split(" ")[0]](input.replace(new RegExp(input.split(" ")[0], ""), "").replace(/^\s+|\s+$/g, ''));
    }
    self.getElementsByTagName("input")[0].focus();
  };
  /*self.addEvent("click", function() {
    self.getElementsByTagName("input")[0].focus();
  }, false);*/
  function animatedLog(txt, color, id, callback, time, delay) {
    if (delay != undefined)
      window.setTimeout(__animate__, delay);
    else
      __animate__();

    function __animate__() {
      log("", color, id);
      vivum({
        from: 0,
        to: txt.length,
        duration: time ? time : 750,
        easing: "linear",
        complete: callback
      }, function(x) {
        document.getElementById(id).innerHTML = txt.slice(0, Math.ceil(x));
      });
    };
  }

  function init() {
    animatedLog(">Error 404: A página que você procura não foi encontrada, meow", "#00FF00", "animatedIntroMessage1", function() {
      window.setTimeout(function() {
        animatedLog("> Tente executar o comando 'gatinhos' e talvez isso conserte.", "#00FF00", "animatedIntroMessage2", function() {
          newline();
        });
      }, 500);
    });

  };
  init();
})();
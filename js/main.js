let main = (
    function(){
        let buttons = {};

        function inMobile(){
            if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i))
                return true;
            else
                return false;
        }
        function getButtons(){
            buttons.do = document.getElementById("do");
            buttons.re = document.getElementById("re");
            buttons.mi = document.getElementById("mi");
            buttons.fa = document.getElementById("fa");
            buttons.sol = document.getElementById("sol");
            buttons.la = document.getElementById("la");
            buttons.si = document.getElementById("si");
        }
        function init(){
            instrument.init();

            getButtons();

            let pressingEventName = 'mousedown';
            let notPressingEventName = 'mouseup';

            if (inMobile()){
                pressingEventName = 'touchstart';
                notPressingEventName = 'touchend';
            }

            buttons.do.addEventListener(pressingEventName, ev => {
                instrument.startNote('do'); 
                buttons.do.className="on";
            });

            buttons.do.addEventListener(notPressingEventName, ev => {
                instrument.stopNote('do');
                buttons.do.className="off";
            });
            
            buttons.re.addEventListener(pressingEventName, ev => {
                instrument.startNote('re'); 
                buttons.re.className="on";
            });
            
            buttons.re.addEventListener(notPressingEventName, ev => {
                instrument.stopNote('re');
                buttons.re.className="off";
            });

            buttons.mi.addEventListener(pressingEventName, ev => {
                instrument.startNote('mi'); 
                buttons.mi.className="on";
            });
            
            buttons.mi.addEventListener(notPressingEventName, ev => {
                instrument.stopNote('mi');
                buttons.mi.className="off";
            });

            buttons.fa.addEventListener(pressingEventName, ev => {
                instrument.startNote('fa'); 
                buttons.fa.className="on";
            });
            
            buttons.fa.addEventListener(notPressingEventName, ev => {
                instrument.stopNote('fa');
                buttons.fa.className="off";
            });

            
            buttons.sol.addEventListener(pressingEventName, ev => {
                instrument.startNote('sol'); 
                buttons.sol.className="on";
            });
            
            buttons.sol.addEventListener(notPressingEventName, ev => {
                instrument.stopNote('sol');
                buttons.sol.className="off";
            });

            buttons.la.addEventListener(pressingEventName, ev => {
                instrument.startNote('la'); 
                buttons.la.className="on";
            });
            
            buttons.la.addEventListener(notPressingEventName, ev => {
                instrument.stopNote('la');
                buttons.la.className="off";
            });

            buttons.si.addEventListener(pressingEventName, ev => {
                instrument.startNote('si'); 
                buttons.si.className="on";
            });
            
            buttons.si.addEventListener(notPressingEventName, ev => {
                instrument.stopNote('si');
                buttons.si.className="off";
            });
        }
        return {
            init: init
        }
    }
)();
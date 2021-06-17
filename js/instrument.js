var instrument = (
    function(){
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        let ctx = null;  
        let mainVolume = null;    
        let notes = {};
        let initialized = false;

        function init(){
            if (initialized)
                return;

            ctx = new AudioContext();  
            mainVolume = ctx.createGain();  

            mainVolume.gain.setValueAtTime(1, ctx.currentTime);
            mainVolume.connect(ctx.destination);

            notes.do = createOscillator(523.25);
            notes.re = createOscillator(587.33);
            notes.mi = createOscillator(659.25);
            notes.fa = createOscillator(698.46);
            notes.sol = createOscillator(783.99);
            notes.la = createOscillator(880.00);
            notes.si = createOscillator(987.77);
            initialized = true;
        }

        function startNote(note){
            init();
            notes[note].on();
        }

        function stopNote(note){
            notes[note].off();
        }

        function createOscillator(frequency){
            let oscillator = ctx.createOscillator();
            let gain = ctx.createGain();

            oscillator.type = 'sine';
            //oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(frequency, ctx.currentTime); 
            oscillator.connect(gain);
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.connect(mainVolume);
            oscillator.start();

            function on(){
                gain.gain.setValueAtTime(1, ctx.currentTime);
            }

            function off(){
                gain.gain.setValueAtTime(0, ctx.currentTime);
            }

            return {
                off: off,
                on: on
            };
        }

        return {
            init: init,
            startNote: startNote,
            stopNote: stopNote
        };
    }
)();
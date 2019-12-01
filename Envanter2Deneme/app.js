window.onload = function () {
    document.getElementById("btn_yukletara").addEventListener("click", function () {
        var j = 0;
        var alertsay = 0;
        var events=[];
        var prio = [];
        var bar = 0;
        if (bar == 0) {
            bar = 1;
            var elem = document.getElementById("myBar");
            var elemYukleme = document.getElementById("myBarYukleme");
            var elemTarama = document.getElementById("myBarTarama");
            var sayac = document.getElementById("sayacID");
            var width_Yukleme = 0;
            var width_Tarama = 0;
            var width = 0;
            var id = 0;
            id = setInterval(frame, 0);
            setTimeout(function () {
                for (var i = 0; i < 400; i++) {
                    j++;
                    events.push("E" + j);
                    prio.push(Math.floor((Math.random() * 3) + 1));
                    if (prio.length % 4 == 0) {
                            width_Yukleme++;
                            elemYukleme.style.width = width_Yukleme + "%";
                    }               
                }
            }, 3000);
            setTimeout(function () {
                for (var index = 2; index < prio.length;index++) {
                    if (prio[index] == prio[index - 1] && prio[index - 2] == prio[index]) {
                            alertsay++;
                            document.getElementById("alertno").innerHTML = document.getElementById("alertno").innerHTML + alertsay + "<br>";
                            document.getElementById("oncelik").innerHTML = document.getElementById("oncelik").innerHTML + prio[index] + "<br>";
                            document.getElementById("event").innerHTML = document.getElementById("event").innerHTML + events[index - 2] + "," + events[index - 1] + "," + events[index] + "<br>";
                    }
                    if ((index + 2) % 4 == 0) {
                        width_Tarama++;
                        elemTarama.style.width = width_Tarama + "%";
                    }
                }
            }, 5000);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    bar = 0;
                } else {
                    width = (width_Yukleme + width_Tarama)/2;
                    elem.style.width = width + "%";
                    sayac.innerHTML = width + "%";
                }
            }
            
        }
    });
}
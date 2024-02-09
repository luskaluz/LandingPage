document.addEventListener('DOMContentLoaded', function () {
    var text2 = document.getElementById('text2-presentation');
    if (text2) {
        var opacidade = 0;
        var incremento = 0.01;

        function fadeInOut() {
            opacidade += incremento;
            if (opacidade >= 1 || opacidade <= 0) {
                incremento = -incremento; // Inverte a direção ao atingir 0 ou 1
            }
            text2.style.opacity = opacidade.toFixed(2);
        }

        setInterval(fadeInOut, 10);
    }
});
var x = true;
AFRAME.registerComponent('audio', {
    // init: function() {
    //     console.log('Meu componente')
    // },

    // events:{
    //     click: function(evt) {
    //         this.criar()
    //     }
    // },

    // criar: function() {

    // }

    events: {
        click: function (e) {
            var mus_nu = document.getElementById('nu');
            var mus_mito = document.getElementById('mito');
            var mus_mem = document.getElementById('mem');
            var mus_cito = document.getElementById('cito');

            // seleciona o box
            var nucleo = document.getElementById('cleo');
            var mitocondria = document.getElementById('condria');
            var membrana = document.getElementById('brana');
            var citoplasma = document.getElementById('plasma');

            // lógica para ligar o som quando clicar no box
            // box.addEventListener('click', function () {
            //     console.log('click');
            //     buzzer.components.sound.playSound();
            // });

            if (x) {
                mitocondria.addEventListener('click', function () {
                    console.log('click condria');
                    mus_mito.components.sound.playSound();
                    x = false;
                });

                nucleo.addEventListener('click', function () {
                    console.log('click nu');
                    mus_nu.components.sound.playSound();
                    x = false;
                });

                membrana.addEventListener('click', function () {
                    console.log('click mem');
                    mus_mem.components.sound.playSound();
                    x = false;
                });

                citoplasma.addEventListener('click', function () {
                    console.log('click cito');
                    mus_cito.components.sound.playSound();
                    x = false;
                });


            } else {
                mitocondria.addEventListener('click', function () {
                    console.log('pause condria');
                    mus_mito.components.sound.pauseSound();
                    x = true;
                });

                nucleo.addEventListener('click', function () {
                    console.log('pause nu');
                    mus_nu.components.sound.pauseSound();
                    x = true;
                });

                membrana.addEventListener('click', function () {
                    console.log('pause mem');
                    mus_mem.components.sound.pauseSound();
                    x = true;
                });

                citoplasma.addEventListener('click', function () {
                    console.log('pause cito');
                    mus_cito.components.sound.pauseSound();
                    x = true;
                });

            }
        }
    }
})
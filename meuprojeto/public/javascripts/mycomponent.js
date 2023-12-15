var x = true;
AFRAME.registerComponent('mycomponent', {
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
            var mitocondria = document.getElementById('condria');
            var nucleo = document.getElementById('cleo');
            var membrana = document.getElementById('brana');
            var citoplasma = document.getElementById('plasma');

            //tem que fazer um switch case
            if (x) {
                mitocondria.addEventListener('click', function () {
                    const plano = document.createElement('a-plane');
                    plano.setAttribute('color', 'black');
                    plano.setAttribute('position', '0.728 0.670 3.215')
                    plano.setAttribute("scale", "1.344 0.500 1")
                    plano.setAttribute("id", "planoMitocondria")
                    this.el.sceneEl.appendChild(plano);

                    const text = document.createElement('a-text');
                    text.setAttribute('color', 'white');
                    text.setAttribute("value", "Mitocondria")
                    text.setAttribute('position', '0.1 0.670 3.215')
                    text.setAttribute("id", "letraMitocondria")
                    this.el.sceneEl.appendChild(text);
                    console.log("oi")
                    x = false;
                });

                nucleo.addEventListener('click', function () {
                    const plano = document.createElement('a-plane');
                    plano.setAttribute('color', 'black');
                    plano.setAttribute('position', '2 0.670 3.215')
                    plano.setAttribute("scale", "1.344 0.500 1")
                    plano.setAttribute("id", "planoNucleo")
                    this.el.sceneEl.appendChild(plano);

                    const text = document.createElement('a-text');
                    text.setAttribute('color', 'white');
                    text.setAttribute("value", "Mitocondria")
                    text.setAttribute('position', '1 0.670 3.215')
                    text.setAttribute("id", "letraNucleo")
                    this.el.sceneEl.appendChild(text);
                    console.log("oi")
                    x = false;
                });
            } else {
                mitocondria.addEventListener('click', function () {
                    x = true;
                    document.getElementById("planoMitocondria").remove();
                    document.getElementById("letraMitocondria").remove();
                    console.log("Remove")
                });


            }

        }
    }
})
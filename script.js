

let lightBox = document.getElementById("lightbox").getElementsByTagName('img');
let dataBsTarget = document.querySelectorAll(".zoom");
// get reference 
// listen to events
// find or select the img upon which the events was targeted 
// set or assign it to a variable (img)
// get the attribute of the img src and alt

dataBsTarget.forEach(function (item) {

        item.addEventListener('click', function () {
            let src = this.querySelector('img').getAttribute('src')
         let css = {
             'maxWidth': window.innerHeight - 100,
             'maxHeight': window.innerWidth - 100
         }
         let lightBox = document.getElementById("lightbox").querySelector('img');
         console.log('lightBox :>> ', lightBox);
         let m = lightBox.setAttribute('src', `${src}`)
        });
    });
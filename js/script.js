
let iconMenu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');
console.log(iconMenu)
iconMenu.addEventListener('click', function (event) {
   if (iconMenu.classList.contains("_active")) {
      iconMenu.classList.remove("_active")
      menuBody.classList.remove("_active")
   } else {
      iconMenu.classList.add("_active")
      menuBody.classList.add("_active")
   }

})


function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

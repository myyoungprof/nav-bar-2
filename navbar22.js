const bars = document.querySelector (".hamburger-menu")
console.log(bars)
const apper = document.querySelector('.container');

const bat = document.querySelector(".nav-red")

bars.addEventListener('click', showMenu) 

function showMenu() {
   apper.classList.toggle('leave')
   console.log(apper.classList)

   bars.classList.toggle('rotate');
}


bat.addEventListener ("click", function () {
    apper.classList.toggle('leave')

})
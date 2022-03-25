const nav = document.querySelector(".nav")
const navBar = document.querySelector('nav')
const bab1 = document.querySelector(".pertemuan1")
const bab2 = document.querySelector(".pertemuan2")
const listPertemuan1 = document.querySelectorAll(".bab1 .list-item a")
const listPertemuan2 = document.querySelectorAll(".bab2 .list-item a")


nav.addEventListener('click', () => {
    nav.classList.toggle('close-nav')
    if(nav.classList.contains("close-nav")){
        nav.src = 'close navbar.svg'
        navBar.addEventListener('click', () => {
            nav.classList.remove('close-nav')
            navBar.classList.remove("active-nav")
            if(nav.classList.contains("close-nav")){
                nav.src = 'close navbar.svg'
            }else{
                nav.src = 'nav-menu.svg'
            }
    
        })
    }else{
        nav.src = 'nav-menu.svg'
    }
    navBar.classList.toggle("active-nav")


})




bab1.innerHTML += pertemuanPertama()
bab2.innerHTML += pertemuanKedua()
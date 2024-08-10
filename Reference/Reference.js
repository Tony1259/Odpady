const closeButton = document.getElementById('close-button')
const menuButton= document.getElementById('menu-button')
const sideBar = document.getElementById('sidebar')



const showMenu = () => {
    if(sideBar.classList.contains('menuDisplayed')){
        sideBar.classList.remove('menuDisplayed')
        
    }else{
        sideBar.classList.add('menuDisplayed')
    }
}

closeButton.addEventListener('click', showMenu)
menuButton.addEventListener('click', showMenu)
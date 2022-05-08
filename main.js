window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
   showNavOnScroll()
   showBackToTopButtonOnScroll()
   changeBackToTopColor()
   activateMenuAtCurrentSection(home)
   activateMenuAtCurrentSection(services)
   activateMenuAtCurrentSection(contact)
   activateMenuAtCurrentSection(about)
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll-on')
    } else {
        navigation.classList.remove('scroll-on')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 300) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function changeBackToTopColor() {
    if(scrollY > 4500) {
        backToTopButton.classList.add('colorChange')
    } else {
        backToTopButton.classList.remove('colorChange')
    }
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
  
    // verificar se a seção passou da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  
    // verificar se a base está abaixo da linha alvo
  
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  
    // limites da seção
    const sectionBoundaries =
      sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
  
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

let itensReveal = {
    origin: 'top',
    distance: '30px',
    duration: 700,
}


ScrollReveal(itensReveal).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about .header,
    #about .content`)
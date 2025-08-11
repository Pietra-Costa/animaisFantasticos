
//anbimacao descricao e imagens

function addTab() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li")
    const tabContent = document.querySelectorAll(".js-tabcontent section")

    tabContent[0].classList.add("ativo")

    function activeTab(index) {
        tabContent.forEach((item) => {
            item.classList.remove("ativo")
        })

        tabContent[index].classList.add("ativo")
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", function () {
            activeTab(index)
        })
    })
}

addTab()

//accordion para faq

function accordion() {
    const ativo = 'ativo';
    const faqAccordion = document.querySelectorAll(".js-accordion dt")
    const faqAccordionDd = document.querySelectorAll(".js-accordion dd")

    faqAccordion[0].classList.add(ativo)
    faqAccordionDd[0].classList.add(ativo)

    function handleActiveClass() {
        this.classList.toggle(ativo)
        this.nextElementSibling.classList.toggle(ativo)
    }

    faqAccordion.forEach((item) => {
        item.addEventListener("click", handleActiveClass)
    })
}


accordion()

//scroll suave link interno

function scrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function handleScroll(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        //FORMA ALTERNATIVA
        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", handleScroll)
    })
}

scrollSuave()

//Animação

const sections = document.querySelectorAll('.js-scroll')

function animaScroll(){
    sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top - 500
        if (sectionTop < 0){
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', animaScroll)
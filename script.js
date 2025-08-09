
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

function accordion() {
    const faqAccordion = document.querySelectorAll(".js-accordion dt")
    const faqAccordionDd = document.querySelectorAll(".js-accordion dd")

    faqAccordion[0].classList.add("ativo")
    faqAccordionDd[0].classList.add("ativo")

    function handleActiveClass() {
        this.classList.toggle("ativo")
        this.nextElementSibling.classList.toggle("ativo")
    }

    faqAccordion.forEach((item) => {
        item.addEventListener("click", handleActiveClass)
    })
}


accordion()
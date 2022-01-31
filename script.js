const faqToggle = document.querySelectorAll('.faq-toggle')

faqToggle.forEach(item => {
    item.addEventListener('click', ()=> {
        item.parentNode.classList.toggle('active')
    })
})
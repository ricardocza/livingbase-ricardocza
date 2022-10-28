import { renderNews } from "./renderNews.js"

export function filterButtons() {
    
    const buttons = document.querySelectorAll('button')
    let filterButtons = []
    buttons.forEach(button => {        
        if (button.dataset.type == 'filter') filterButtons.push(button) 
        
    })
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const currentButton = event.target
            if(!currentButton.classList.contains('brand')) {
                document.querySelector('.brand').classList.remove('brand')
                currentButton.classList.add('brand')
                localStorage.setItem('@currentFilter', currentButton.innerText)
                const allNews = JSON.parse(localStorage.getItem('@renderedList'))
                const filteredNews = allNews.filter(element =>  element.category == currentButton.innerText)
                document.querySelector('.post-list').innerHTML = ''
                console.log(filteredNews)
                
                if(currentButton.innerText !== "Todos") {
                    renderNews(filteredNews)
                } else {
                    renderNews(allNews)
                }

            }
        })
    })
}
import { checkLocalStorage } from "../../scripts/checkLocalStorage.js";
import { filterButtons } from "../../scripts/filter.js";
import { renderNews } from "../../scripts/renderNews.js";
import { fetchNews } from "../../scripts/requisitions.js";
let currentPage = 0
let nextPage = 0
checkLocalStorage()

const observer = new IntersectionObserver(async entries => {
    const filter = localStorage.getItem('@currentFilter')
    if(entries[0].isIntersecting && filter == 'Todos') {
        renderCurrentPage()
    }
})
const footerElement = document.querySelector('.bg-footer')
observer.observe(footerElement)

async function renderCurrentPage() {
    const objArray = await fetchNews(nextPage)
    nextPage = objArray.nextPage
    if(nextPage > currentPage) {
        let currentLocalStorageList = JSON.parse(localStorage.getItem('@renderedList'))
        const newsArray = objArray.news

        newsArray.forEach(element => currentLocalStorageList.push(element))
        localStorage.setItem('@renderedList', JSON.stringify(currentLocalStorageList))
        currentPage++

        return renderNews(newsArray)
    }
}

filterButtons()
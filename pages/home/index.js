import { renderNews } from "../../scripts/renderNews.js";
import { fetchNews } from "../../scripts/requisitions.js";
let currentPage = 0
let nextPage = null

const observer = new IntersectionObserver(async entries => {
    if(entries[0].isIntersecting) {
        renderCurrentPage()
    }
})
const footerElement = document.querySelector('.bg-footer')
observer.observe(footerElement)

async function renderCurrentPage() {
    const newsArray = await fetchNews(currentPage)
    let nextPage = newsArray.nextPage
    if(nextPage > currentPage) {
        currentPage++
        return renderNews(newsArray)
    }
}

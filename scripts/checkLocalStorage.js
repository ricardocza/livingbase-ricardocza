import { renderNews } from "./renderNews.js"

export function checkLocalStorage() {
    localStorage.setItem('@currentFilter', 'Todos')        
    localStorage.setItem('@renderedList', '[]')
    // if(!localStorage.getItem('@renderedList')) localStorage.setItem('@renderedList', '[]')
    // else {
    //     const news = localStorage.getItem('@renderedList')
    //     renderNews(news)
    // }


}
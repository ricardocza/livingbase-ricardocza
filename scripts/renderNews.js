import { fetchNewById } from "./requisitions.js"

export async function renderNews(news) {
    const newsList = document.querySelector('.post-list')
    if(news){
         await news.forEach(element => {
            newsList.insertAdjacentHTML('beforeend', `            
            <li data-category=${element.category} id="newId-${element.id}" class="flex flex-column  gap24">
            <figure>
                <img src="${element.image}" alt="">
            </figure>
            <section class="description flex flex-column justify-space-between gap16">
                <h3>${element.title}</h3>
                <p>Invite as many collaborators as you’d like. They can register as team members or join as guests – no registration required.</p>
                
            </section>
        </li>`)    
            const desc = document.querySelector(`#newId-${element.id}`)
            const button = document.createElement('button')
            button.classList = 'post-link'
            button.innerText = 'Acessar conteúdo'
            button.addEventListener('click', async (event) => {
                let bulletinID = event.target.closest('li').id.substring(6)
                const currentNew = await fetchNewById(bulletinID)
                localStorage.setItem('@currentPost', JSON.stringify(currentNew))
                window.location.replace('./pages/post/index.html')
            })
            desc.children[1].append(button)
        })
    }
   
}
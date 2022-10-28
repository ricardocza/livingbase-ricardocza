export function renderCurrentPost(currentPost) {
    const main = document.querySelector('main')
    main.insertAdjacentHTML('beforeend', `
    <figure>
        <img src="${currentPost.image}" alt="">
    </figure>
    <div class="post-content">
        <p>${currentPost.content}</p>
    </div>
    `)

    const postTitle = document.querySelector('.post-title')
    postTitle.innerText = currentPost.title
}


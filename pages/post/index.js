import { renderCurrentPost } from "../../scripts/renderPost.js";
const post = JSON.parse(localStorage.getItem('@currentPost'))
renderCurrentPost(post)

const postCategory = post.category
const filterButtons = [...document.querySelectorAll('button')]
const indexButton = filterButtons.findIndex(element => element.innerText == postCategory)
filterButtons[indexButton].classList.add('brand')

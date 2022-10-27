export async function fetchNews(currentPage) {
    const baseURL = 'https://m2-api-living.herokuapp.com/news?page='
    
    const newsJson = await fetch(`${baseURL}${currentPage}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const objNews = await newsJson.json()
    return objNews
}

export async function fetchNewById(ID) {
    const baseURL = 'https://m2-api-living.herokuapp.com/news/'

    const currentNew = await fetch(`${baseURL}${ID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await currentNew.json()
    
}
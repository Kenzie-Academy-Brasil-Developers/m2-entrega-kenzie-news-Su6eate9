async function getNews(){
    const apiResponse = await fetch("https://kenzie-news-api.herokuapp.com/api/news").then(resp => resp.json())
    return apiResponse
}
const apiProducts = await getNews()

class createCards{
    static async cards(){
        const main = document.querySelector(".main__content")
        const sectionPrime = document.createElement("section")
        sectionPrime.classList.add("main__image")
        const sectionNews  = document.createElement("section") 
        sectionNews.classList.add("main__content-section")

        apiProducts.forEach((element,i) => {
            if(i == 0){
                const imgPrime = document.createElement("img")
                const divPrime = document.createElement("div")
                const typeDiv  = document.createElement("p")
                const titleDiv = document.createElement("h1")
                const descDiv  = document.createElement("p")
                const fontDiv  = document.createElement("span")

                imgPrime.src       = element.imagem
                imgPrime.alt       = element.titulo
                typeDiv.innerText  = element.categoria
                typeDiv.classList.add("category__content")
                titleDiv.innerText = element.titulo
                descDiv.innerText  = element.resumo
                fontDiv.innerText  = `Fonte: ${element.fonte}`

                divPrime.append(typeDiv,titleDiv,descDiv,fontDiv)
                sectionPrime.append(imgPrime,divPrime)
                main.appendChild(sectionPrime)
            }
            const article = document.createElement("article")
            article.classList.add("section__article")

            const divNews   = document.createElement("div")
            const pTypeNews = document.createElement("p")
            const titleNews = document.createElement("h2")
            const pDescNews = document.createElement("p")
            const fontNews  = document.createElement("span") 
            divNews.classList.add("div__section-article")
            pTypeNews.innerText = element.categoria
            pTypeNews.classList.add("category__content")
            titleNews.innerText = element.titulo
            pDescNews.innerText = element.resumo
            pDescNews.classList.add("article__paragraph")
            fontNews.innerText = `Fonte: ${element.fonte}`

            const imgDiv  = document.createElement("div")
            const imgNews = document.createElement("img")
            imgDiv.classList.add("div__section-img")
            imgNews.src = element.imagem
            imgNews.alt = element.titulo

            divNews.append(pTypeNews,titleNews,pDescNews,fontNews)
            imgDiv.append(imgNews)
            article.append(divNews,imgDiv)
            sectionNews.appendChild(article)
            main.appendChild(sectionNews)
        });
    }
}
createCards.cards()
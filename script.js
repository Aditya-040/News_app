const API_KEY="84bf2c6b9ea841518ce982afd4f68d20";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>fetchNews("India"));

async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    bindData(data.articles);
}
function bindData(articles) {
    const cardsContainer=document.getElementById('cards-container');
    const newsCardTemplate=documet.getElementById('template-news-card');
    cardsContainer.innerhtml="";
    articles.forEach((article) =>{
        if(!article.urlToImage) return;
        const cardClone =newsCardTemplate.content.cloneNode(true);
        cardsContainer.appendChild(cardClone);
    });
}

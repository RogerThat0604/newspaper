let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach(x => x.addEventListener("click", (event)=>getNewsByTopic(event) ));
// const getLatestNews = async ()=>{
//     let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`
//                     );
//     let header = new Headers({'x-api-key':'Ctari_xPv5omOPk3hrjJujeOUL3icaHxV2OV-VsLwPk'});
//     console.log(url);

//     let response = await fetch(url,{headers: header}); //ajax, http, fetch
//     let data = await response.json();
//     console.log(data);

//     news =data.articles;
//     console.log(news);

//     render();
// };

const getLatestNews = async ()=>{
    let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=sports&pageSize=10&apiKey=64bd66b165fa4d0799cc58d64f61e6d2`
                    );
    //let header = new Headers({'x-api-key':'Ctari_xPv5omOPk3hrjJujeOUL3icaHxV2OV-VsLwPk'});
    console.log(url);

    let response = await fetch(url); //ajax, http, fetch
    let data = await response.json();
    console.log(data);

    news =data.articles;
    console.log(news);

    render();
};

const getNewsByTopic = async (event) => {
    console.log("클릭됨", event.target.textContent);
    let topic = event.target.textContent.toLowerCase();
    let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=${topic}&pageSize=10&apiKey=64bd66b165fa4d0799cc58d64f61e6d2`);
    
    let response = await fetch(url); //ajax, http, fetch
    let data = await response.json();
    console.log("토픽뉴스 데이터",data);

    news =data.articles;
    console.log(news);

    render();

}

const render = () => {
    let newsHTML = '';
    newsHTML = news.map(item =>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.urlToImage}" alt="" srcset="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${item.description}
            </p>
            <div>
             ${item.source.name} * ${item.publishedAt}
            </div>
        </div>
    </div>`
    }).join('');

    console.log(newsHTML);

    document.getElementById("news-board").innerHTML = newsHTML;
}

 getLatestNews();
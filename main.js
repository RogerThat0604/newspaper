const getLatestNews = async ()=>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`
                    );
    let header = new Headers({'x-api-key':'Ctari_xPv5omOPk3hrjJujeOUL3icaHxV2OV-VsLwPk'});
    console.log(url);

    let response = await fetch(url,{headers: header}); //ajax, http, fetch
    let data = await response.json();
    console.log(data);

};

// getLatestNews();
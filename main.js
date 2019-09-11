const apiUrl = "https://cloud.iexapis.com/stable/stock/";
const api_key = '?token=pk_b31fd64bbe8c4e7190e5326714128eaf';
let body = document.body

let companyLogo = document.querySelector("#logo")

let name = document.querySelector("#name")
let website = document.querySelector("#website")
let description = document.querySelector("#description")

let stockToday = document.querySelector("#stock-today")
let maxStock = document.querySelector("#max-stock")
let minStock = document.querySelector("#min-stock")

let newsArticles = document.querySelector("#news-articles")

//grab api setup connection
//grab data connect it to html 
getCompanyLogo('dis');
async function getCompanyLogo(companySymbol) {
    console.log(companySymbol)
   try {
       let response = await axios.get(
           `${apiUrl}${companySymbol}/logo${api_key}`
       );
       console.log(response.data) 
       companyLogo.src = response.data.url
   } catch (error) {
       console.log(error.message);
   }
}

getCompanyInfo('dis');
async function getCompanyInfo(companySymbol) {
    console.log(companySymbol)
   try {
       let response = await axios.get(
           `${apiUrl}${companySymbol}/company${api_key}`
       );
       console.log(response.data)
       let companyInfo = response.data
       name.innerHTML = `${companyInfo.companyName} (${companySymbol})`
       website.href = `${companyInfo.website}`
       description.innerHTML = `Company Description: ${companyInfo.description}`
   } catch (error) {
       console.log(error.message);
   }
}

getStockInfo('dis');
async function getStockInfo(companySymbol) {
    console.log(companySymbol)
   try {
       let response = await axios.get(
           `${apiUrl}${companySymbol}/book${api_key}`
       );
       console.log(response.data)
       let stockInfo = response.data
       stockToday.innerHTML = `Today's stock price: ${stockInfo.quote.latestPrice}`
       maxStock.innerHTML = `52 Week High: ${stockInfo.quote.week52High}`
       minStock.innerHTML = `52 Week Low: ${stockInfo.quote.week52Low}`
   } catch (error) {
       console.log(error.message);
   }
}

getNews('dis');
async function getNews(companySymbol) {
    console.log(companySymbol)
   try {
       let response = await axios.get(
           `${apiUrl}${companySymbol}/news/last/5${api_key}`
       );
       console.log(response.data)
       let articles = response.data
        let articleSection = document.createElement('div')
        newsArticles.append(articleSection)
       articles.forEach(article => {
        let individualArticle = document.createElement('div')
        individualArticle.classList.add("articleBox")
        individualArticle.innerHTML = `
            <li><a href="${article.url}">${article.headline}</a></li>
            <li>${article.summary}</li>
        `
        let artIm = document.createElement('img')
        artIm.src = article.image
        artIm.classList.add("newPic")
        individualArticle.append(artIm)
        articleSection.appendChild(individualArticle);
       });
    } catch (error) {
       console.log(error.message);
   }
}


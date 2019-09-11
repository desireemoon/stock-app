const apiUrl = "https://cloud.iexapis.com/stable/stock/";
const api_key = '?token=pk_b31fd64bbe8c4e7190e5326714128eaf';
let body = document.body

let companyLogo = document.querySelector("img")

let name = document.querySelector("#name")
let website = document.querySelector("#website")
let description = document.querySelector("#description")

let stockToday = document.querySelector("#stock-today")
let maxStock = document.querySelector("#max-stock")
let minStock = document.querySelector("#min-stock")

let newsArticles = document.querySelector("#news-articles")

//grab api setup connection
//grab data connect it to html 

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
        console.log(companyInfo.main.temp)
   } catch (error) {
       console.log(error);
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
       stockToday.innerHTML = `Today's stock price:${stockInfo.quote.latestPrice}`
       maxStock.innerHTML = `Week ${stockInfo.quote.week52High}`
       minStock.innerHTML = `${stockInfo.quote.week52Low}`
        console.log(stockInfo.main.temp)
   } catch (error) {
       console.log(error);
   }
}

//SELECTORS
let refreshBtn = document.querySelector('.fa-refresh'),
searchBox = document.querySelector('#search-box'),
coinsContainer = document.querySelector('#coins-container'),
coinContainer = document.querySelectorAll('.coin');
//deleteBtns = document.querySelectorAll('.close')


// BINANCE ASYC() JSON API
async function getData () {
    const res = await fetch('https://api.binance.com/api/v3/ticker/price');
    const data = await res.json();

    for(let coin of data) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div style="color:#73BEC3" class="coin dark-mode">    
            <div class="coin-details">
                <h3>${coin.symbol}</h3>
                <p>${coin.price}</p>
            </div>
            <i class="fa fa-trash"></i> 
        </div>`
        coinsContainer.appendChild(newDiv);



        //DELETE COIN BOX
       const deleteBtn = newDiv.querySelector('.fa-trash');

       deleteBtn.addEventListener('click', (e) => {
        let coinBox = e.target.parentElement;

        coinBox.style.display = 'none';
       });



       //SEARCH OF THE COIN BOXES NAME
    searchBox.addEventListener('input', (e) => {

    let value = e.target.value.toUpperCase();

        let coinTitle = newDiv.querySelector('h3').innerText.toUpperCase();

        if (coinTitle.includes(value)) {
            newDiv.style.display = 'flex';
        } else {
            newDiv.style.display = 'none';
        }
  
});

    }

};
getData();


//REFRESH THE PAGE
refreshBtn.addEventListener('click', (e) => {

    refreshBtn.style.transform = 'rotate(180deg)';
    window.location.reload(true);

})

//DRAG AND DROP A COIN BOX































//BINANCE FETCH JSON API
// const fetchData = () => {
//    fetch('https://api.binance.com/api/v3/ticker/price')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
// };
    
// fetchData();


//    const postData = () => {
//        const data = fetchData ();

//        for(let coin of data) {

//         let newDiv = document.createElement('div');
    
//         //console.log(`${coin.symbol}, ${coin.price}`);
    
//         newDiv.innerHTML = `
//         <div class="coin">
//             <h3>${coin.symbol}</h3>
//             <p>${coin.price}</p>
//             <small>BINANCE</small>
//         </div>`;
    
//         coinsContainer.appendChild(newDiv);
//        }
//    } 


 

//BINANCE LIVE WEBSOCKET API
// const btcws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

// btcws.onmessage = (evt) => {
//     let tickers = JSON.parse(evt.data);
//     let btcName = tickers.s;
//     let btcPrice = tickers.p;

//     console.log(`${btcName}: ${btcPrice}`);
// }

// const ethws = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");

// ethws.onmessage = (evt) => {
//     let tickers = JSON.parse(evt.data);
//     let ethName = tickers.s;
//     let ethPrice = tickers.p;
    
//     console.log(`${ethName}: ${ethPrice}`);
// }
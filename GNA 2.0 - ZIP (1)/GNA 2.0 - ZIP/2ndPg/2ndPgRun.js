function timePrint() {
    const dateNow = new Date();
    document.getElementById("outputDate").innerHTML = 'Your Browser Date &amp; Time: ' + dateNow;
}




//API(s)

function inputTimesXAUPrice() {
    //getting live XAU price and multiplying with input number and printing it out....

    async function fetchPrice() {

        const res = await fetch('https://api.cryptonator.com/api/ticker/xaut-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output18').innerHTML = 'Current XAU (Gold) Price times Your Input Value: ' + price * document.getElementById('pg2Input').value + ' $';
    }, console.error)
}


function getLivePriceForBitcoinANDMultiplyWithInput() {


    //getting live BTC price and multiplying with input number and printing it out....
    async function fetchPrice() {

        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output2').innerHTML = 'Current BTC (Bitcoin) Price times Your Input Value: ' + price * document.getElementById('pg2Input').value + ' $';
    }, console.error)
}

function inputTimesLiveOriceDataOfEthereum() {


    //getting live ETHEREUM price and multiplying with input number and printing it out.....
    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/eth-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output3').innerHTML = 'Current ETH (Ethereum) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesLiveOriceDataOfCardano() {



    //getting live ADA price and multiplying with input number and printing it out....
    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/ada-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output4').innerHTML = 'Current ADA (Cardano) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesBCHPrice() {
    //getting live BCH price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/bch-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output5').innerHTML = 'Current BCH (Bitcoin Cash) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)


}

function inputTimesTronPrice() {
    //getting live TRX price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/trx-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output6').innerHTML = 'Current TRX (Tron) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}




function inputTimesSOLPrice() {
    //getting live SOL price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/sol-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output7').innerHTML = 'Current SOL (Solana) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}




function inputTimesXLMPrice() {
    //getting live XLM price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/xlm-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output8').innerHTML = 'Current XLM (Stellar) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}


function inputTimesXMRPrice() {
    //getting live XMR price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/xmr-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output9').innerHTML = 'Current XMR (Monero) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}


function inputTimesDOTPrice() {
    //getting live DOT price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/dot-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output10').innerHTML = 'Current DOT (Polkadot) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesLTCPrice() {
    //getting live LTC price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/ltc-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output11').innerHTML = 'Current LTC (Litecoin) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}


function inputTimesDOGEPrice() {
    //getting live LTC price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/doge-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output12').innerHTML = 'Current DOGE (Dogecoin) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesBNBPrice() {
    //getting live BNB price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/bnb-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output13').innerHTML = 'Current BNB (Binance Coin) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesAVAXPrice() {
    //getting live AVAX price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/avax-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output14').innerHTML = 'Current AVAX (Avalanche) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesEOSPrice() {
    //getting live EOS price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/eos-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output15').innerHTML = 'Current EOS (EOS.IO) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesNEOPrice() {
    //getting live NEO price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/neo-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output16').innerHTML = 'Current NEO (Neo) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesETCPrice() {
    //getting live ETC price and multiplying with input number and printing it out....

    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/ticker/etc-usd');
        const data = await res.json();
        return data.ticker.price
    }
    fetchPrice().then(price => {
        document.getElementById('output17').innerHTML = 'Current ETC (Ethereum Classic) Price times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesBTCPriceBitFinex() {
    //gets live BTC price data from BitFinex and multiplies with your given number...
    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
        const data = await res.json();
        return data.ticker.markets[0].price
    }
    fetchPrice().then(price => {
        document.getElementById('output19').innerHTML = 'Current BTC (Bitcoin) Price in <b>BitFinex</b>, times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesBTCPriceBitstamp() {
    //gets live BTC price data from Bitstamp and multiplies with your given number...
    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
        const data = await res.json();
        return data.ticker.markets[1].price
    }
    fetchPrice().then(price => {
        document.getElementById('output20').innerHTML = 'Current BTC (Bitcoin) Price in <b>Bitstamp</b>, times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesBTCPriceBittrex() {
    //gets live BTC price data from Bitstamp and multiplies with your given number...
    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
        const data = await res.json();
        return data.ticker.markets[2].price
    }
    fetchPrice().then(price => {
        document.getElementById('output21').innerHTML = 'Current BTC (Bitcoin) Price in <b>Bittrex</b>, times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function inputTimesBTCPriceCexio() {
    //gets live BTC price data from Cexio and multiplies with your given number...
    async function fetchPrice() {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
        const data = await res.json();
        return data.ticker.markets[3].price
    }
    fetchPrice().then(price => {
        document.getElementById('output22').innerHTML = 'Current BTC (Bitcoin) Price in <b>Cex.io</b>, times your Input Value: ' + price * document.getElementById('pg2Input').value + ' $'
    }, console.error)

}

function getLivePriceForBitcoinANDaddWithInput() {


    //getting live BTC price and adding with input number and printing it out....
    async function fetchPrice() {

        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        return data.ticker.price
    }
    var inputGet = document.getElementById('pg2Input').value;

    fetchPrice().then(price => {
        document.getElementById('output23').innerHTML = 'Current BTC (Bitcoin) Price PLUS(+) Your Input Value: ' + [parseFloat(inputGet) + parseFloat(price)] + ' $';
    }, console.error)
}


function getLivePriceForETHANDaddWithInput() {


    //getting live ETH price and adding with input number and printing it out....
    async function fetchPrice() {

        const res = await fetch('https://api.cryptonator.com/api/ticker/eth-usd');
        const data = await res.json();
        return data.ticker.price
    }
    var inputGet = document.getElementById('pg2Input').value;

    fetchPrice().then(price => {
        document.getElementById('output24').innerHTML = 'Current ETH (Ethereum) Price PLUS(+) Your Input Value: ' + [parseFloat(inputGet) + parseFloat(price)] + ' $';
    }, console.error)
}




function getLivePriceForSOLANDaddWithInput() {


    //getting live SOL price and adding with input number and printing it out....
    async function fetchPrice() {

        const res = await fetch('https://api.cryptonator.com/api/ticker/sol-usd');
        const data = await res.json();
        return data.ticker.price
    }
    var inputGet = document.getElementById('pg2Input').value;


    fetchPrice().then(price => {
        document.getElementById('output25').innerHTML = 'Current SOL (Solana) Price PLUS(+) Your Input Value: ' + [parseFloat(inputGet) + parseFloat(price)] + ' $';
    }, console.error)
}




//buttonClicked
function btnClick() {
    //print input as output
    var inputValue = document.getElementById('pg2Input').value;
    document.getElementById('output1').innerHTML = 'your input is: ' + parseFloat(inputValue);
    if (document.getElementById('output2').innerText.length < document.getElementById('output1').innerText.length) {
        document.getElementById('output2').innerHTML = '///could not connect to external server...Please refresh the page.';
    }
    inputTimesXAUPrice();
    getLivePriceForBitcoinANDMultiplyWithInput();
    inputTimesLiveOriceDataOfEthereum();
    inputTimesLiveOriceDataOfCardano();
    inputTimesTronPrice();
    inputTimesBCHPrice();
    inputTimesSOLPrice();
    inputTimesXLMPrice();
    inputTimesXMRPrice();
    inputTimesDOTPrice();
    inputTimesLTCPrice();
    inputTimesDOGEPrice();
    inputTimesBNBPrice();
    inputTimesAVAXPrice();
    inputTimesEOSPrice();
    inputTimesNEOPrice();
    inputTimesETCPrice();
    inputTimesBTCPriceBitFinex();
    inputTimesBTCPriceBitstamp();
    inputTimesBTCPriceBittrex();
    inputTimesBTCPriceCexio();
    getLivePriceForBitcoinANDaddWithInput();
    getLivePriceForETHANDaddWithInput();
    getLivePriceForSOLANDaddWithInput();




    //if input is not an integer give error:
  if(isNaN(inputValue) || inputValue.length == 0) {

    alert('input value is NOT integer');
  }

    if (isNaN(inputValue) || inputValue.length == 0) {

        giveERROR();        giveERROR();
        giveERROR();
        giveERROR();
        giveERROR();
        giveERROR();
        giveERROR();

setTimeout(giveERROR, 1000);
      setTimeout(giveERROR, 2000);

    }




    if (inputValue.includes('when')) {

        document.getElementById('warningOfQuestionEntered').innerHTML = 'Are you trying to ask me questions or what? Please only enter numbers I\'m not that smart\.';

    }



    if (inputValue.includes('where')) {

        document.getElementById('warningOfQuestionEntered').innerHTML = 'Are you trying to ask me questions or what? Please only enter numbers I\'m not that smart\.';

    }



    if (inputValue.includes('how')) {

        document.getElementById('warningOfQuestionEntered').innerHTML = 'Are you trying to ask me questions or what? Please only enter numbers I\'m not that smart\.';

    }


    if (!inputValue.includes('how') && !inputValue.includes('when') && !inputValue.includes('where')) {

        document.getElementById('warningOfQuestionEntered').innerHTML = '';

    }




}




function giveERROR() {


    document.getElementById('output1').innerHTML = 'ERROR';
    document.getElementById('output2').innerHTML = 'ERROR';
    document.getElementById('output3').innerHTML = 'ERROR';
    document.getElementById('output4').innerHTML = 'ERROR';
    document.getElementById('output5').innerHTML = 'ERROR';
    document.getElementById('output6').innerHTML = 'ERROR';
    document.getElementById('output7').innerHTML = 'ERROR';
    document.getElementById('output8').innerHTML = 'ERROR';
    document.getElementById('output9').innerHTML = 'ERROR';
    document.getElementById('output10').innerHTML = 'ERROR';
    document.getElementById('output11').innerHTML = 'ERROR';
    document.getElementById('output12').innerHTML = 'ERROR';
    document.getElementById('output13').innerHTML = 'ERROR';
    document.getElementById('output14').innerHTML = 'ERROR';
    document.getElementById('output15').innerHTML = 'ERROR';
    document.getElementById('output16').innerHTML = 'ERROR';
    document.getElementById('output17').innerHTML = 'ERROR';
    document.getElementById('output18').innerHTML = 'ERROR';
    document.getElementById('output19').innerHTML = 'ERROR';
    document.getElementById('output20').innerHTML = 'ERROR';
    document.getElementById('output21').innerHTML = 'ERROR';
    document.getElementById('output22').innerHTML = 'ERROR';
    document.getElementById('output23').innerHTML = 'ERROR';
    document.getElementById('output24').innerHTML = 'ERROR';
    document.getElementById('output25').innerHTML = 'ERROR';
}

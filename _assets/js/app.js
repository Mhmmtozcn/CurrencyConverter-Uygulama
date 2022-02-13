
const amountElement = document.querySelector(".converter__amount-input");
const selectElement = document.querySelector(".converter__amount-select");
const resultButton = document.querySelector(".converter__result-result");
const currency = new Currency("USD");
const currenciesContainer = document.querySelector(".currency-container");
const parities = [];


amountElement.addEventListener('input', exchangeCurrency);
selectElement.onchange = function () {
    currency.changeFirstCurrency(selectElement.options[selectElement.selectedIndex].textContent);
    exchangeCurrency();
}


function exchangeCurrency() {
    currency.changeAmount(amountElement.value)
    currency.exchange()
        .then(result => {
            resultButton.innerHTML = result.toFixed(2)
        })
        .catch(err => console.log(err))
}
exchangeCurrency();

currency.getRate()
    .then(response => {
        parities.push({ name: "USD", exp: "Amerikan Doları", img: "_assets/img/flag-usd.png", rate: response.USD });
        parities.push({ name: "EUR", exp: "Avrupa Para Birimi", img: "_assets/img/flag-eur.png", rate: response.EUR });
        parities.push({ name: "JPY", exp: "Japon Yeni", img: "_assets/img/flag-jpy.png", rate: response.JPY });
        parities.push({ name: "GBP", exp: "İngiliz Sterlini", img: "_assets/img/flag-gbp.png", rate: response.GBP });
        parities.push({ name: "DKK", exp: "Danimarka Kronu", img: "_assets/img/flag-dkk.png", rate: response.DKK });
        parities.push({ name: "NOK", exp: "Norveç Kronu", img: "_assets/img/flag-nok.png", rate: response.NOK });
        addCurrensiesDefault();
    })
    .catch(err => console.log(err))

function addCurrensiesDefault() {
    parities.forEach(parity => {
        let item = `
                <div class="currency">
                    <div class="currency__inner">
                        <div class="currency__inner-image">
                            <img src="${parity.img}" alt="">
                        </div>
                        <div class="currency__inner-name">
                            <span>${parity.name}</span>
                            <span>${parity.exp}</span>
                        </div>
                        <div class="currency__inner-buy">
                            <span>ALIŞ</span>
                            <span>${(1 / parity.rate).toFixed(4)}</span>
                        </div>
                        <div class="currency__inner-sell">
                            <span>SATIŞ</span>
                            <span>${(1 / parity.rate).toFixed(4)}</span>
                        </div>
                    </div>
                </div>
        `
        currenciesContainer.innerHTML += item;
    })
}

// addCurrensiesDefault();

class Currency {
    constructor(firtsCurrency) {
        this.firtsCurrency = firtsCurrency;
        this.changeUrl = "https://api.exchangerate.host/latest?base=";
        this.getUrl = "https://api.exchangerate.host/latest?base=TRY";
        this.amount = 1;
    }
    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.changeUrl + this.firtsCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = data.rates["TRY"];
                    const amount2 = Number(this.amount);
                    let total = parity * amount2;
                    resolve(total);
                })
                .catch(err => reject(err));
        });
    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firtsCurrency = newFirstCurrency;
    }
    getRate() {
        return new Promise((resolve, reject) => {
            fetch(this.getUrl)
                .then(response => response.json())
                .then(response => {
                    resolve(response.rates);
                })
                .catch(err => reject(err));
        });
    }
}

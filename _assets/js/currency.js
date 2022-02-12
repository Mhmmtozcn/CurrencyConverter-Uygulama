
class Currency {
    constructor(firtsCurrency) {
        this.firtsCurrency = firtsCurrency;
        this.changeUrl = "https://api.exchangerate.host/latest?base=";
        this.amounts = null;
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
}

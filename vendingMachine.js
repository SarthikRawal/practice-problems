function getChange(inserted, price) {
    insertedPaise = inserted * 100
    pricePaise = Math.round(price * 100)

    let change = insertedPaise - pricePaise

    const denominations = [1, 5, 10, 25, 50, 100]
    const changeArray = Array(denominations.length).fill(0);

    for (let i = denominations.length; i >= 0; i--) {
        if (change >= denominations[i]) {
            changeArray[i] = Math.floor(change / denominations[i]);
            change %= denominations[i];
        }
    }
    return changeArray;
}

const inserted = 8
const price = 2.99

const result = getChange(inserted, price)
console.log(result);



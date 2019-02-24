// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj={
        "H":50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    },obj2={},i=0;
    if(currency>10000)
    {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency<=0)
    {
        return {};
    }
    for(let key in obj)
    {
        i=~~(currency/obj[key]);
        if(i!==0)
        {
            currency-=(i*obj[key]);
            obj2[key]=i;
        }
    }
    return obj2;
}

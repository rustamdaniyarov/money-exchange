// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let res = {
	"H":0,
        "D":0,
        "Q":0,
        "N":0,
        "P":0
	}
	if (currency < 1){return {}}
	else if (currency > 10000){return {error: "You are rich, my friend! We don't have so much coins for exchange"}}
	else {
	res.H = Math.floor(currency/50);
	res.Q = Math.floor((currency - res.H * 50)/25);
	res.D = Math.floor((currency - (res.H * 50 + res.Q * 25))/10);
	res.N = Math.floor((currency - (res.H * 50 + res.Q * 25 + res.D * 10))/5);
	res.P = Math.floor((currency - (res.H * 50 + res.Q * 25 + res.D * 10 + res.N * 5))/1);
	}
	for (let i in res) {
        if (res[i]===0) {
            delete res[i];
	}
	return res;
}

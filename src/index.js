// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var t = "";
	if (currency < 1){}
	else if (currency > 10000){t = " error: 'You are rich, my friend! We don\'t have so much coins for exchange' "}
	else {
	var H = Math.floor(currency/50);
	var Q = Math.floor((currency - H * 50)/25);
	var D = Math.floor((currency - (H * 50 + Q * 25))/10);
	var N = Math.floor((currency - (H * 50 + Q * 25 + D * 10))/5);
	var P = Math.floor((currency - (H * 50 + Q * 25 + D * 10 + N * 5))/1);	
	if (H > 0) {
		t = t + "\"H\":" + H;
	}
	if (Q > 0 && t.length > 0) {
		t = t + "," + "\"Q\":" + Q;
	}else if (Q > 0 ){
		t = t + "\"Q\":" + Q;
	}
	if (D > 0 && t.length > 0) {
		t = t + "," + "\"D\":" + D;
	}else if (D > 0 ){
		t = t + "\"D\":" + D;
	}
	if (N > 0 && t.length > 0) {
		t = t + "," + "\"N\":" + N;
	}else if (N > 0 ){
		t = t + "\"N\":" + N;
	}
	if (P > 0 && t.length > 0) {
		t = t + "," + "\"P\":" + P;
	}else if (P > 0 ){
		t = t + "\"P\":" + P;
	}}
	//if (t.length>0)t = t + " ";
	t = "{" + t + "}";
	return t;
}

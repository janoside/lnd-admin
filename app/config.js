var coins = require("./coins.js");
var credentials = require("./credentials.js");

var currentCoin = process.env.LND_ADMIN_COIN || "BTC";

var cookieSecret = process.env.LND_ADMIN_COOKIE_SECRET || "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f";

[].forEach(function(item) {
	if (process.env[item] === undefined) {
		process.env[item] = "false";
	}
});

[].forEach(function(item) {
	if (process.env[item] === undefined) {
		process.env[item] = "true";
	}
});

module.exports = {
	cookieSecret: cookieSecret,
	coin: currentCoin,

	siteInfo: {
		title: "LND Admin",
		sourceUrl: "https://github.com/janoside/lnd-admin",
		demoSiteUrl: "https://lnd-admin.btc21.org"
	},

	credentials: credentials,

	site: {
		pubkeyMaxDisplayLength: 22,
		aliasMaxDisplayLength: 22,
		addressMaxDisplayLength: 22,
		networkAddressMaxDisplayLength: 22,
		txidMaxDisplayLength: 22,

		pageSizes:{
			invoices: 20,
			peers: 20
		}
	},

	donations:{
		btcpayserver:{
			host:"https://donate.btc21.org"
		}
	},

	blockExplorerUrl: process.env.LND_ADMIN_BLOCK_EXPLORER_URL || "https://explorer.btc21.org",

	headerDropdownLinks: {
		title:"Related Sites",
		links:[
			{name: "Bitcoin Explorer", url:"https://explorer.btc21.org", imgUrl:"/img/logo/btc.svg"},
			{name: "LND Admin", url:"https://lnd-admin.btc21.org", imgUrl:"/img/logo/lightning.svg"},
		]
	}
};

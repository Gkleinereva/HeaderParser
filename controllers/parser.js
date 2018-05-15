exports.parser = function(req, res) {
	var json = {};
	json.ipaddress = req._remoteAddress;
	json.language = req.headers["accept-language"].split(",")[0];
	
	var userAgent = req.headers["user-agent"];
	var userAgentAry = userAgent.split("(");
	json.software = userAgentAry[1].split(")")[0];
	res.json(json);
};


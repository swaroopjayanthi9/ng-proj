
var fs = require('fs');
var config;

try {
    var rawJson = fs.readFileSync('app/local/config.json', 'utf-8'),
        sanitizedJson = "",
        comment = false,
        string = false;

    //strip out comments in the json file.
    for(var ii=0;ii<rawJson.length;ii++) {
        if(!comment) {
            if(!string && rawJson[ii] === '/' && rawJson[ii+1] === '/') {
                comment = true;
            } else {
                if(rawJson[ii] === '"') {
                    string = !string;
                }
                sanitizedJson = sanitizedJson + rawJson[ii];
            }
        } else if(comment && rawJson[ii] === '\n') {
            comment = false;
            sanitizedJson = sanitizedJson + rawJson[ii];
        }
    }
    config = JSON.parse(sanitizedJson);
} catch(e) {
    console.info("No local config file, skipping");
}

var proxyPath = "/api/v1";

module.exports = {

    config: config,
    proxyPath: proxyPath + "/",
    middleware: function (connect, options) {
        if(config && config.proxy) {
            options.route = proxyPath;
            options.proxyRoot = config.cloudsystem_bll_url || "/";
            var proxy = new Proxy(options);
            return [proxy];
        } else {
            return [];
        }
    },
    flatten: function(p, c) {
        return p ? c : p.concat(c);
    }
};

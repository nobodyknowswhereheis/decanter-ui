//
//  Decanter-UI
//  Provide routing for ui components and pages

const HttpService = require("../http-service/httpService");
const decanterConfig = require("./config/decanter-config");
const path = require('path');

class DecanterUI extends HttpService {
    constructor(service_bus, class_name) {
        super(service_bus, class_name);
        var self = this;
        this.static_content = path.resolve('./static');
        this.registerRoute("GET", "/login_page", async (req, res, next) => {
            var fullpath = path.join(self.static_content, '/login.html');
            return res.status(200).sendFile(fullpath);
        }, true);

        // dummy page to test is authentication is working.
        this.registerRoute("GET", "/private_page", async (req, res, next) => {
            var fullpath = path.join(self.static_content, '/private.html');
            next();
            return res.status(200).sendFile(fullpath);
        }, false);
        this.attachRouter("/", self.router);
    }
    respondWith404(req, res, next) {
        var fullpath = path.join(this.static_content, '/404.html');
        return res.status(404).sendFile(fullpath);
    }

}
module.exports = DecanterUI;
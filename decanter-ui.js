//
//  Decanter-UI
//  Provide routing for ui components and pages

const HttpService = require("../http-service/httpService");
const decanterConfig = require("./config/decanter-config");
const path = require('path');

class DecanterUI extends HttpService {
    constructor(service_bus, class_name) {
        super(service_bus, class_name);
        this.static_content = path.resolve('./static');

    }
    respondWith404(req, res, next) {
        var fullpath = path.join(this.static_content, '/404.html');
        return res.status(404).sendFile(fullpath);
    }

}
module.exports = DecanterUI;
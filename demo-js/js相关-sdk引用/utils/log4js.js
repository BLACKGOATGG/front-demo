const log4js = require("log4js");
const fs   = require("fs");

log4js.configure({
    "appenders" : {
        "dateFile" : {
            "type" : "dateFile",
            "filename" : "logs/cheese",
            "alwaysIncludePattern" : true,
            "pattern" : ".yyyy-MM-dd.log",
            "compress" : true,
        },
        "console" : {
            "type" : "console"
        }
    },
    "categories" : {
        "default" : {
            "appenders" : [ "dateFile" ],
            "level" : "info"
        },
        "development" : {
            "appenders" : [ "console" ],
            "level" : "info" 
        }
    }
});

const categories = process.env.NODE_ENV;

module.exports = log4js.getLogger(categories);
'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1539416436680_3340';

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    };

    config.news2 = {
        serverUrl: 'https://httpbin.org/get?foo=bar3333'
    };

    // add your config here
    config.middleware = [
        'robot'
    ];

    config.robot = {
        ua: [
            /Baiduspider/i,
        ]
    };

    return config;
};

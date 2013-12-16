/**
 * Skype Web
 *
 * Copyright (c) 2013 Vyacheslav Slinko
 * Licensed under the MIT License
 */


function ajax(method, url, data, callback) {
    if (!callback) {
        callback = data;
        data = null;
    }

    if (!global.XMLHttpRequest) {
        return callback(null, {}, {});
    }

    var req = new XMLHttpRequest();

    req.open(method, url, true);

    req.setRequestHeader('Accept', 'application/json');
    req.setRequestHeader('Content-Type', 'application/json');

    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            try {
                callback(null, req, JSON.parse(req.responseText));
            } catch (err) {
                callback(err, req);
            }
        }
    };
    
    req.send(data ? JSON.stringify(data) : null);
}


module.exports = ajax;

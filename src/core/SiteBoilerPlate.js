/**
 * Skype Web
 *
 * Copyright (c) 2013 Vyacheslav Slinko
 * Licensed under the MIT License
 *
 * @jsx React.DOM
 */


var React = require('React');


var SiteBoilerPlate = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <title>Skype Web Client</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
});


module.exports = SiteBoilerPlate;

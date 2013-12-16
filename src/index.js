/**
 * Skype Web
 *
 * Copyright (c) 2013 Vyacheslav Slinko
 * Licensed under the MIT License
 *
 * @jsx React.DOM
 */


var SiteBoilerPlate = require('./core/SiteBoilerPlate');
var ChatsCollection = require('./elements/ChatsCollection/ChatsCollection');
var React = require('React');


var IndexPage = React.createClass({
    render: function() {
        return (
            <SiteBoilerPlate>
                <ChatsCollection />
            </SiteBoilerPlate>
        );
    }
});


module.exports = IndexPage;

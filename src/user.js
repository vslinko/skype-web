/**
 * Skype Web
 *
 * Copyright (c) 2013 Vyacheslav Slinko
 * Licensed under the MIT License
 *
 * @jsx React.DOM
 */


var SiteBoilerPlate = require('./core/SiteBoilerPlate');
var React = require('React');
var User = require('./elements/User/User');


var UserPage = React.createClass({
    getDefaultProps: function() {
        var userName;

        if (global.document) {
            userName = decodeURIComponent(document.location.hash.slice(1));
        }

        return {
            userName: userName
        };
    },

    render: function() {
        return (
            <SiteBoilerPlate>
                <User name={this.props.userName} />
            </SiteBoilerPlate>
        );
    }
});


module.exports = UserPage;

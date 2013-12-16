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
var Chat = require('./elements/Chat/Chat');


var ChatPage = React.createClass({
    getDefaultProps: function() {
        var chatName;

        if (global.document) {
            chatName = decodeURIComponent(document.location.hash.slice(1));
        }

        return {
            chatName: chatName
        };
    },

    render: function() {
        return (
            <SiteBoilerPlate>
                <Chat name={this.props.chatName} />
            </SiteBoilerPlate>
        );
    }
});


module.exports = ChatPage;

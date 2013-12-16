/**
 * Skype Web
 *
 * Copyright (c) 2013 Vyacheslav Slinko
 * Licensed under the MIT License
 *
 * @jsx React.DOM
 */


var React = require('React');
var ajax = require('../../util/ajax');


var ChatsCollection = React.createClass({
    getInitialState: function() {
        return {
            err: null,
            chats: []
        }
    },

    componentWillMount: function() {
        ajax('GET', '/chats/', function(err, res, chats) {
            this.setState({err: err, chats: chats});
        }.bind(this));
    },

    render: function() {
        if (this.state.err) {
            return <div />;
        }

        if (!this.state.chats.map || this.state.chats.length === 0) {
            return <div />;
        }

        var chats = this.state.chats.map(function(chat) {
            var url = '/chat.html#' + encodeURIComponent(chat.name);

            return (
                <li>
                    <a href={url}>{chat.topic || chat.friendlyName}</a>
                </li>
            );
        });

        return (
            <div>
                <h2>Chats</h2>
                <ul>
                    {chats}
                </ul>
            </div>
        );
    }
});


module.exports = ChatsCollection;

/**
 * Skype Web
 *
 * Copyright (c) 2013 Vyacheslav Slinko
 * Licensed under the MIT License
 *
 * @jsx React.DOM
 */


var ChatMembers = require('../ChatMembers/ChatMembers');
var React = require('React');
var ajax = require('../../util/ajax');


var Chat = React.createClass({
    getInitialState: function() {
        return {
            messageBody: '',
            err: null,
            chat: null
        }
    },

    componentWillMount: function() {
        var url = '/chats/' + encodeURIComponent(this.props.name);

        ajax('GET', url, function(err, res, chat) {
            this.setState({err: err, chat: chat});
        }.bind(this));
    },

    sendMessage: function(body, callback) {
        var url = '/chats/' + encodeURIComponent(this.props.name) + '/messages/';

        ajax('POST', url, {body: body}, callback);
    },

    handleChange: function(event) {
        this.setState({messageBody: event.target.value});
    },

    handleSubmit: function(event) {
        event.preventDefault();

        this.sendMessage(this.state.messageBody, function() {
            this.setState({messageBody: ''});
        }.bind(this));
    },

    render: function() {
        if (this.state.err) {
            return <div />;
        }

        if (!this.state.chat) {
            return <div />;
        }

        return (
            <div>
                <h2>{this.state.chat.topic || this.state.chat.friendlyName}</h2>
                <ChatMembers chatMembers={this.state.chat.members} />
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.messageBody}
                           onChange={this.handleChange} />
                    <button>Send</button>
                </form>
            </div>
        );
    }
});


module.exports = Chat;

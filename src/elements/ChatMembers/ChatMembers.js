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


var ChatMembers = React.createClass({
    getDefaultProps: function() {
        return {
            chatMembers: []
        };
    },

    render: function() {
        if (!this.props.chatMembers) {
            return <div />;
        }

        var chatMembers = this.props.chatMembers.map(function(userName) {
            var url = '/user.html#' + encodeURIComponent(userName);

            return (
                <li>
                    <a href={url}>{userName}</a>
                </li>
            );
        });

        return (
            <div>
                <h3>Chat Members</h3>
                <ul>
                    {chatMembers}
                </ul>
            </div>
        );
    }
});


module.exports = ChatMembers;

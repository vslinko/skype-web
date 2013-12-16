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


var User = React.createClass({
    getInitialState: function() {
        return {
            err: null,
            user: null
        }
    },

    componentWillMount: function() {
        var url = '/users/' + encodeURIComponent(this.props.name);

        ajax('GET', url, function(err, res, user) {
            this.setState({err: err, user: user});
        }.bind(this));
    },

    render: function() {
        if (this.state.err) {
            return <div />;
        }

        if (!this.state.user) {
            return <div />;
        }

        var info = Object.keys(this.state.user).map(function(key) {
            return (
                <tr>
                    <th>{key}</th>
                    <td>{JSON.stringify(this.state.user[key])}</td>
                </tr>
            );
        }.bind(this));

        return (
            <div>
                <h2>{this.state.user.displayName || this.state.user.fullName || this.state.user.handle}</h2>
                <table>
                    {info}
                </table>
            </div>
        );
    }
});


module.exports = User;

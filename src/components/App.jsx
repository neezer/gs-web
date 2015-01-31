var React        = require('react');
var Router       = require('react-router-component');
var _            = require('lodash');
var Locations    = Router.Locations;
var Template     = require('./Template.jsx');
var routes       = require('../../routes.js');
var NotFoundPage = require('./pages/NotFoundPage.jsx');

var App = React.createClass({
  getDefaultProps: function() {
    return {
      routes: routes
    };
  },

  getLocations: function() {
    var locations = [];

    _.forOwn(this.props.routes, function(element, route) {
      element = React.createFactory(element);

      locations.push(React.createElement(Router.Location, {
        key:      route,
        path:     route,
        handler:  element({ pageBody: this.props.pageBody })
      }));
    }.bind(this));

    locations.push(React.createElement(Router.NotFound, {
      handler:  NotFoundPage,
      key:      '404'
    }));

    return locations;
  },

  render: function() {
    return (
      <Template rev={this.props.rev}>
        <Locations path={this.props.path}>{this.getLocations()}</Locations>
      </Template>
    );
  }
});

module.exports = App;
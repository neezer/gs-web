var React         = require('react');
var Async         = require('react-async');
var request       = require('superagent');
var NotFoundPage  = require('./NotFoundPage.jsx');
var blockSelector = require('../blocks/blockSelector.js');
var _             = require('lodash');

var LandingPage = React.createClass({
  mixins: [Async.Mixin],

  getDefaultProps: function() {
    return {
      themeName: 'basic'
    };
  },

  getInitialStateAsync: function(cb) {
    var path = '/landing-pages/' + this.props.name + '.json';

    request
      .get('http://localhost:8000' + path)
      .withCredentials()
      .end(function(resp) { cb(null, resp.body); });
  },

  render: function() {
    if (this.state.page) {
      var state           = this.state;
      var blocks          = state.page.blocks;
      var blockSeparators = [];

      blocks = _.map(blocks, function(block) {
        var blockEl = blockSelector(block.blockType);
        var id = block.blockType + state.page.blocks.indexOf(block);

        return React.createElement(blockEl.element, {
          variant:    blockEl.variant,
          data:       block.data,
          key:        id
        });
      });

      return (
        <div className={this.props.themeName}>{blocks}</div>
      );
    } else {
      return <NotFoundPage />;
    }
  }
});

module.exports = LandingPage;

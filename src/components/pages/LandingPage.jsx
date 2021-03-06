var React         = require('react');
var _             = require('lodash');
var blockSelector = require('../blocks/blockSelector.js');

var LandingPage = React.createClass({
  getDefaultProps: function() {
    return {
      themeName: 'basic'
    };
  },

  render: function() {
    var blocks = _.map(this.props.page.blocks, function(block) {
      var blockEl = blockSelector(block.blockType);
      var id = block.blockType + this.props.page.blocks.indexOf(block);

      if (blockEl) {
        return React.createElement(blockEl, {
          variant:    block.blockVariant,
          data:       block.data,
          key:        id
        });
      }
    }.bind(this));

    return (
      <div className={this.props.themeName}>{blocks}</div>
    );
  }
});

module.exports = LandingPage;

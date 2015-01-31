var React = require('react');

var HeroBlock = React.createClass({
  getDefaultProps: function() {
    return {
      classNames: ['block', 'hero']
    };
  },

  render: function() {
    return (
      <div className={this.props.classNames.join(' ')} style={ { backgroundImage: "url(/" + this.props.data.bgImageSrc + ")" } }>
        <div>
          <h1>{this.props.data.heading}</h1>
          <p>{this.props.data.headingCopy}</p>
          <a href={this.props.data.ctaTarget}>{this.props.data.ctaCopy}</a>
        </div>
      </div>
    );
  }
});

module.exports = HeroBlock;


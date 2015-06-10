import React from 'react';
import Flux from 'flux';

console.log(Flux);

let Label = React.createClass({
  render: function () {
    return <div>
      Wallaby.js{' ' + (this.props ? this.props.children : 'unexpected')}
    </div>;
  }
});

export default Label;
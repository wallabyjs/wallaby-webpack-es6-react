import React from 'react';

export default class Label extends React.Component {
  render () {
    return <div>
      Wallaby.js{' ' + (this.props ? this.props.children : 'unexpected')}
    </div>;
  }
};
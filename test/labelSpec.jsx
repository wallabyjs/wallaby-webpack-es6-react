import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Label from '../src/Label'

describe('Label', function () {

  it('should not be undefined', function () {
    var Component = ReactTestUtils.renderIntoDocument(<Label />);
    var element = ReactTestUtils.findRenderedDOMComponentWithTag(Component, 'div');
    expect(element).toBeTruthy();
  });

});
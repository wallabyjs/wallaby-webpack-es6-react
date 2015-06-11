import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
import Label from '../src/Label'

describe('Label', function () {

  it('should not be undefined', function () {
    var Component = TestUtils.renderIntoDocument(<Label />);
    var element = TestUtils.findRenderedDOMComponentWithTag(Component, 'div');
    expect(element).toBeTruthy();
  });

});
import TestUtils from 'react/lib/ReactTestUtils'
import Label from '../src/label'

describe('Label', function () {

  it('should not be undefined', function () {
    var Component = TestUtils.renderIntoDocument(<Label />);
    var element = TestUtils.findRenderedDOMComponentWithTag(Component, 'div');
    expect(element).toBeTruthy();
  });

});
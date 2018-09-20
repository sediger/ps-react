import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
      const wrapper = shallow(<ProgressBar percent={50} width={500} />);
      const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
      /*const progBar50 = Example50Percent();
      const width = parseInt(progBar50.props.width * (progBar50.props.percent / 100), 10);*/
      expect(width).toEqual(250);
  });
});

/*function Example50Percent() {
  return <ProgressBar percent={50} width={500} />
}*/
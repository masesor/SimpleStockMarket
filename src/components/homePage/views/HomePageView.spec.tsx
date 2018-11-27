import * as React from 'react';

import { HomePageView } from './HomePageView';
import { shallow } from 'enzyme';

describe('<HomePageView />', () => {
  it('renders the component as expected', () => {
    const classes:any = {
      root: {
        padding: 10,
      },

      mobileRoot: {
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
      },

      button: {
        marginBottom: 15,
      },
    };
    const wrapper = shallow(
      <HomePageView
        toggleNewTradeFormDialog={jest.fn()}
        classes={classes}
        width={undefined}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});

import { connect } from 'react-redux';

import { IProps, HomePageView } from './views/HomePageView';
import selector from './selector';

export const HomePage = connect<IProps>(
    selector
)(HomePageView);

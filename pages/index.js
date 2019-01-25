import LandingPage from '../src/containers/LandingPage';
import AppHOC from '../src/hocs/AppHOC';
import { LANDING } from '../src/enums/page-types';

export default AppHOC(LandingPage, LANDING);

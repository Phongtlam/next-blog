import Portfolio from '../src/containers/Portfolio';
import AppHOC from '../src/hocs/AppHOC';
import { PORTFOLIO } from '../src/enums/page-types';

export default AppHOC(Portfolio, PORTFOLIO);

import AppHOC from '../../src/hocs/AppHOC';
import BlogPage from '../../src/components/BlogPage';
import { PORTFOLIO } from '../../src/enums/page-types';

export default AppHOC(BlogPage, PORTFOLIO);

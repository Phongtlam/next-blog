import Blog from '../src/containers/Blog';
import AppHOC from '../src/hocs/AppHOC';
import { BLOG } from '../src/enums/page-types';

export default AppHOC(Blog, BLOG);

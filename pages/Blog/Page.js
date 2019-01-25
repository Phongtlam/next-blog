import AppHOC from '../../src/hocs/AppHOC';
import BlogPage from '../../src/components/BlogPage';
import { BLOG } from '../../src/enums/page-types';

export default AppHOC(BlogPage, BLOG);

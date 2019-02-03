import About from '../src/containers/About';
import AppHOC from '../src/hocs/AppHOC';

export default AppHOC(About, null, { isMinifiedDesktopMenuAtStart: true });

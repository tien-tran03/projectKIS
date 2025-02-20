import { compose } from 'ramda';

import { withData } from '../../react_utils';
import { AddElementsComponent as AEC} from './components/layout_element_sidebar/add-elements';
import { elementConfigs } from './data';

export * from './components/layout_element_sidebar/add-elements';
export * from './components';

export const AddElementsComponent = compose(
    withData(elementConfigs),
)(AEC);

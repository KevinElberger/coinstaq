import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageWrapper = Page => {
    return props => (
      <div>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName='SlideIn'
        >
          <Page {...props} />
        </ReactCSSTransitionGroup>
      </div>
    );
};

export default PageWrapper;
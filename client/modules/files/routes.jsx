import React from 'react';
import {mount} from 'react-mounter';

import App from '../core/components/App.jsx';
import {FileList, FileEdit} from './containers/index.js';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/files', {
    name: 'files.list', action() {
      mount(AppLayout, {
        content: () => (<FileList />)
      });
    }
  });

  FlowRouter.route('/files/:fileId/edit', {
    name: 'files.single',
    action({fileId}) {
      mount(AppLayout, {
        content: () => (<FileEdit fileId={fileId}/>)
      });
    }
  });
}
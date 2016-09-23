import React from 'react';
import MonacoEditor from 'react-monaco-editor/lib';

import monacoRequireConfig from '../src/monacoRequireConfig.js';

export default function WikiApp(props) {
  return (<div style={{ display: 'flex' }}>
    <MonacoEditor language="markdown" defaultValue={props.markdown} width="50%" height={500} requireConfig={monacoRequireConfig} />
    <div>
      {props.preview}
    </div>
  </div>);
}

WikiApp.propTypes = {
  markdown: React.PropTypes.string,
  preview: React.PropTypes.node,
};
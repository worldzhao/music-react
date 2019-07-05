import React from 'react';
import ReactDOM from 'react-dom';
import '@/common/styles/index.scss';
import Demo from '@/views/demo';

console.log(process.env);

ReactDOM.render(<Demo title="hello react" />, document.getElementById('root'));

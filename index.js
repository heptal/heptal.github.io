import "babel-polyfill";

import {render} from 'react-dom'
import React from 'react'
import Root from './containers/Root'

import configureStore from './store/configureStore';


require('./css/imports.scss');


const store = configureStore();


render(<Root store={store}/>, document.getElementById('root'))

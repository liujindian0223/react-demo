import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import 'swiper/dist/css/swiper.min.css'
import './modules/rem'
import FastClick from 'fastclick'
import { Provider } from 'react-redux'
import store from './store'
import {
    BrowserRouter as Router
} from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

//antd-mobile
import 'antd-mobile/dist/antd-mobile.css';

//fastclick 解决click300ms延迟
FastClick.attach(document.body);

ReactDOM.render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();




//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG
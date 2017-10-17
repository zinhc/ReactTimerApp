var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
//Load foundation 因為不知道載入的是css檔案 所以要在開頭加上css! css-loader,表示是css檔案
//style 是 css
//require('style!css!foundation-sites/dist/foundation.min.css') 已經在webpackConfig.js加入sassLoader
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer} />
      </Route>
  </Router>,
  document.getElementById('app')
);

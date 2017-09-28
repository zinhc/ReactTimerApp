var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (preProps, preState) {
    if (this.state.timerStatus !== preState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  handleStart: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000)
  },
  handleStatusChange: function (newTimerStatus) {
    console.log(newTimerStatus);
    this.setState({
      timerStatus: newTimerStatus
    });
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>//totalSeconds取自Clock.jsx的getDefaultProps的totalSeconds
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>//取Controls.jsx第17行的countdownStatus和onStatusChange
      </div>
    );
  }
});

module.exports = Timer;

/**
 * @jsx React.DOM
 */

require('./DialogFail.scss');
var React = require('react');
var {ApplicationActions, GameActions} = require('../../actions');
var CONSTANTS = require('../../constants');

var DialogFail = React.createClass({
  handleClick () {
    ApplicationActions.changeScreen(CONSTANTS.Application.SCREENS.GAME);
    GameActions.restartGame();
    // Timer.stop();
  },

  render () {
    return (
      <div className='DialogFail'>
        <h1>FAIL :(</h1>
        <button onClick={this.handleClick}>Restart!</button>
      </div>
    );
  }
});

module.exports = DialogFail;

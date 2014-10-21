var {keyMirror} = require('../utils');

module.exports = keyMirror({
  STATES: ['tile-invalid', 'tile-valid', 'tile-passed', 'tile-start'],
  SQUARE_SIZE: [50, 101],

  UPDATE: false,
  CLICK: false,

  START: false,
  RESTART: false,
  END: false,
});
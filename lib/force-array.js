'use strict';


/**
 * This is a slightly modified version of `retrofox` - `is-array` module
 * @author  retrofox
 * @license MIT
 * @see     https://github.com/retrofox/is-array
 */
let native = Array.isArray
let str = Object.prototype.toString

/**
 * Whether or not the given `val`
 * is an array.
 * If `isArray` is available then it will be used otherwise
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */
let isArray = native || function (val) {
  return !! val && '[object Array]' == str.call(val)
}

// -----------------------------------------------------------------------------

/**
 * This is a slightly modified version of `ramitos` - `force-array` module
 * @author  ramitos
 * @license MIT
 * @see     https://github.com/ramitos/force-array
 */

/**
 * Casts/Forces the item to be array
 * @access public
 * @param  {Mixed} v The value that will be casted
 * @return {Array}   Returns the mixed value in a array
 */
let forceItem = function(v) {
  return isArray(v) ? v : (v ? [v] : [])
}

/**
 * Casts/Forces the argument(s) to be a array.
 * If the length is more than 1 it recursivly calls itself and casts unless the
 * length of the keys inside the arguments object is 1 or less
 * @access public
 * @return {Array} Returns a array with all converted values
 */
let forceArray = function() {
  if (Object.keys(arguments).length <=  1) {
    return forceItem(arguments[0])
  }

  let firstItem = forceItem(arguments[0])
  Array.prototype.shift.call(arguments)
  return firstItem.concat(forceArray.apply(null, arguments))
}

// export public interface
module.exports = forceArray
module.exports.item = forceItem
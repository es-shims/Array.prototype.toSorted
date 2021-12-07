'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shim() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ toSorted: polyfill },
		{ toSorted: function () { return Array.prototype.toSorted !== polyfill; } }
	);
	return polyfill;
};

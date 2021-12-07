'use strict';

module.exports = function (toSorted, t) {
	var nums = [2, 1, 3];
	var result = toSorted(nums);
	t.deepEqual(
		result,
		[1, 2, 3],
		'array is sorted'
	);
	t.notEqual(nums, result, 'original array is not returned');
	t.deepEqual(nums, [2, 1, 3], 'original array is unchanged');

	nums.sort();
	t.deepEqual(nums, result, 'mutated original matches result');

	t.deepEqual(
		toSorted('acab'),
		['a', 'a', 'b', 'c'],
		'string sorts to array'
	);

	var halfPoo = '\uD83D';
	var endPoo = '\uDCA9';
	var poo = halfPoo + endPoo;
	t.deepEqual(
		toSorted('a' + poo + 'c'),
		['a', 'c', halfPoo, endPoo],
		'code point is sorted as expected'
	);
};

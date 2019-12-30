import str from './str';
import time from './time';
import money from './money';
import phone from './phone';
import url from "./url";
import is from './is';

import { cancelAnimationTimeout, requestAnimationTimeout } from './animateFrameTimeout';
import { raf, caf } from './animationFrame';
import array from './array';

export default {
	cancelAnimationTimeout,
	requestAnimationTimeout,
	raf,
	caf,
	array,
	str,
	money,
	time,
	phone,
	url,
};

export {
	is
};

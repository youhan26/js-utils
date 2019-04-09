/**
 * Created by: YouHan
 * Date: 2019/4/10 0:02
 * file: style.js
 */

const defaultUnit = 'px';
/**
 * getStyle
 * @param style
 * @param withUnit
 * @param defaultUnit
 * @returns {*}
 */
export function getStyle(style = '', withUnit = false, defaultUnit = defaultUnit){
	const match = String(style).match(/(\d+(?:.\d+)?)(\S+)/);
	if(match){
		const [_, num, unit] = match;
		return parseFloat(num) + withUnit ? unit || defaultUnit : '';
	}
	return null;
}

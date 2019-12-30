/**
 * Created by: YouHan
 * Date: 2019/4/9 22:16
 * file: angle.js
 */

/**
 * degreeToAngle
 * @param number
 * @returns {number}
 * @example: degreeToAngle(180) = 3.1415.....
 */
export function degreeToAngle(number){
	return number / 360 * 2 * Math.PI;
}

/**
 * angleToDegree
 * @param angle
 * @returns {number}
 * @example angleToDegree(3.14...) = 180
 */
export function angleToDegree(angle){
	return angle / 2 / Math.PI * 360;
}
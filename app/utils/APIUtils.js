import { API_ROOT } from "../constants/AppConstants";

/**
 * Utility functions for API connectivity.
 * @class APIUtils
 * @static
 */

/**
 * Builds an API URL.
 * @since 0.1.0
 * @method buildURL
 * @param  {String} endpoint Path to the resource endpoint.
 * @return {String}          Full API URL referencing to the resource.
 */
function buildURL(endpoint) {
    return encodeURI(API_ROOT + endpoint);
}

/**
 * Serializes an object to a URL encoded query string.
 * @since 0.1.0
 * @method toQueryString
 * @param  {Object} obj Object to be serialized.
 * @return {String}     URL encoded query string.
 */
function toQueryString(obj) {
    var str = [];

    for (var p in obj) {
        if (obj.hasOwnProperty(p) && typeof obj[p] !== "function") {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }

    return str.join("&");
}

export {
    buildURL,
    toQueryString
};

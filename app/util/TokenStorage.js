/**
 *	TokenStorage utility class. Used as a utility class for working with JSON Web Tokens.
 */
Ext.define('pcms.util.TokenStorage', {
    alternateClassName: ['pcms.TokenStorage', 'TokenStorage', 'User'],
    singleton: true,

    requires: [
        'Ext.Array',
        'Ext.util.Base64'
    ],

    config: {
        /**
         *	@config {String} [token]
         *	An encoded JSON Web Token.
         */
        token: window.sessionStorage.getItem('jwt')
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    /**
     *	Remove the current value of the token.
     */
    clear: function() {
        this.setToken('');
    },

    /**
     *	Return the payload data of the token as a JSON object.
     *
     *	@return {Object} The decoded payload date of the JSON Web Token.
     */
    decode: function() {
        var token = this.getToken();

        if (Ext.isEmpty(token)) {
            return {};
        } else {
            return JSON.parse(window.atob(token.split('.')[1]));
        }
    },

    /**
     *	Return the user ID of the current user.
     *
     *	@return {String} The decoded id of the JSON Web Token.
     */
    getUserId: function() {
        return this.decode().sub;
    },

    /**
     *	Return the first name of the current user.
     *
     *	@return {String} The decoded first name of the JSON Web Token.
     */
    getFirstName: function() {
        return this.decode().firstName;
    },

    /**
     *	Return the last name of the current user.
     *
     *	@return {String} The decoded last name of the JSON Web Token.
     */
    getLastName: function() {
        return this.decode().lastName;
    },

    /**
     *	Return the full name of the current user.
     *
     *	@return {String} The decoded last name of the JSON Web Token.
     */
    getName: function() {
        var user = this.decode();
        return user.firstName + ' ' + user.lastName;
    },

    /**
     *	Checks to see if the user has access to the requested privilege.
     *
     *	@param {String} [privilege] The user privilege to check.
     *	@return {Booleans} Returns `true` if the privilege exists in the user's authorities.
     */
    hasPrivilege: function(privilege) {
        return Ext.Array.contains(this.decode().authorities || [], privilege);
    },

    /**
     *	Updates the session storage with the updated token value.
     *
     *	@param {String} [token] The encoded JSON Web Token.
     */
    updateToken: function(token) {
        window.sessionStorage.setItem('jwt', token);
    }
});

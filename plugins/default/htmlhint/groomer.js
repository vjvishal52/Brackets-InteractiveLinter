/**
 * Interactive Linter Copyright (c) 2015 Miguel Castillo.
 *
 * Licensed under MIT
 */

define(function (/*require, exports, module*/) {
    "use strict";


    /**
     * Generates codemirror tokens.  Also massages the message so that it has the
     * data that interactive linter is expecting in the proper place.
     *
     * @param message {Object} message - A linting result item
     * @param settings {Object} settings - Settings used during the linting step
     */
    function groom(message /*, settings*/) {
        var text;

        if (!message) {
            return;
        }

        text = message.message + "";
        message.reason = text;
        message.token  = {
            start: {
                line: (message.line - 1),
                ch: (message.col)
            },
            end: {
                line: (message.line - 1),
                ch: (message.col + 1)
            }
        };
    }

    return {
        groom: groom
    };

});
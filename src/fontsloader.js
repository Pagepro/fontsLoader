/* 
FontLoader
FontFaceObserver required to work!!
*/

/*globals jQuery, window, document */
(function ($) {
    'use strict';
    var pluginName = 'fontLoader',
        defaults = {
            fonts: {
                'Arial': [400]
            },
            fontLoadedClass: 'fonts-loaded'
        };
    // The actual plugin constructor
    function Plugin (element, options) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        this.fonts = [];
        this.init();
    }
    Plugin.prototype = {
        init: function () {
            var that = this;
            this.fonts = this.createPromises(this.settings.fonts);
            Promise.all(this.fonts).then(function () {
                that.$element.addClass(that.settings.fontLoadedClass);
            });
        },
        createFonts: function (name, weights) {
            var fonts = [],
                i;

            for (i = 0; i < weights.length; i++) {
                fonts.push(new FontFaceObserver(name, {
                    weight: weights[i]
                }).check());
            }
            return fonts;
        },
        createPromises: function (arrOfFonts) {
            var fontsPromises = [],
                key;

            for (key in arrOfFonts) {
                if ({}.hasOwnProperty.call(arrOfFonts, key)) {
                    fontsPromises = fontsPromises.concat(this.createFonts(key, arrOfFonts[key]));
                }
            }
            return fontsPromises;
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery));
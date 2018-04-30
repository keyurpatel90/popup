var popup = {

    cookieLiveTime: 100,

    cookieName: 'popup',

    baseUrl: '',

    delay : 3000,

    setCookieLiveTime: function(value)
    {
        this.cookieLiveTime = value;
    },

    setCookieName: function(value)
    {
        this.cookieName = value;
    },
    setDelay: function(delay)
    {
        this.delay = parseInt(delay*1000);
    },
    setBaseUrl: function(url)
    {
        this.baseUrl = url;
    },

    getBaseUrl: function(url)
    {
        return this.baseUrl;
    },

    createCookie: function() {
        var days = this.cookieLiveTime;
        var value = 1;
        var name = this.cookieName;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = escape(name)+"="+escape(value)+expires+"; path=/";
    },

    readCookie: function(name) {
        var name = this.cookieName;
        var nameEQ = escape(name) + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
        }
        return null;
    },

    boxClose: function()
    {
        jQuery('#popup_background_layer').fadeOut();
    },

    boxOpen: function()
    {
        jQuery('#popup_background_layer').delay(this.delay).fadeIn(function () {
            jQuery('#popup_box_layer').css("position","fixed");
            jQuery('#popup_box_layer').css("left", ( jQuery(window).width() - jQuery('#popup_box_layer').width() ) / 2 + jQuery(window).scrollLeft() + "px");
            jQuery('#popup_box_layer').css("top", ( jQuery(window).height() - jQuery('#popup_box_layer').height() ) / 2 + jQuery(window).scrollTop() + "px");
        });
    }
};

jQuery(function() {
    if (popup.readCookie() != 1) {
        popup.boxOpen();
        jQuery('#popup_background_layer').css('height', jQuery(document).height()+'px');
        // jQuery('#popup_box_layer').css('margin-top', ((jQuery(window).height()-jQuery('#popup_box_layer').height()) /2)+'px');
        // jQuery('#popup_box_layer').css("position","fixed");
        // jQuery('#popup_box_layer').css("left", ( jQuery(window).width() - jQuery('#popup_box_layer').width() ) / 2 + jQuery(window).scrollLeft() + "px");
        // jQuery('#popup_box_layer').css("top", ( jQuery(window).height() - jQuery('#popup_box_layer').height() ) / 2 + jQuery(window).scrollTop() + "px");


    }
    jQuery('#popup_box_close').click(function(){
        popup.boxClose();
        popup.createCookie();
    });
});

jQuery.noConflict();
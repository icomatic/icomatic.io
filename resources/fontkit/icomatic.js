var IcomaticUtils = (function() {
return {
fallbacks: [{ from: 'alert', 'to': '' },{ from: 'arrowdown', 'to': '' },{ from: 'arrowleft', 'to': '' },{ from: 'arrowright', 'to': '' },{ from: 'arrowup', 'to': '' },{ from: 'attachment', 'to': '' },{ from: 'audiooff', 'to': '' },{ from: 'audio', 'to': '' },{ from: 'backlight', 'to': '' },{ from: 'back', 'to': '' },{ from: 'behance', 'to': '' },{ from: 'bookmark', 'to': '' },{ from: 'brush', 'to': '' },{ from: 'build', 'to': '' },{ from: 'calendar', 'to': '' },{ from: 'call', 'to': '' },{ from: 'camera', 'to': '' },{ from: 'cancel', 'to': '' },{ from: 'cart', 'to': '' },{ from: 'chat', 'to': '' },{ from: 'checkmark', 'to': '' },{ from: 'circleoutline', 'to': '' },{ from: 'cloud', 'to': '' },{ from: 'collapse', 'to': '' },{ from: 'comment', 'to': '' },{ from: 'computer', 'to': '' },{ from: 'delete', 'to': '' },{ from: 'download', 'to': '' },{ from: 'dribble', 'to': '' },{ from: 'email', 'to': '' },{ from: 'error', 'to': '' },{ from: 'expand', 'to': '' },{ from: 'facebook', 'to': '' },{ from: 'favorite', 'to': '' },{ from: 'feedback', 'to': '' },{ from: 'flickr', 'to': '' },{ from: 'folder', 'to': '' },{ from: 'githubtext', 'to': '' },{ from: 'github', 'to': '' },{ from: 'googleplus', 'to': '' },{ from: 'group', 'to': '' },{ from: 'hipstamatic', 'to': '' },{ from: 'home', 'to': '' },{ from: 'imageoutline', 'to': '' },{ from: 'image', 'to': '' },{ from: 'like', 'to': '' },{ from: 'linkedin', 'to': '' },{ from: 'listview', 'to': '' },{ from: 'location', 'to': '' },{ from: 'lock', 'to': '' },{ from: 'minus', 'to': '' },{ from: 'nextlight', 'to': '' },{ from: 'next', 'to': '' },{ from: 'page', 'to': '' },{ from: 'path', 'to': '' },{ from: 'pencil', 'to': '' },{ from: 'phone', 'to': '' },{ from: 'picasa', 'to': '' },{ from: 'pinterest', 'to': '' },{ from: 'plugin', 'to': '' },{ from: 'plus', 'to': '' },{ from: 'preview', 'to': '' },{ from: 'print', 'to': '' },{ from: 'question', 'to': '' },{ from: 'rectangleoutline', 'to': '' },{ from: 'refresh', 'to': '' },{ from: 'retweet', 'to': '' },{ from: 'roundedrectangleoutline', 'to': '' },{ from: 'rss', 'to': '' },{ from: 'save', 'to': '' },{ from: 'search', 'to': '' },{ from: 'settings', 'to': '' },{ from: 'share', 'to': '' },{ from: 'tablet', 'to': '' },{ from: 'text', 'to': '' },{ from: 'tileview', 'to': '' },{ from: 'time', 'to': '' },{ from: 'tumblr', 'to': '' },{ from: 'twitter', 'to': '' },{ from: 'unlock', 'to': '' },{ from: 'upload', 'to': '' },{ from: 'user', 'to': '' },{ from: 'videocamera', 'to': '' },{ from: 'view', 'to': '' },{ from: 'vimeo', 'to': '' },{ from: 'wifi', 'to': '' },{ from: 'wordpress', 'to': '' }],
substitute: function(el) {
    var curr = el.firstChild;
    var next, alt;
    var content;
    while (curr) {
        next = curr.nextSibling;
        if (curr.nodeType === Node.TEXT_NODE) {
            content = curr.nodeValue;
            for (var i = 0; i < IcomaticUtils.fallbacks.length; i++) {
                content = content.replace( IcomaticUtils.fallbacks[i].from, function(match) {
                    alt = document.createElement('span');
                    alt.setAttribute('class', 'icomatic-alt');
                    alt.innerHTML = match;
                    el.insertBefore(alt, curr);
                    return IcomaticUtils.fallbacks[i].to;
                });
            }
            alt = document.createTextNode(content);
            el.replaceChild(alt, curr);
        }
        curr = next;
    }
},
run: function(force) {
    force = typeof force !== 'undefined' ? force : false;
    var s = getComputedStyle(document.body);
    if (s.hasOwnProperty('webkitFontFeatureSettings')
        || s.hasOwnProperty('mozFontFeatureSettings')
        || s.hasOwnProperty('msFontFeatureSettings')
        || s.hasOwnProperty('oFontFeatureSettings')
        || s.hasOwnProperty('fontFeatureSettings'))
        if (!force)
            return;
    var els = document.querySelectorAll('.icomatic');
    for (var i = 0; i < els.length; i++)
        IcomaticUtils.substitute(els[i]);
}
} // end of object
} // end of fn
)()
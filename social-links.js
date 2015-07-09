
function getSocialLinks(url) {
	if (typeof url === 'undefined') return;
	if (url.indexOf('http') !== 0) url = 'http://' + url;
    var encodedUrl = encodeURIComponent(url);
    return {
    	facebook: 'http://www.facebook.com/sharer/sharer.php?u=' + encodedUrl,
    	twitter: 'https://twitter.com/intent/tweet?url=' + encodedUrl,
    	linkedIn: 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl,
    	googlePlus: 'https://plus.google.com/share?url=' + encodedUrl,
    	reddit: '//www.reddit.com/submit?url=' + encodedUrl
    };
}

(function() {

  var linkInput = document.getElementById('url');
  //var copySupported = document.queryCommandSupported('copy');

  linkInput.oninput = linkInputChange;

  function linkInputChange(event) {
    var shareUrl = linkInput.value;
    if (shareUrl.indexOf('http') !== 0) {
    	shareUrl = 'http://' + shareUrl;
    }
    var encodedUrl = encodeURIComponent(shareUrl);
    setFacebookLinks(encodedUrl);
    setTwitterLinks(encodedUrl);
    setGplusLinks(encodedUrl);
    setLinkedinLinks(encodedUrl);
    setRedditLink(encodedUrl);
  }

  function setFacebookLinks(encodedUrl) {
  	var url = 'http://www.facebook.com/sharer/sharer.php?u=' + encodedUrl;
  	setOutput('facebook', url);
  }

  function setTwitterLinks(encodedUrl) {
  	// https://dev.twitter.com/web/tweet-button/web-intent
  	var url = 'https://twitter.com/intent/tweet?url=' + encodedUrl;
  	setOutput('twitter', url);
  }

  function setGplusLinks(encodedUrl) {
  	// https://developers.google.com/+/web/share/#share-link
  	var url = 'https://plus.google.com/share?url=' + encodedUrl;
  	setOutput('gplus', url);
  }

  function setRedditLink(encodedUrl) {
  	// https://www.reddit.com/buttons/
  	var url = '//www.reddit.com/submit?url=' + encodedUrl;
  	setOutput('reddit', url);
  }

  function setLinkedinLinks(encodedUrl) {
  	// https://developer.linkedin.com/docs/share-on-linkedin
  	var url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl;
  	setOutput('linkedin', url);
  }

	function setOutput(name, shareUrl) {
		var linkOutput = document.getElementById(name + '-url');
		var outerElem = document.getElementById(name);
		var testLink = outerElem.querySelector('a.test');
		linkOutput.value = shareUrl;
		testLink.href = shareUrl;
	}

	// Set up input selection
	var outputs = document.getElementById('results').querySelectorAll('input');
	function inputSelectInners(event) {
		event.target.select();
	}
	for (var i = outputs.length - 1; i >= 0; i--) {
		outputs[i].onclick = inputSelectInners;
	}

	// function copyButtonClick(event) {
	// 	var button = event.target;
	// 	var input = button.parentNode.querySelector('input');
	// 	input.select();
	// 	console.log('test');
	// 	try {
	// 		document.execCommand('copy');
	// 	} catch (err) {
	// 		console.log('Unable to copy');
	// 	}
	// }

	// Set up copy button click otherwise, if not supported, hide them.
	// var buttons = document.querySelectorAll('.copy-button');
	// if (copySupported) {
	// 	for (var i = buttons.length - 1; i >= 0; i--) {
	// 		buttons[i].onclick = copyButtonClick;
	// 	}
	// } else {
	// 	for (var i = buttons.length - 1; i >= 0; i--) {
	// 		buttons[i].style.display = 'none';
	// 	}
	// }

})();

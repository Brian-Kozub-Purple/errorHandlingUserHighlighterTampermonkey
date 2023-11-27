// ==UserScript==
// @name         Error Handling Highlighter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://onpurple.atlassian.net/wiki/spaces/Integratio/pages/2936274945/Error+Handling
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	// Your code here...
	const pCollection = document.getElementsByTagName("p");
	for (let i = 0; i < pCollection.length; i++) {
		if (pCollection[i].innerHTML.includes("Brian K.")) {
			pCollection[i].style.backgroundColor = "green";
			pCollection[i].style.color = "white";
		}
		if (pCollection[i].innerHTML.includes("Tony S.")) {
			pCollection[i].style.backgroundColor = "yellow";
		}
	}
})();

// ==UserScript==
// @name         Error Handling Highlighter
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Highlights all rows where a user is the backup for a primary on the internal Error Handling doc.
// @author       You
// @match        https://onpurple.atlassian.net/wiki/spaces/Integratio/pages/2936274945/Internal+-+Error+Handling
// @icon         https://www.google.com/s2/favicons?sz=64&domain=purple.com
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	// Your code here...
	// By table columns method
	const tables = document.getElementsByTagName("table");
	const table = Array.from(tables).find((table) => table.rows.length > 1);
	const targetPrimary = prompt(
		"Who is the primary? You must type it exactly as it appears in the table. eg. 'Tony S.' or 'Gil Q.'"
	);
	const targetSupport = prompt(
		"Who is the backup? You must type it exactly as it appears in the table. eg. 'Brian K.' or 'Jose C.'"
	);
	for (let i = 0; i < table.rows.length; i++) {
		const currentRow = table.rows[i];
		const primaryCell = currentRow.cells[2];
		const primaryName = primaryCell.firstChild.innerHTML;
		const secondaryCell = currentRow.cells[3];
		const secondaryName = secondaryCell.firstChild.innerHTML;
		const tertiaryCell = currentRow.cells[4];
		const tertiaryName = tertiaryCell.firstChild.innerHTML;

		if (primaryName == targetPrimary) {
			primaryCell.style.backgroundColor = "white";
			if (secondaryName == targetSupport || tertiaryName == targetSupport) {
				currentRow.style.backgroundColor = "#CED9EC";
				if (secondaryName == targetSupport) {
					secondaryCell.style.backgroundColor = "lightgray";
				}
				if (tertiaryName == targetSupport) {
					tertiaryCell.style.backgroundColor = "darkgray";
				}
			}
		}
	}
})();

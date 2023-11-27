# Error Handling Highlighter

Highlights all rows where a user is the backup for a primary on the [internal Error Handling doc](https://onpurple.atlassian.net/wiki/spaces/Integratio/pages/2936274945/Error+Handling), so when someone goes out of town, it's easier to see which flows you're responsible for.

## Installation

1. Copy the contents of [main.js](https://github.com/Brian-Kozub-Purple/errorHandlingUserHighlighterTampermonkey/blob/main/main.js).
2. From the Tampermonkey extension's dropdown menu, select 'Create a new script...'.
3. Replace the contents in the editor with what you've copied.
4. Save your userscript.

## Use

When you arrive at the Error Handling document, you will be prompted for a primary and backup user.

![prompt for primary user](https://i.imgur.com/LlZW2Zc.png)

Don't forget the period after the users' last name initials.

In the example below, 'Tony S.' is the primary and 'Brian K.' is the backup. The rows where Tony is primary and Brian is either the secondary or tertiary backup are highlighted in gray.

![example of function, showing highlighted rows](https://i.imgur.com/jv5tZvs.png)

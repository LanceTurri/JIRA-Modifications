JIRA-Modifications
==================

These are modifications for JIRA that eventually will extend to all of the board pages. Currently the agile board view is the only one that is fully modified, with the task board, dashboard, and timesheet progessively improving. All of this is done using CSS via stylish and JS via a userscript plugin.

This was tested with Stylish and Tampermonkey on Chrome, and Stylish and Greasemonkey on Firefox. If you find a bug or have a feature request, please let me know. This is definitely a work in progress and will need to keep growing for everyone to be able to use.

A few things of note:

1) I have replaced the default font with Roboto. Inside of the userscript you will see it being loaded from Google fonts and as such you are free to replace that font with any that fits your fancy.

2) On the agile board view, there is a new feature I have added that allows you to click on either the parent task number, or child task number and it will open in a new tab. You are still able to click anywhere on the rest of the item box and it will open the details modal, but the titles specifically will open a new window.


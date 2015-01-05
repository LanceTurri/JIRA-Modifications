// ==UserScript==
// @name         JIRA Upgrades
// @namespace    http://your.homepage/
// @version      0.5
// @description  To begin this will enable the clicking of a parent task to go straight to that task.
// @author       Lance Turri
// @match        http*://helpdesk.alkamitech.com/secure/RapidBoard.jspa?*
// @grant        none
// ==/UserScript==

var timeoutID;

// Set up the function that will delay the script loading until all calls are completed.
function delayClickLoading () {
    timeoutID = window.setTimeout(clickLoading, 1000); // One second works in most situations.
}

function clickLoading() {
    jQuery(function() {
        // First, there was a new font
        var font = '<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css">'
        jQuery('head').append(font);

        // Let's get font-awesome up in here!
        var awesomey = '<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">';
        jQuery('head').append(awesomey);
        jQuery('.ghx-priority').addClass('fa fa-fw fa-level-up');
        jQuery('.ghx-type[title="Design Task"]').addClass('fa fa-fw fa-paint-brush');
        jQuery('.ghx-type[title="Bug"]').addClass('fa fa-fw fa-bug');
        jQuery('.ghx-type[title="Feature Request"]').addClass('fa fa-fw fa-magic');
        jQuery('.ghx-type[title="Sub-task"]').addClass('fa fa-fw fa-code-fork');
        jQuery('.ghx-type[title="Story"]').addClass('fa fa-fw fa-book');
        jQuery('.ghx-type[title="Improvement"]').addClass('fa fa-fw fa-thumbs-up');
        jQuery('.ghx-type[title="Configuration Change"]').addClass('fa fa-fw fa-gear');

        // Icons EVERYWHERE!
        jQuery('#ghx-board-name').prepend('<span class="fa fa-fw fa-paint-brush" style="padding-right:3px;"></span>')

        // On to the parent task search function. It's getting hot up in here!
        jQuery('.ghx-parent-stub').on('click', function() {

            // TODO: combine these tasks.
            var taskTitle = $(this).attr('title'); // Get title attribute
            taskTitle = taskTitle.split(" ", 1); // Split at the DEV number
            taskTitle = taskTitle[0]; // Convert from Array to string.

            // Inject the value into the search box and submit the form.
            window.open('https://helpdesk.alkamitech.com/browse/' + taskTitle);
        });

        // Now lets make the title of each task open in a new window if the link is clicked.
        jQuery('.ghx-key a').on('click', function(e) {
            window.open('https://helpdesk.alkamitech.com' + $(this).attr('href'));
        });
    });
}

// Load the click listener.
delayClickLoading();
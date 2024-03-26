// find all the elements with the class bookmark
var bookmarks = document.querySelectorAll('.bookmark');

// maintain t theming class list
var theming = ['bg-theme-500/10', 'dark:bg-theme-900/50'];

// loop through all the bookmarks
bookmarks.forEach(function (bookmark) {
    // find the <a> tag inside the bookmark
    var link = bookmark.querySelector('a');
    // get the frist chile of the link
    var contaner = link.children[0];
    // if the container is not null or not a div element
    if (!contaner || contaner.tagName !== 'DIV') {
        // continue to the next bookmark
        return;
    }
    // * ok.
    // add a class name to the container element
    contaner.classList.add('bookmark-container');
    // add the theming class to the container
    // contaner.classList.add(...theming);
});

// find all the element with the class bookmark-icon
var bookmarkIcons = document.querySelectorAll('.bookmark-icon');

// loop through all the bookmark icons
bookmarkIcons.forEach(function (bookmarkIcon) {
    // remove the w-11 class from the bookmark icon
    bookmarkIcon.classList.remove('w-11');
    // remove the theme class from the icon
    bookmarkIcon.classList.remove(...theming);
    // find the only child of the bookmark icon
    var icon = bookmarkIcon.children[0];
    // if the icon is null 
    if (!icon) {
        // continue to the next bookmark icon
        return;
    }
    // add remove the w-5, h-5 classed from the icon
    icon.classList.remove('w-5', 'h-5');
    // add the w-12, h-12 class to the icon
    icon.classList.add('w-12', 'h-12', 'bookmark-icon-img');
});

// find all the elements with class bookmark-list
var bookmarkLists = document.querySelectorAll('.bookmark-list');

// loop through all the bookmark lists
bookmarkLists.forEach(function (bookmarkList) {
    // remove the class name flex-col from the bookmark class list
    bookmarkList.classList.remove('flex-col');
    // add the class name flex-row to the bookmark class list
    bookmarkList.classList.add('flex-row');
});

// find all the elements with the class bookmark-name
var bookmarkNames = document.querySelectorAll('.bookmark-name');

// loop through all the bookmark names
bookmarkNames.forEach(function (bookmarkName) {
    // remove the pl-3 class from the bookmark name class list
    bookmarkName.classList.remove('pl-3');
});
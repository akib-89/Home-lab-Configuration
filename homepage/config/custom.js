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
    // add a class name to the container element
    contaner.classList.add('bookmark-container');
    // add the theming class to the container
    contaner.classList.add(...theming);
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
    // add remove the w-5, h-5 classed from the icon
    icon.classList.remove('w-5', 'h-5');
    // add the w-12, h-12 class to the icon
    icon.classList.add('w-12', 'h-12', 'bookmark-icon-img');
});
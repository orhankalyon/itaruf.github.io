function showTab(tabId) {
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove('active');
    });

    var selectedTabContent = document.getElementById(tabId);
    selectedTabContent.classList.add('active');
}

function showSubTab(subtabId) {
    var subtabContents = document.querySelectorAll('.subtab-content');
    subtabContents.forEach(function (subtabContent) {
        subtabContent.classList.remove('active');
    });

    var selectedSubtabContent = document.getElementById(subtabId);
    selectedSubtabContent.classList.add('active');

    var subtabs = document.querySelectorAll('.subtab');
    subtabs.forEach(function (subtab) {
        subtab.classList.remove('active');
    });

    var selectedSubtab = document.querySelector('.subtab[data-subtab="' + subtabId + '"]');
    if (selectedSubtab) {
        selectedSubtab.classList.add('active');
    }
}

function showProjectTab(projecttabId) {
    var projecttabContents = document.querySelectorAll('.projecttab-content');
    projecttabContents.forEach(function (projecttabContent) {
        projecttabContent.classList.remove('active');
    });

    var selectedprojecttabContent = document.getElementById(projecttabId);
    selectedprojecttabContent.classList.add('active');

    var projecttabs = document.querySelectorAll('.projecttab');
    projecttabs.forEach(function (projecttab) {
        projecttab.classList.remove('active');
    });

    var selectedprojecttab = document.querySelector('.projecttab[data-projecttab="' + projecttabId + '"]');
    if (selectedprojecttab) {
        selectedprojecttab.classList.add('active');
    }
}

var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
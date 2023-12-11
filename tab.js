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
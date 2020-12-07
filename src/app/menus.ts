import $ from "jquery";

type Menus = "layout-select";

function _switch(menu: Menus) {
    hide(menu);
    show(menu);
}

// Animations will be added later on
function hide(menu: Menus) {
    $(`.menu.${menu}`).hide();
}
function show(menu: Menus) {
    $(`.menu.${menu}`).show();
}

export { _switch as switch, hide, show };
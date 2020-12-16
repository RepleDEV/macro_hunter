import $ from "jquery";

type Menus = "layout-edit";
const menus: Menus[] = ["layout-edit"];

function _switch(menu: Menus): void {
    for (let i = 0; i < menus.length; i++) {
        if (!$(`.menu.${menus[i]}`).hasClass("hidden")) {
            hide(menus[i]);
            break;
        }
    }
    show(menu);
}

// Animations will be added later on
function hide(menu: Menus): void {
    $(`.menu.${menu}`).addClass("hidden");
}
function show(menu: Menus): void {
    $(`.menu.${menu}`).removeClass("hidden");
}

export { _switch as switch, hide, show };

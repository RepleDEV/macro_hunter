import $ from "jquery";

// Styles
import "../../scss/base.scss";

$(() => {
    showMenu("layout-select")
    $("button#create").on("click", () => {
        console.log("Click");
    });
    $("button#import").on("click", () => {
        // 
    });
});

/* ---------- MENU FUNCTIONS ----------*/

type Menus = "layout-select";

function switchMenus(menu: Menus) {
    hideMenu(menu);
    showMenu(menu);
}

// Animations will be added later on
function hideMenu(menu: Menus) {
    $(`.menu.${menu}`).hide();
}
function showMenu(menu: Menus) {
    $(`.menu.${menu}`).show();
}
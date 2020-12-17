import $ from "jquery";

import { Menu, Menus } from "./menus";

// Styles
import "../../scss/base.scss";

const DEV = "dev";
const isDev = $(() => {
    Menu.show("layout-configure");

    // Will add function later
    const hasLayout = true;
    if (hasLayout) {
        Menus.layout_configure.show_page("no-layouts");
    }
});

$(".menu.layout-configure .page.no-layouts #layout_create").on("click", () => {
    Menus.layout_configure.show_page("layout-create");
});

$(".menu.layout-configure .page.no-layouts #layout_import").on("click", () => {
    Menus.layout_configure.show_page("layout-import");
});

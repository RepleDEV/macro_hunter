import $ from "jquery";
import { Menus } from "./menus";

function init() {
    $(".menu.layout-configure .page.no-layouts #layout_create").on(
        "click",
        () => {
            Menus.layout_configure.show_page("layout-create");
        }
    );

    $(".menu.layout-configure .page.no-layouts #layout_import").on(
        "click",
        () => {
            Menus.layout_configure.show_page("layout-import");
        }
    );
}

export { init };

import $ from "jquery";
import { Menus } from "./menus";
import { Overlay } from "./overlay";

function init(): void {
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

    $(".page.layout-create .keyboard-layout-container .keyboard_key").on("click", (e) => {
        Overlay.show(".page.layout-create>.key-config-container");
        const key = $(e.target).clone();

        console.log(key);

        $(".overlay-container .key-preview>.preview-container").append(key);
    });
}

export { init };

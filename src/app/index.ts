import $ from "jquery";

import * as menus from "./menus";

// Styles
import "../../scss/base.scss";

$(() => {
    menus.show("layout-edit");
    $("button#create").on("click", () => {
        menus.switch("layout-edit");
    });
    $("button#import").on("click", () => {
        menus.switch("layout-edit");
    });
});

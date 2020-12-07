import $ from "jquery";

import * as menus from "./menus";

// Styles
import "../../scss/base.scss";

$(() => {
    menus.show("layout-select");
    $("button#create").on("click", () => {
        console.log("Click");
    });
    $("button#import").on("click", () => {
        //
    });
});

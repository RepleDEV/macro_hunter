import $ from "jquery";

import { Menu } from "./menus";

// Styles
import "../../scss/base.scss";

$(() => {
    Menu.show("layout-configure");
    $("button#create").on("click", () => {
        Menu.switch("layout-configure");
    });
    $("button#import").on("click", () => {
        Menu.switch("layout-configure");
    });
});

$(".menu.layout-configure .page.no-layouts #layout_create").on("click", () => {
    console.log("click");
});

$(".menu.layout-configure .page.no-layouts #layout_import").on("click", () => {
    console.log("clickag");
});
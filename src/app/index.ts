import $ from "jquery";
import { promises as fs } from "fs";
import * as path from "path";

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

$(async () => {
    console.log(views_path);
    await load_app_elements();
    $("body").removeClass("hidden");
});

const views_path = path.resolve("res/views/");
async function load_app_elements(): Promise<void> {
    await load_navbar();
}

async function load_navbar(): Promise<void> {
    const contents = await fs.readFile(path.join(views_path, "navbar.html"), { encoding:"utf-8" });
    $("div#navbar_container").html(contents);
}

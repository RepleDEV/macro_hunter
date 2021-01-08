import $ from "jquery";
import { promises as fs } from "fs";
import * as path from "path";

import { Menu, Menus } from "./menus";

// Styles
import "../../scss/base.scss";

$(".menu.layout-configure .page.no-layouts #layout_create").on("click", () => {
    Menus.layout_configure.show_page("layout-create");
});

$(".menu.layout-configure .page.no-layouts #layout_import").on("click", () => {
    Menus.layout_configure.show_page("layout-import");
});

$(async () => {
    await load_app_elements();

    Menu.show("layout-configure");

    // Will add function later
    const hasLayout = true;
    if (hasLayout) {
        Menus.layout_configure.show_page("no-layouts");
    }

    $("body").removeClass("hidden");
});

const views_path = path.resolve("res/views/");
async function load_app_elements(): Promise<void> {
    await load_navbar();
    await load_menus();
}

async function load_navbar(): Promise<void> {
    const contents = await fs.readFile(path.join(views_path, "navbar.html"), { encoding:"utf-8" });
    $("div#navbar_container").html(contents);
}
async function load_menus(): Promise<void> {
    const dir_contents = await fs.readdir(path.join(views_path, "./menus"));
    for (let i = 0;i < dir_contents.length;i++) {
        const filename = dir_contents[i];
        const contents = await fs.readFile(path.join(views_path, `./menus/${filename}`), { encoding: "utf-8" });
        $("body>main").html($("body>main").html() + contents);
    }
}
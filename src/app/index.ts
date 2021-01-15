import $ from "jquery";
import { promises as fs } from "fs";
import * as path from "path";
import * as listeners from "./listeners";

import { Menu, Menus } from "./menus";

// Styles
import "../../scss/base.scss";

$(async () => {
    await load_app_elements();

    listeners.init();

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
    await load_icons();
}

async function load_navbar(): Promise<void> {
    const contents = await fs.readFile(path.join(views_path, "navbar.html"), {
        encoding: "utf-8",
    });
    $("div#navbar_container").html(contents);
}
async function load_menus(): Promise<void> {
    const dir_contents = await fs.readdir(path.join(views_path, "./menus"));
    for (let i = 0; i < dir_contents.length; i++) {
        const filename = dir_contents[i];
        const contents = await fs.readFile(
            path.join(views_path, `./menus/${filename}`),
            { encoding: "utf-8" }
        );
        $("body>main").append(contents);
    }
    
    await load_keyboard_layout();
}

async function load_keyboard_layout(): Promise<void> {
    const contents = await fs.readFile(path.join(views_path, "keyboard-template.html"), { encoding: "utf-8" });

    $(".page.layout-create>.keyboard-container").replaceWith(contents);
}

async function load_icons(): Promise<void> {
    const rootPath = path.resolve("res/assets/icons/");

    const icons: string[] = [];

    $("svg").each((i, e) => {
        const className = e.getAttribute("class");
        if (className) {
            icons.push(className);
        }
    });
    
    for (let i = 0;i < icons.length;i++) {
        const icon = icons[i];
        const filePath = path.join(rootPath, `${icon}.svg`);
        const fileContents = await fs.readFile(filePath, { encoding: "utf-8" });
        $(`svg.${icon}`).replaceWith(fileContents);
    }
}
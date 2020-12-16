import $ from "jquery";

type Menus = "layout-configure" | "layout-select";
const menus: Menus[] = ["layout-configure", "layout-select"];

class Menu {
    static switch(menu: Menus): void {
        for (let i = 0; i < menus.length; i++) {
            if (!$(`.menu.${menus[i]}`).hasClass("hidden")) {
                this.hide(menus[i]);
                break;
            }
        }
        this.show(menu);
    }
    static hide(menu: Menus): void {
        $(`.menu.${menu}`).addClass("hidden");
    }
    static show (menu: Menus): void {
        $(`.menu.${menu}`).removeClass("hidden");
    }
}

export { Menu };

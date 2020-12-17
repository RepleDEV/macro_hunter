import $ from "jquery";

type Menus = "layout-configure";
const menus: Menus[] = ["layout-configure"];

class Menu {
    static hide(menu: Menus): void {
        this.hide_active();
        hide_element(`.menu.${menu}`);
    }
    static show(menu: Menus): void {
        this.hide_active();
        show_element(`.menu.${menu}`);
    }
    static hide_active(): HTMLElement {
        const element = $("body>main")
            .children()
            .filter(
                (i, e) => $(e).hasClass("menu") && !$(e).hasClass("hidden")
            );
        if (element.length) {
            element.addClass("hidden");
        }
        return element[0];
    }
}

function show_element(element: string): void {
    $(element).removeClass("hidden");
}
function hide_element(element: string): void {
    $(element).addClass("hidden");
}

const Menus = {
    layout_configure: {
        show_page(
            page: "no-layouts" | "layout-create" | "layout-import"
        ): void {
            Menus.layout_configure.hide_active_page();
            show_element(`.menu.layout-configure>.page.${page}`);
        },
        hide_active_page(): void {
            const page = $(".menu.layout-configure")
                .children()
                .filter(
                    (i, e) => $(e).hasClass("page") && !$(e).hasClass("hidden")
                );
            if (page.length) {
                page.addClass("hidden");
            }
        },
    },
};

export { Menu, Menus };

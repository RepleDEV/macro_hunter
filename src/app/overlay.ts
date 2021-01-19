import { show_element, hide_element } from "./menus";
import $ from "jquery";

class Overlay {
    static show(element: string): void {
        const e = $(element);
        const overlay_container = $("div.overlay-container");

        overlay_container.append(e);
        overlay_container.children().removeClass("hidden");

        show_element("div.overlay-container");
    }
    static hide(): void {
        hide_element("div.overlay-container");

        const overlay_container = $("div.overlay-container");
        overlay_container.empty();
    }
}

export { Overlay };
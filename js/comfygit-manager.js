/**
 * ComfyGit Manager - Frontend extension that adds the Manager button
 * Opens the built-in Manager UI when clicked
 */

import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "Comfy.ComfyGitManager",

    async setup() {
        // Modern button (ComfyUI 1.2.49+)
        try {
            const { ComfyButtonGroup } = await import("../../scripts/ui/components/buttonGroup.js");
            const { ComfyButton } = await import("../../scripts/ui/components/button.js");

            const managerButton = new ComfyButton({
                icon: "puzzle",
                action: () => {
                    // Execute the built-in command to open new Manager UI
                    app.extensionManager?.command?.execute('Comfy.OpenManagerDialog');
                },
                tooltip: "ComfyGit Manager",
                content: "Manager",
                classList: "comfyui-button comfyui-menu-mobile-collapse primary"
            });

            const cmGroup = new ComfyButtonGroup(managerButton.element);
            app.menu?.settingsGroup.element.before(cmGroup.element);

            console.log("[ComfyGit] Manager button added to toolbar");
        } catch(e) {
            console.warn("[ComfyGit] Modern menu not available:", e);
        }
    }
});

import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class ActiveSplit extends Plugin {

	async onload() {
    this.app.workspace.on("active-leaf-change", () => {
      console.log("Active Leaf Changed")
    })
	}

	onunload() {

	}
}

import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import './sidebar/sidebar.component';
import './header/header.component';

@customElement("layout-component")
export class LayoutComponent extends TailwindElement({}) {
  render() {
    return html`
      <div class="flex h-screen">
        <sidebar-component></sidebar-component>
        <div class="flex-1 flex flex-col">
          <header-component></header-component>
          <main class="flex-1 p-4">
            <!-- Main content goes here -->
            <slot></slot>
          </main>
        </div>
      </div>
    `;
  }
}

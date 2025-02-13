import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "./header.component.scss?inline";

@customElement("header-component")
export class HeaderComponent extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
      <header class="bg-gray-800 text-white p-4">
        <h1 class="text-3xl">My Simple Header</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">About</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-blue-200 text-yellow-200 p-2 rounded-full text-2xl">Hello world!</button>
    `;
  }
}

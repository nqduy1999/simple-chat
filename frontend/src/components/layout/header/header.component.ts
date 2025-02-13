import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../../shared/tailwind.element";
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import videoCallIcon from '@assets/icons/video-call.svg?raw';
import menuIcon from '@assets/icons/menu.svg?raw';
import phoneIcon from '@assets/icons/phone.svg?raw';


@customElement("header-component")
export class HeaderComponent extends TailwindElement({}) {
  render() {
    return html`
      <header class="bg-white border-b border-gray-200 p-4">
        <div class="flex items-center justify-between">
          <!-- Left side - Profile info -->
          <div class="flex items-center space-x-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="Profile Picture"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 class="text-xl font-semibold text-gray-900">Chat 1</h1>
            </div>
          </div>

          <!-- Right side - Action buttons -->
          <div class="flex items-center space-x-4">
            <!-- Phone call button -->
            <button class="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
                ${unsafeSVG(phoneIcon)}
            </button>
            <!-- Video call button -->
            <button class="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
                ${unsafeSVG(videoCallIcon)}
            </button>

            <!-- More options button -->
            <button class="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
               ${unsafeSVG(menuIcon)} 
            </button>
          </div>
        </div>
      </header>
    `;
  }
}

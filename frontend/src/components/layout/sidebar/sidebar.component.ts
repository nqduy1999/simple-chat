import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../../shared/tailwind.element";

@customElement("sidebar-component")
export class SidebarComponent extends TailwindElement({}) {
  render() {
    const chats = [
      { id: 1, name: "Chat 1", avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg", lastMessage: "Hello there!" },
      { id: 2, name: "Chat 2", avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg", lastMessage: "How are you?" },
      { id: 3, name: "Chat 3", avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg", lastMessage: "Let's catch up soon." },
      { id: 4, name: "Chat 4", avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg", lastMessage: "Meeting at 5 PM." },
    ];

    return html`
      <aside class="w-64 bg-gray-900 text-white h-full p-4">
        <h2 class="text-2xl mb-4">Chats</h2>
        <nav>
          <ul class="space-y-2">
            ${chats.map(chat => html`
              <li class="flex items-center p-2 hover:bg-gray-700 rounded">
                <img src="${chat.avatar}" alt="${chat.name}" class="w-10 h-10 rounded-full mr-3">
                <div>
                  <div class="font-bold">${chat.name}</div>
                  <div class="text-sm text-gray-400">${chat.lastMessage}</div>
                </div>
              </li>
            `)}
          </ul>
        </nav>
      </aside>
    `;
  }
}

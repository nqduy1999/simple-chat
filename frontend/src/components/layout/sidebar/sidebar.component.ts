import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { TailwindElement } from "@shared/tailwind.element";

@customElement("sidebar-component")
export class SidebarComponent extends TailwindElement({}) {
  @state()
  private chats: any[] = [];

  @state()
  private selectedChatId: string = "1";

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchChats();
  }

  async fetchChats() {
    try {
      const response = await fetch('http://localhost:8080/api/chats');
      this.chats = await response.json();
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  }

  private handleChatClick(chatId: string) {
    this.selectedChatId = chatId;
    // Dispatch custom event to notify parent
    const event = new CustomEvent('chat-selected', {
      detail: { chatId },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <aside class="w-64 bg-gray-900 text-white h-full p-4">
        <h2 class="text-2xl mb-4">Chats</h2>
        <nav>
          <ul class="space-y-2">
            ${this.chats.map(chat => html`
              <li 
                class="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer
                      ${chat.id === this.selectedChatId ? 'bg-gray-700' : ''}"
                @click=${() => this.handleChatClick(chat.id)}
              >
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

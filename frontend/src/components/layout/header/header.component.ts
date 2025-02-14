import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TailwindElement } from "@shared/tailwind.element";
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import videoCallIcon from '@assets/icons/video-call.svg?raw';
import menuIcon from '@assets/icons/menu.svg?raw';
import phoneIcon from '@assets/icons/phone.svg?raw';

@customElement("header-component")
export class HeaderComponent extends TailwindElement({}) {
  @property()
  chatId: string = "1";

  @state()
  private chatDetails: any = null;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('chatId')) {
      this.fetchChatDetails();
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchChatDetails();
  }

  async fetchChatDetails() {
    try {
      const response = await fetch(`http://localhost:8080/api/chats/${this.chatId}`);
      const chat = await response.json();
      this.chatDetails = chat[0];
    } catch (error) {
      console.error('Error fetching chat details:', error);
    }
  }

  render() {
    return html`
      <header class="bg-white border-b border-gray-200 p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <img
              src="${this.chatDetails?.avatar || 'https://via.placeholder.com/40'}"
              alt="Profile Picture"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 class="text-xl font-semibold text-gray-900">${this.chatDetails?.sender || 'Loading...'}</h1>
              <span class="text-sm text-green-500">● Online</span>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <button class="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </button>
            <button class="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </button>
            <button class="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
    `;
  }
}

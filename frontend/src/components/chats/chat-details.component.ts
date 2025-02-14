import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TailwindElement } from "@shared/tailwind.element";

@customElement("chat-details-component")
export class ChatDetailsComponent extends TailwindElement({}) {
  @property()
  chatId: string = "1";

  @state()
  private messages: any[] = [];

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('chatId')) {
      this.fetchMessages();
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchMessages();
  }

  async fetchMessages() {
    try {
      const response = await fetch(`http://localhost:8080/api/chats/${this.chatId}`);
      this.messages = await response.json();
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }

  render() {
    return html`
      <div class="flex flex-col h-full bg-gray-100">
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          ${this.messages.map(message => html`
            <div class="flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="flex ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2">
                <img 
                  src="${message.avatar}" 
                  alt="Avatar" 
                  class="w-8 h-8 rounded-full ${message.sender === 'user' ? 'ml-2' : 'mr-2'}"
                >
                <div class="${message.sender === 'user' 
                  ? 'bg-purple-600 text-white rounded-l-lg rounded-tr-lg' 
                  : 'bg-white text-gray-800 rounded-r-lg rounded-tl-lg'} 
                  p-3 max-w-md shadow">
                  <p>${message.text}</p>
                  <p class="text-xs ${message.sender === 'user' ? 'text-purple-100' : 'text-gray-500'} mt-1">
                    ${new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          `)}
        </div>

        <!-- Message input area -->
        <div class="border-t bg-white p-4">
          <div class="flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              class="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-purple-400"
            >
            <button class="p-2 text-white bg-purple-600 rounded-full hover:bg-purple-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }
} 
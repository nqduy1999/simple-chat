import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "@shared/tailwind.element";

@customElement("chat-details-component")
export class ChatDetailsComponent extends TailwindElement({}) {
  render() {
    const messages = [
      {
        id: 1,
        sender: "user",
        text: "Hey, how are you?",
        timestamp: "10:00 AM",
        avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
      },
      {
        id: 2,
        sender: "other",
        text: "I'm good! Thanks for asking. How about you?",
        timestamp: "10:02 AM",
        avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
      },
      {
        id: 3,
        sender: "user",
        text: "Doing great! Just working on some new features.",
        timestamp: "10:05 AM",
        avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
      }
    ];

    return html`
      <div class="flex flex-col h-full bg-gray-100 rounded-lg">
        <!-- Chat messages area -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          ${messages.map(message => html`
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
                    ${message.timestamp}
                  </p>
                </div>
              </div>
            </div>
          `)}
        </div>

        <!-- Message input area -->
        <div class="border-t bg-white p-4">
          <div class="flex items-center space-x-2">
            <button class="p-2 text-gray-500 hover:text-purple-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13">
                </path>
              </svg>
            </button>
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
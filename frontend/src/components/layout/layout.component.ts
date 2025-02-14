import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { TailwindElement } from "@shared/tailwind.element";

import './sidebar/sidebar.component';
import './header/header.component';
import '@components/chats/chat-details.component';

@customElement("layout-component")
export class LayoutComponent extends TailwindElement({}) {
  @state()
  private selectedChatId: string = "1";

  private handleChatSelect(event: CustomEvent) {
    this.selectedChatId = event.detail.chatId;
  }

  render() {
    return html`
      <div class="flex h-screen">
        <sidebar-component
          @chat-selected=${this.handleChatSelect}
        ></sidebar-component>
        <div class="flex-1 flex flex-col">
          <header-component .chatId=${this.selectedChatId}></header-component>
          <chat-details-component .chatId=${this.selectedChatId}></chat-details-component>
        </div>
      </div>
    `;
  }
}

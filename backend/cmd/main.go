// main.go
package main

import (
	"log"
	"net/http"
	"github.com/nqduy1999/simple-chat/internal/handler"
	"github.com/nqduy1999/simple-chat/internal/repository/memory"
	"github.com/nqduy1999/simple-chat/internal/service"
)

func main() {
	// Initialize repositories
	chatRepo := memory.NewChatRepository()
	messageRepo := memory.NewMessageRepository()

	// Initialize services
	chatService := service.NewChatService(chatRepo, messageRepo)

	// Initialize handlers
	chatHandler := handler.NewChatHandler(chatService)

	// Setup routes
	http.HandleFunc("/api/chats", chatHandler.HandleChats)
	http.HandleFunc("/api/chats/", chatHandler.HandleChatDetails)

	// Start server
	log.Println("Server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

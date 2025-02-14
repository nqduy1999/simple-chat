package service

import (
	"github.com/nqduy1999/simple-chat/internal/domain"
)

type ChatService struct {
	chatRepo    domain.ChatRepository
	messageRepo domain.MessageRepository
}

func NewChatService(chatRepo domain.ChatRepository, messageRepo domain.MessageRepository) *ChatService {
	return &ChatService{
		chatRepo:    chatRepo,
		messageRepo: messageRepo,
	}
}

func (s *ChatService) GetAllChats() ([]domain.Chat, error) {
	return s.chatRepo.GetAll()
}

func (s *ChatService) GetChatMessages(chatID string) ([]domain.Message, error) {
	return s.messageRepo.GetByChatID(chatID)
}

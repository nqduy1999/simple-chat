package memory

import (
	"sync"
	"time"
	"github.com/nqduy1999/simple-chat/internal/domain"
)

type chatRepository struct {
	mu    sync.RWMutex
	chats []domain.Chat
}

func NewChatRepository() domain.ChatRepository {
	return &chatRepository{
		chats: []domain.Chat{
			{
				ID:          "1",
				Name:        "Chat 1",
				Avatar:      "https://via.placeholder.com/40",
				LastMessage: "Hello there!",
				UpdatedAt:   time.Now(),
			},
			{
				ID:          "2",
				Name:        "Chat 2",
				Avatar:      "https://via.placeholder.com/40",
				LastMessage: "How are you?",
				UpdatedAt:   time.Now(),
			},
		},
	}
}

func (r *chatRepository) GetAll() ([]domain.Chat, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	return r.chats, nil
}

func (r *chatRepository) GetByID(id string) (*domain.Chat, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	for _, chat := range r.chats {
		if chat.ID == id {
			return &chat, nil
		}
	}
	return nil, nil
}

func (r *chatRepository) Save(chat *domain.Chat) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	r.chats = append(r.chats, *chat)
	return nil
}

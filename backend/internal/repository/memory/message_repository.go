package memory

import (
    "sync"
    "time"
    "github.com/nqduy1999/simple-chat/internal/domain"
)

type messageRepository struct {
    mu       sync.RWMutex
    messages map[string][]domain.Message
}

func NewMessageRepository() domain.MessageRepository {
    return &messageRepository{
        messages: map[string][]domain.Message{
            "1": {
                {
                    ID:        "1",
                    ChatID:    "1",
                    Sender:    "user",
                    Text:      "Hello there!",
                    Timestamp: time.Now(),
                    Avatar:    "https://via.placeholder.com/40",
                },
                {
                    ID:        "2",
                    ChatID:    "1",
                    Sender:    "other",
                    Text:      "Hi! How are you?",
                    Timestamp: time.Now(),
                    Avatar:    "https://via.placeholder.com/40",
                },
            },
        },
    }
}

func (r *messageRepository) GetByChatID(chatID string) ([]domain.Message, error) {
    r.mu.RLock()
    defer r.mu.RUnlock()
    return r.messages[chatID], nil
}

func (r *messageRepository) Save(message *domain.Message) error {
    r.mu.Lock()
    defer r.mu.Unlock()
    
    r.messages[message.ChatID] = append(r.messages[message.ChatID], *message)
    return nil
} 
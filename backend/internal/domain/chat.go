package domain

import "time"

type Chat struct {
    ID          string    `json:"id"`
    Name        string    `json:"name"`
    Avatar      string    `json:"avatar"`
    LastMessage string    `json:"lastMessage"`
    UpdatedAt   time.Time `json:"updatedAt"`
}

type ChatRepository interface {
    GetAll() ([]Chat, error)
    GetByID(id string) (*Chat, error)
    Save(chat *Chat) error
} 
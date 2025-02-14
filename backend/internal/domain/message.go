package domain

import "time"

type Message struct {
    ID        string    `json:"id"`
    ChatID    string    `json:"chatId"`
    Sender    string    `json:"sender"`
    Text      string    `json:"text"`
    Timestamp time.Time `json:"timestamp"`
    Avatar    string    `json:"avatar"`
}

type MessageRepository interface {
    GetByChatID(chatID string) ([]Message, error)
    Save(message *Message) error
} 
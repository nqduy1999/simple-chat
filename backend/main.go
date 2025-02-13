// main.go
package main

import (
    "log"
    "net/http"
    "golang.org/x/net/websocket"
)

var clients = make(map[*websocket.Conn]bool)
var broadcast = make(chan string)

func main() {
    http.Handle("/ws", websocket.Handler(handleConnections))

    go handleMessages()

    log.Println("Server started on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleConnections(ws *websocket.Conn) {
    clients[ws] = true
    defer ws.Close()

    for {
        var msg string
        if err := websocket.Message.Receive(ws, &msg); err != nil {
            log.Printf("error: %v", err)
            delete(clients, ws)
            break
        }
        broadcast <- msg
    }
}

func handleMessages() {
    for {
        msg := <-broadcast
        for client := range clients {
            if err := websocket.Message.Send(client, msg); err != nil {
                log.Printf("error: %v", err)
                client.Close()
                delete(clients, client)
            }
        }
    }
}
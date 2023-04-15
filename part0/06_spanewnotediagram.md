# Creating a new Note (SPA)

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: Browser runs javascript code to reload the notes list and display it (without requesting a new html page)

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: POST Request contains the value sumbitted in the form as its body.
```
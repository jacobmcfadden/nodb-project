Visual mockup <a href="https://xd.adobe.com/view/afdaafbd-7ca2-4c18-a90c-c70fe1b48b36-fa89/?fullscreen">here</a>

# Estimation NoDB Projects!

### MVP
Description: Simple estimate app that allows CRUD on project estimates.
</br>
Features:
- User can add new estimate
- User can view current estimates
- user can delete estimates
- user can edit title of estimate
- user can edit scope of estimate
- user can filter estimates by title using the search bar

### ICEBOX
- break scope into multiple calculated line items that make up the scope
- turn total price into a total of all line items
- make all items editable (client, property, notes, etc)

### SERVER
Dependencies:
- express

Endpoints:
- app.get("/api/estimates")
- app.post("/api/estimates")
- app.delete("/api/estimates/:id")
- app.put("/api/estimates/title/:id")
- app.put("/api/todos/scope/:id")

Structure:
- server/
    - index.js
    - controller.js
    - estimates.json

### CLIENT
Dependencies:
- axios

Structure:
- src/
    - App.js
    - App.css
    - reset.css
    - components/
        - Header.js
        - Toolbar.js
        - List.js
        - Estimate.js

#### ***Connecting front end and backend config in package.json***
<code>  
"main": "./server/index.js",</br>
"proxy": "http://localhost:4004",
</code>
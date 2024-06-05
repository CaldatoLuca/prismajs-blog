# Prisma JS intro

Creare un progetto node ed installare **Prisma** (**_CLI_** e **_Client_**)

Definire i **Model** (**_Post_**, **_Category_**, **_Tag_**)

### Post

- title
- slug (deve essere univoco)
- image (non obbligatoria)
- content
- published (boolean)
- createdAt
- updatedAt

### Category (one to many)

- name
- createdAt
- updatedAt

### Tag (many to many)

- name
- createdAt
- updatedAt

Creare le funzioni per:

- creare una Categoria
- creare un Tag
- creare un Post
- leggere un Post usando lo slug
- restituisce l'elenco di tutti i Post
- modificare un Post
- elimina un Post

### Bonus

- restituisca solo i Post pubblicati
- restituisca solo i Post che contengono una determinata stringa nel contenuto

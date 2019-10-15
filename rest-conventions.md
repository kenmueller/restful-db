| Action                      | Method   | Route        | Response                                     |
|-----------------------------|----------|--------------|----------------------------------------------|
| List all users              | `GET`    | `/users`     | Array of users                               |
| Get a single user           | `GET`    | `/users/:id` | Single user object                           |
| Create user                 | `POST`   | `/users`     | Single user object (just created)            |
| Update all user properties  | `PUT`    | `/users/:id` | Single user object (with updated properties) |
| Update some user properties | `PATCH`  | `/users/:id` | Single user object (with updated properties) |
| Delete user                 | `DELETE` | `/users/:id` | Nothing                                      |

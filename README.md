# Hs-app
Evaluation app

## to run

- `cd client ` && `npm i && npm start`
- `cd server ` && `npm i && npm start`

### Notes:
1. PORT 500 is being used by something else; Do not use port 5000.
2. use the same values as received in req.body. Ensure that the key mapping between models and the parsed request body are same.
3. use proxy in react native project; Backend: do not allow cors from everywhere. Add restricted domains from where to expect requests.
4. Use linter, prettier
5. Generally sanitize the user input. Do not take in req.body and store as is
6. Do not leave credentials in the source tree. Use env configuration files
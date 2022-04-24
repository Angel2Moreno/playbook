const User = require('../../app/models/user')

const UserView = require('./../../app/view/UserView')

describe("Tests for UserView", () => {
    test("1) Return an error object when try to create a new user whit a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Payload does not exist/)
    })
    test("2) Return an error object when try to create a new payload with invalid properties", () => {
        const payload = {username: null, name: "hola", id: 1}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/need to have a valid value/)
    })
    test("3) Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username" }
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/need to have a valid value/)
    })
    test("4) Create a user by a given valid payload", () => {
        const payload = { username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })
})
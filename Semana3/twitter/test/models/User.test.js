const User = require('./../../app/models/user')

describe("unit test for User class",() =>{
    test('create an User object',()=>{
        const user = new User(1,"angel2dm","angel","bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("angel2dm")
        expect(user.name).toBe("angel")
        expect(user.bio).toBe("bio")
        expect(user.dataCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test('add getters',()=>{
        const user = new User (1, "angel2dm", "angel", "bio")
        expect(user.getUsername).toBe("angel2dm")
        expect(user.getBio).toBe("bio")
        expect(user.getDataCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('add setter',()=>{
        const user = new User(1,"angel2dm","angel","bio")
        user.setUsername = "angel2dm"
        expect(user.username).toBe("angel2dm")

        user.setBio = "NewBio"
        expect(user.bio).toBe("NewBio")
    })
})

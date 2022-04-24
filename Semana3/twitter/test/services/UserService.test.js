
const UserService = require('./../../app/services/UserServices')

describe("test for userService",()=>{
    test("1- create a new user using the UserService",()=>{
        const user = UserService.create(1,"angel2dm","angel")
        expect(user.username).toBe("angel2dm")
        expect(user.name).toBe("angel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2- test all user data in list ",()=>{
        const user = UserService.create(1,"angel2dm","angel")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("angel2dm")
        expect(userInfoInList[2]).toBe("angel")
        expect(userInfoInList[3]).toBe("SinBio")
    })
    test("3- update username",()=>{
        const user = UserService.create(1,"angel2dm","angel")
        UserService.updateUserUsername(user,"angel")
        expect(user.username).toBe("angel")
    })
    test("4- Give a list of users give me the list of name", ()=>{
        const user1 = UserService.create(1,"angel2dm1","angel")
        const user2 = UserService.create(2,"angel2dm2","angel")
        const user3 = UserService.create(3,"angel2dm3","angel")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("angel2dm1")
        expect(usernames).toContain("angel2dm2")
        expect(usernames).toContain("angel2dm3")
    })
})
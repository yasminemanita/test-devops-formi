import {it,expect,afterEach, vi} from "vitest";
import { getUsername,getPassword, getAll, getAllByThrowingError, generateTokenPromise, testFunction, TestMock } from "./FunctionsToTest";

//arrange
let username;
let password;
//vi.mock('fs')
afterEach(()=>{
    username="mariem";
    password="Mar1234567";

})
 describe.concurrent("Username Tests",()=>{
    //let username="lze@f"
    //act+assert
    it("Test Username",()=>{
        expect(getUsername(username)).toBeDefined()
    })
    it("Test special letter in Username",()=>{
        expect(getUsername(username)).not.toBe(null)
    })
    
}) 
describe("Password Tests",()=>{
    //let password="fdgytRT77"
    //act+assert
    it("Test Password Defined",()=>{
        expect(getPassword(password)).toBeDefined()
    }) 
    it("Test Password value",()=>{
        expect(getPassword(password)).not.toBe(null)
    }) 
})
describe("Intergration Test",()=>{
    //let password="mar"
    //act+assert
    
    it("Test Username and password",()=>{
        expect(getAll(username,password)).toBeTruthy()
    })

})
describe("Test the creation of hash ",()=>{
    
    //act+assert
    it("Test hash",()=>{
        expect(generateTokenPromise(password)).resolves.toBe;
    })
})
describe("Intergration Test By throwing Errors",()=>{
    //act
    const TestAll=()=>getAllByThrowingError(username,password);
    //assert
    it("Test Username and password",()=>{
        expect(TestAll).not.toThrow();
    })
})
describe("Spies Test",()=>{
    //act+assert
    const logger=vi.fn();
    testFunction(logger,password)
    it("Test logger",()=>{
        expect(logger).toBeCalled();
    })
})



describe('First test', () => {
    let tesVar: any

    beforeEach(()=> {
        tesVar = {}
    })

    it('Should return true', () => {
        // arrange
        tesVar.a = false
        //act
        tesVar.a = true
        //assert
        expect(tesVar.a).toBeTrue()
    })
})

describe('User service Test', () => {
    let tesVar: any
    beforeEach(()=> {
        tesVar = {}
    })
    describe('getUser() method', () => {
        it('Should return the current user', () => {
            // arrange
            tesVar.a = false
            //act
            tesVar.a = true
            //assert
            expect(tesVar.a).toBe(true)
        })
    })
})
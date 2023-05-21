import{render,screen} from"@testing-library/react"


import Test from "./test"

  describe("jest",()=>{
    it("should work",()=>{
        expect(1).toBe(1)
    })
    it("should display elements",()=>{
        render(<Test/>)
    })
  })
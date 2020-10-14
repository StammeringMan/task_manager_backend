import supertest from "supertest";
import app from "../../index.js";


describe("Testing the user API", () => {
    
    
    it("should fetch all users", async () => {
        const response = await supertest(app).get('/allUsers');

        expect(response.status).toBe(200)
    })
})
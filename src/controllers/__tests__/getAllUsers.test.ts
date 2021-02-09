import app from "../../app";
import request from "supertest";

describe("Users Base Operations", () => {
    const agent = request.agent(app);

    // afterAll(() => { });

    test("Shoulud get all users", async () => {
        const expectedUsers = [
            {
                name: "Tom",
                age: 28
            },
            {
                name: "Jerry",
                age: 22
            }
        ];
        expect.assertions(1);
        const response = await agent.get("/api/users");
        expect(response.body).toEqual({data: expectedUsers});
    });
});

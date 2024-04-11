import { jest } from '@jest/globals';
import request from "supertest";
import app from "../src/server";

describe('increase', () => {
    test('increase API is called', async () => {
        const response = await request(app).put("/increased");
        return expect(response.status).toBe(201);      
    })
})
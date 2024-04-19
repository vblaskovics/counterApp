import {expect, jest, test} from '@jest/globals';
import request from "supertest";
import app from "../src/server";
import { increaseClick } from "../src/public/client";

// describe('increase', () => {
//     test('increase API is called', async () => {
//         const response = await request(app).put("/increased");
//         return expect(response.status).toBe(201);      
//     })
// })

describe('increase', () => {
    test('increase API is called', async () => {
        const mockIncreaseClick = jest.fn<typeof increaseClick>();
        increaseClick();
        expect (mockIncreaseClick).toHaveBeenCalledTimes(1); 
    })
})
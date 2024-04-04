"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Client-side code is running.");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const startNumber = document.getElementById("countNumber");
function loadNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('/getNumber', { method: 'GET' })
            .then(function (response) {
            return __awaiter(this, void 0, void 0, function* () {
                if (response.ok) {
                    yield response.json()
                        .then(function (data) {
                        console.log(data);
                        if (startNumber)
                            startNumber.innerHTML = data;
                    });
                    return;
                }
                throw new Error("Request failed.");
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    });
}
if (increaseButton) {
    increaseButton.addEventListener('click', function (e) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Increase button is clicked!");
            yield fetch('/increased', { method: 'PUT' })
                .then(function (response) {
                if (response.ok) {
                    console.log("Increase recorded!");
                    loadNumber();
                    return;
                }
                throw new Error("Request failed.");
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    });
}
if (decreaseButton) {
    decreaseButton.addEventListener('click', function (e) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Decrease button is clicked!");
            yield fetch("/decreased", { method: "PUT" })
                .then(function (response) {
                if (response.ok) {
                    console.log("Decrease recorded!");
                    loadNumber();
                    return;
                }
                throw new Error("Request failed.");
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    });
}

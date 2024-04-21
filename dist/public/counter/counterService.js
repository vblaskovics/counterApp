var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CounterService {
    constructor() { }
    get(route) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(route, { method: "GET" });
            if (!response.ok) {
                console.log(new Error("Request failed."));
            }
            return response.json();
        });
    }
    put(route) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(route, { method: "PUT" });
            if (!response.ok) {
                console.log(new Error("Put failed."));
            }
        });
    }
    loadCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const counterValue = yield this.get("/getNumber");
                return `${counterValue}`;
            }
            catch (error) {
                throw error;
            }
        });
    }
    increaseCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.put('/increased');
        });
    }
    decreaseCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.put('/decreased');
        });
    }
}

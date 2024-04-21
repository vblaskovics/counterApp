var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CounterComponent {
    constructor(_counterService) {
        this.counterService = _counterService;
    }
    init() {
        this.initElements();
        this.initListeners();
        this.updateCounter();
    }
    initElements() {
        var _a, _b, _c;
        this.increaseButton = (_a = document.getElementById("increaseButton")) !== null && _a !== void 0 ? _a : undefined;
        this.decreaseButton = (_b = document.getElementById("decreaseButton")) !== null && _b !== void 0 ? _b : undefined;
        this.counterElement = (_c = document.getElementById("countNumber")) !== null && _c !== void 0 ? _c : undefined;
    }
    initListeners() {
        if (this.increaseButton) {
            this.increaseButton.addEventListener("click", () => {
                this.increaseClick();
            });
        }
        if (this.decreaseButton) {
            this.decreaseButton.addEventListener("click", () => {
                this.decreaseClick();
            });
        }
    }
    updateCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            const counterValue = yield this.counterService.loadCounter();
            if (this.counterElement) {
                this.counterElement.innerText = counterValue;
            }
        });
    }
    increaseClick() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Increase button is clicked!");
            yield this.counterService.increaseCounter();
            yield this.updateCounter();
        });
    }
    decreaseClick() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Decrease button is clicked!");
            yield this.counterService.decreaseCounter();
            yield this.updateCounter();
        });
    }
}

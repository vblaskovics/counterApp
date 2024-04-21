import { CounterService as CounterService } from "./counterService.js";

export class CounterComponent {
  increaseButton?: HTMLElement;
  decreaseButton?: HTMLElement;
  counterElement?: HTMLElement;

  counterService: CounterService;

  constructor(_counterService: CounterService) {
    this.counterService = _counterService;
  }

  init() {
    this.initElements();
    this.initListeners();
    this.updateCounter();
  }

  initElements() {
    this.increaseButton = document.getElementById("increaseButton") ?? undefined;
    this.decreaseButton = document.getElementById("decreaseButton") ?? undefined;
    this.counterElement = document.getElementById("countNumber") ?? undefined;
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

  async updateCounter() {
    const counterValue = await this.counterService.loadCounter();
    if (this.counterElement) {
      this.counterElement.innerText = counterValue;
    }
  }

  async increaseClick(): Promise<void> {
    console.log("Increase button is clicked!");
    await this.counterService.increaseCounter();
    await this.updateCounter();
  }

  async decreaseClick(): Promise<void> {
    console.log("Decrease button is clicked!");
    await this.counterService.decreaseCounter();
    await this.updateCounter();
  }
}



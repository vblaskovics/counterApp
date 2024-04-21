export class CounterService {
  constructor() {}

  private async get(route:string): Promise<any> {
    const response = await fetch(route, { method: "GET" })
    if (!response.ok) {
      console.log(new Error("Request failed."));
    }
    return response.json();
  }

  private async put(route:string) {
    const response = await fetch(route, { method: "PUT" })
    if (!response.ok) {
      console.log(new Error("Put failed."));
    }
  }

  async loadCounter(): Promise<string> {
    try {
      const counterValue = await this.get("/getNumber") as string;
      return `${counterValue}`;
    } catch (error) {
      throw error;
    }
  }

  async increaseCounter() {
    await this.put('/increased');
  }

  async decreaseCounter() {
    await this.put('/decreased');
  }
}
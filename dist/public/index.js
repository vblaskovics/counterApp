import { CounterComponent } from "./counter/counterComponent.js";
import { CounterService } from "./counter/counterService.js";
const service = new CounterService();
const counter = new CounterComponent(service);
counter.init();


import { MetricModule, FistEncounter } from "./lib/metricmodules.js";

/** Returns `Hello World` in bold */
export function multiplyNumbers(a, b) {
  return a * b;
}

/**Says hello to General Kenobi */
export function HelloThere() {
    alert("... General Kenobi");
}

export function Greeting(name) {
    alert(`Hi, ${name}`);
}

export {
    MetricModule,
    FistEncounter
}


"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggerD(logString) {
    console.log("Logger Factory");
    return function (constructor) {
        console.log(logString || "Logging...");
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("Template Logger");
    return function (originalConstructor) {
        console.log("rendering template");
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let PersonD = class PersonD {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
PersonD = __decorate([
    LoggerD("Logging - PERSON"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], PersonD);

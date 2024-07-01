"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is done"), 2000);
});

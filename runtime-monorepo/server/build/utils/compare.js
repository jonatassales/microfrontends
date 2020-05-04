"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compare(first, second) {
    return first
        .trim()
        .toUpperCase()
        .includes(second.trim().toUpperCase());
}
exports.default = compare;

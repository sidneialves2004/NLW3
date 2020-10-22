"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(image) {
        return {
            id: image.id,
            url: `http://192.168.1.104:3333/uploads/${image.path}`
        };
    },
    renderMany(images) {
        return images.map(image => this.render(image));
    }
};

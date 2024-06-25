
const arrayHOFUtils = {
    sum: function() {
        return this.reduce((acc, curr) => acc + curr, 0);
    },

    average: function() {
        return this.sum() / this.length;
    },

    median: function() {
        const sorted = [...this].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },

    mode: function() {
        const frequency = {};
        let maxFreq = 0;
        let mode;
        for (const item of this) {
            frequency[item] = (frequency[item] || 0) + 1;
            if (frequency[item] > maxFreq) {
                maxFreq = frequency[item];
                mode = item;
            }
        }
        return mode;
    },

    unique: function() {
        return [...new Set(this)];
    },

    range: function() {
        return Math.max(...this) - Math.min(...this);
    },

    shuffle: function() {
        const shuffled = [...this];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    chunk: function(size) {
        const chunks = [];
        for (let i = 0; i < this.length; i += size) {
            chunks.push(this.slice(i, i + size));
        }
        return chunks;
    },

    intersect: function(arr) {
        return this.filter(value => arr.includes(value));
    },

    difference: function(arr) {
        return this.filter(value => !arr.includes(value));
    }
};

module.exports = arrayHOFUtils;

// Extend Array prototype with the utility functions
Object.assign(Array.prototype, arrayHOFUtils);

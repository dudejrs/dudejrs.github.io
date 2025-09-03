import PCCSBright from './PCCSBright';
import PCCSLight from './PCCSLight';
import Color from './color';

function chooseRandom(n, colors) {
    const l = colors.length;
    if (n <= 0 || n >= l) return colors;

    const set = new Set();
    let cur = Math.floor(Math.random() * l);

    while (set.size < n) {
        set.add(colors[cur]);
        cur = (cur + Math.floor(Math.random() * (l - 1))) % l;
    }
    return Array.from(set);
}

export default class extends Color {
    static map = {
        'C++': 1,
        Java: 2,
        Javascript: 3,
        Python: 4,
        Go: 5,
        Kotlin: 6,
        Typescript: 7,
        Done: 12,
        'In progress': 16,
    };

    static getIndex(name, colors) {
        if (!this.map[name]) {
            this.map[name] = Math.floor(Math.random() * colors.length);
        }
        return this.map[name];
    }

    static diverse(n = -1) {
        return chooseRandom(n, PCCSBright.diverse());
    }

    static diverseLight(n = -1) {
        return chooseRandom(n, PCCSLight.diverse());
    }

    static getColorBy(name) {
        const colors = this.diverse();
        return colors[this.getIndex(name, colors)];
    }

    static getColorLightBy(name) {
        const colors = this.diverseLight();
        return colors[this.getIndex(name, colors)];
    }
}

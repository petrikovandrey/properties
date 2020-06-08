//task 1
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

export default function orderByProps(obj, keys) {
    let m = [];
    let s = [];
    for (const k in obj) {
        m.push({ key: k, value: obj[k] });
    };

    keys.forEach(element => {
        s.push({ key: element, value: obj[element] });
    });

    m = sorter(m);
    m.forEach(el => {
        if (s.find(ithem => ithem.key === el.key) === undefined) {
            s.push(el);
        }
    });

    return s;
}

export function sorter(list) {
    list.sort(function (a, b) {
        var nameA = a.key.toLowerCase(), nameB = b.key.toLowerCase();
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    return list;
}

// orderByProps(obj, ["name", "level"]);

// task 2
let hits = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
        }
    ]
};

export function getHits(hits) {
    let listHits = [];

    for (let { id, name, icon, description = "Описание недоступно" } of hits.special) {
        listHits.push([id, name, icon, description]);
    }
    return listHits
}

// getHits(hits);

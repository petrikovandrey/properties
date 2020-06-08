//task 1
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

function orderByProps(obj, keys) {
    let m = [];
    let c = [];
    for (const k in obj) {
        m.push({ key: k, value: obj[k] });
    };

    keys.forEach(element => {
        c.push({ key: element, value: obj[element] });
    });

    m = sorter(m);
    console.log(m);
    m.forEach(el => {
        if (c.find(ithem => ithem.key === el.key) === undefined) {
            c.push(el);
        }
    });

    console.log(c);
}

function sorter(list) {
    list.sort(function (a, b) {
        var nameA = a.key.toLowerCase(), nameB = b.key.toLowerCase();
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    })
    return list;

}

orderByProps(obj, ["name", "level"]);

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

function getHits(hits) {
    let listHits = [];
    for (let { special: { id: id, name: n, icon: i, description: d } } of hits) {
        console.log([id, n, i, d]);
        hits.push([id, n, i, d]);
    }
    return listHits
}

// getHits(hits);

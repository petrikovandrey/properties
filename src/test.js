// import { getHits, sorter, orderByProps } from "../src/index.js";
import orderByProps from "../src/index.js";

test("sort with condition", () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const result = orderByProps(obj, ["name", "level"]);
    const expected = [
        { key: "name", value: "мечник" }, // порядок взят из массива с ключами
        { key: "level", value: 2 }, // порядок взят из массива с ключами
        { key: "attack", value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
        { key: "defence", value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
        { key: "health", value: 10 } // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ]
    expect(result).toEqual(expected);
})
test("sorter", () => {
    const result = sorter([
        { key: "name", value: "мечник" }, // порядок взят из массива с ключами
        { key: "level", value: 2 }, // порядок взят из массива с ключами
        { key: "attack", value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
        { key: "defence", value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
        { key: "health", value: 10 } // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ]);
    const expected = [
        { key: "attack", value: 80 }, 
        { key: "defence", value: 40 }, 
        { key: "health", value: 10 },
        { key: "level", value: 2 }, 
        { key: "name", value: "мечник" }
    ];
    expect(result).toEqual(expected);
})

test("getHits", () => {
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
    const result = getHits(hits);
    const expected = [ {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно'
    }]
    expect(result).toEqual(expected);
})
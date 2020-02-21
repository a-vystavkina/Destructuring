const objHero = {
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
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',

    },
  ],
};

export default function getAttack(obj) {
  const { special } = obj;
  const array = [];
  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = special[i];
    array.push({
      id, name, description, icon,
    });
  }
  return array;
}

console.log(getAttack(objHero));

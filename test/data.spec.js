import { sortData, filterData, average } from '../src/data.js';


describe('sortData', () => {
  const namesPokemon =
    [{ name: "bulbasaur", type: "grass" },
    { name: "pikachu", type: "eletric" },
    { name: "ivysaur", type: "grass" }
    ];

  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns ``', () => {
    expect(sortData(namesPokemon, "name", "asc")).toEqual([
      { name: "bulbasaur", type: "grass" },
      { name: "ivysaur", type: "grass" },
      { name: "pikachu", type: "eletric" }]);
  });
  it('returns ``', () => {
    expect(sortData(namesPokemon, "name", "desc")).toEqual([
      { name: "pikachu", type: "eletric" },
      { name: "ivysaur", type: "grass" },
      { name: "bulbasaur", type: "grass" }
    ]);
  });
});

describe('filterData', () => {
  const typesPokemon = [
    { name: "bulbasaur", type: "grass" },
    { name: "ivysaur", type: "grass" },
    { name: "pikachu", type: "eletric" }
  ];

  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns ``', () => {
    expect(filterData(typesPokemon, "grass")).toEqual(expect.not.arrayContaining([{ name: "pikachu", type: "eletric" }]));
  });
});

describe('average', () => {
  const averagePokemon = [{
    "stats": {
      "base-defense": "1", "base-attack": "2", "base-stamina": "3",
    }
    
  }]
  // console.log(averagePokemon[0].stats["base-defense"]);

  it('is a function', () => {
    expect(typeof average).toBe('function');
  });

  it('returns ``', () => {
    console.log(average(averagePokemon))
    expect(average(averagePokemon)).toEqual(averagePokemon(2));
    
  })
})  
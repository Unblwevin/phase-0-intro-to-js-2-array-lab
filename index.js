const cats = ["Milo", "Otis", "Garfield"];
const copyofcats = cats.slice();

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(name){
    cats.push("Ralph")
  }

  function destructivelyPrependCat(name){
    cats.unshift("Bob")
  }
  function destructivelyRemoveLastCat(name){
    cats.pop("Milo", "Otis")
  }

  function destructivelyRemoveFirstCat(name){
    cats.shift("Otis","Garfield")
  }

  beforeEach(function () {
    copyofcats.length = 0;
  
    copyofcats.push("Milo", "Otis", "Garfield");
  });

  function appendCat(name){
    copyofcats.push("Broom");
    return(copyofcats);
  }

  function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats;
  }

  function removeLastCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.pop(name);
    return copyOfCats;
  }

  function removeFirstCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.shift(name);
    return copyOfCats;
  }
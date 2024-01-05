// Para pasar el test, completar dónde esté incompleto, y corregir los tipos unknown.

class Individual {
  name;
  age;

  constructor(name: string, age: number) {
    // Completar
    this.name = name;
    this.age = age;
  }
}

class Family {
  members;
  name;

  constructor(members: Individual[], name: string) {
    // Completar
    this.members = members;
    this.name = name;
  }

  getOldestMember() {
    const membersAges = this.members.map((individual) => individual.age); //& -> MAP CREA UN NUEVO ARRAY CON EDADES
    const maxAge = Math.max(...membersAges); //! -> TOMA LOS ELEMENTOS DEL ARRAY CON LOS ... COMO PARAMETROS Y EL MÉTODO MATHMAX ENCUENTRA EL MAYOR
    return maxAge; //^ Y RETORNA LA EDAD MAXINA
  }
}

//! ??????? ACÁ PEDI AYUDA
class Society {
  members;

  constructor(members: Family[]) {
    // Completar
    this.members = members;
    return; 
  }

  getMembers(): Family[] {
    // Completar
    return this.members;
  }
}

// NO MODIFICAR -------------

(function testFamily() {
  const a = new Individual("A", 26);
  const b = new Individual("B", 19);
  const c = new Individual("C", 58);

  const one = new Individual("1", 36);
  const two = new Individual("2", 28);
  const three = new Individual("3", 2);

  const lettersFamily = new Family([a, b, c], "Letters Clan");
  const numbersFamily = new Family([one, two, three], "Numbers Clan");

  const society = new Society([lettersFamily, numbersFamily]);

  const oldestLetterMember = lettersFamily.getOldestMember();
  const oldestNumberMember = numbersFamily.getOldestMember();

  const societyMembers = society.getMembers().length;

  if (
    oldestLetterMember === 58 &&
    oldestNumberMember === 36 &&
    societyMembers === 2
  )
    return console.log("\x1b[32m All tests passed!!! \x1b[0m");

  throw new Error("Tests not passed...");
})();

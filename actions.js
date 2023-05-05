// Action Creator
export function addPerson(person) {
  console.log(person);
  return {
    type: 'ADD_PERSON',
    data: person,
  };
}

export function deletePerson(person) {
  return {
    type: 'DELETE_PERSON',
    data: person,
  };
}

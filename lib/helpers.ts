export const getAgeByBirthday = (birthDay: string) => {
  const [day, month, year] = birthDay.split("-").map(Number);

  const fechaNacimiento = new Date(year, month - 1, day);

  const hoy = new Date();

  let age = hoy.getFullYear() - fechaNacimiento.getFullYear();

  const currentMonth = hoy.getMonth();
  const currentDay = hoy.getDate();
  if (
    currentMonth < month - 1 ||
    (currentMonth === month - 1 && currentDay < day)
  ) {
    age = age - 1;
  }

  return age;
};

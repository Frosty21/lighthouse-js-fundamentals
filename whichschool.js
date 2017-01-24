function whichSchool(age) {
  if (age < 13) {
    return "Elementary School";
  }
  if (age <= 18 && age >= 13) {
    return "Secondary School";
  }
  else {
    return "Lighthouse Labs";
  }
}

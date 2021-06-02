// the rule of calculating age is simplified and defined by myself, but it actually depends on requirement of specific apps
// in abnormal cases, it returns 0
// assume yearOfBirth is always a number (we can use TypeScript for type checking)
export const calculateAge = (yearOfBirth) => {
  if (yearOfBirth == null) {
    return 0;
  }
  let age = new Date().getFullYear() - yearOfBirth + 1;
  if (age <= 0) {
    return 0;
  }
  return age;
}

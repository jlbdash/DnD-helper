/* Taken from Yazdun in GitHub
 * https://github.com/Yazdun/react-fcc-forms/blob/main/src/utils/findInputError.js
*/

export const isFormInvalid = (err) => {
  if (Object.keys(err).length > 0) {
    return true;
  }
  return false;
};

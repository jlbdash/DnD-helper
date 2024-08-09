/* Taken from Yazdun in GitHub
 * https://github.com/Yazdun/react-fcc-forms/blob/main/src/utils/findInputError.js
*/

export function findInputError(errors, name) {
    const filtered = Object.keys(errors)
      .filter(key => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { error: errors[key] })
      }, {})
    return filtered
  }
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (string, regex) => {
  return !!string.match(`^${regex}$`);
};

export function cutArray(arr, size) {
  /**
   * Splits an array into smaller arrays of a specified size.
   *
   * @param {Array} arr - The array to be split into smaller arrays.
   * @param {number} size - The size of each smaller array.
   * @returns {Array<Array>} An array of smaller arrays, each with a length up to the specified size.
   */

  const result = [];

  if (arr) {
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
  }

  return result;
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("manipulate", {
    cutArray,
  });
});

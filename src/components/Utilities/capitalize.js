/* AUTOMATICALLY CAPITALIZE THE FIRST LETTER OF THE SENTENCE PASSED ON */
export const capitalize = (s) => {
    
    if (typeof s !== 'string') return s  // if the variable passed on is different from a string, do nothing and return the variable

    const text = s.split(" ");  //split the passed on variable into each word and return an array


    const transformedText = text.map((el) => el.charAt(0).toUpperCase() + el.slice(1)) /* loop through the array, select the first letter and transform to uppercase then join with with the initial element that has the first letter sliced off */
    
    return transformedText.join(" ")  // return the array but convert to string first

    
    
}
/* AUTOMATICALLY CAPITALIZE THE FIRST LETTER OF THE SENTENCE PASSED ON */
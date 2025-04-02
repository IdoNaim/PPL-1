import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels = (s:string) : number =>
    R.pipe(
        R.toLower,
        stringToArray,
        R.filter((char:string) => vowels.includes(char)),
        R.length
    )(s);

/* Question 2 */
export const isPalindrome = (s:string) : boolean =>
    isPalindromeArray(stringToArray(spacesPunctutationsAndCapitalization(s)));
    
  
/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (tree:WordTree) : string =>










export const spacesPunctutationsAndCapitalization = (s:string) : string =>
    R.pipe(
        R.replace(/\s+/g, ''),
        R.replace(/[^\w\s]/g, ''),
        R.toLower,
    )(s);

export const isPalindromeArray = (s : string[]) : boolean =>
    R.length(s) <= 1 ? true: 
        !R.equals(R.head(s), R.last(s)) ? false:
            isPalindromeArray(R.slice(1, R.length(s)-1, s));

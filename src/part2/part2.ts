import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels:(s:string) => number =

/* Question 2 */
export const isPalindrome: (s:string)=> boolean = (s:string) =>  isPalindromeArray(getAllLowerCase(stringToArray(removeNonLetters(s))))
  
/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence: undefined = undefined;

export const isPalindromeArray: (s : string[]) => boolean =  (s : string[]) => 
    s.length === 0 || s.length === 1?
        true: 
        s[0] === s[s.length-1]? 
            isPalindromeArray(s.slice(1, s.length-1)): 
            false;

export const getAllLowerCase: (arr: string[]) => string[] = (arr: string[]) => 
    R.map(getLowerCase, arr);

export const getLowerCase: (char: string) => string = (char: string) => 
    char.charCodeAt(0) < 91? String.fromCharCode(char.charCodeAt(0) + 32): char;
// export const removeFromString: (fullString :string, charToRemove: string) => string =  (str :string, charToRemove: string) =>
//     str.split(charToRemove).join('');
export const removeNonLetters: (str : string) => string = (str: string) => 
    R.filter((char: string) => /[a-zA-Z]/.test(char),stringToArray(str)).join('');
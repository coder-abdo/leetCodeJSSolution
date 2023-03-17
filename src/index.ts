import { reverseString } from "./reverseString";
// import { validPalindrom2 } from "./validPalindrom2";
// import { minSwaps } from "./minNumOfSwaps";
// import { findRepeatedDnaSequences } from "./findRepeatedDnaSequences";
// import { subArraySum } from "./subArraySum";
//import { isAnagram } from "./anagram";
//import { isSupsqeunce } from "./isSubsquence";
//import { replaceElements } from "./replaceElementWithTheGreates";
// import { longestConsecutive } from "./longestConsecutive";
// import { isValidSudoku } from "./validSudoku";
// import { topKFrequent } from "./topKFrequent";
// import { groupAnagrams } from "./groupAnagrams";
// import { isIsomorphic } from "./isIsomorphic";
//import { wordPattern } from "./wordPattern";
//import { maxNumberOfBalloons } from "./numsOfBallons";
// import { pivotIndex } from "./pivotIndex";
// import { sortColors } from "./sortColors";
//import { findAllNumbers } from "./findAllNumbers";
// import { majorityElement } from "./majorityElement";
// import { canPlaceFlowers } from "./canPlaceFlowers";
//import { removeElement } from "./removeElement";
//import { arrayPairSum } from "./arrayPartition";
//import { generateRowsOfPascal } from "./rowOfPascal";
//import { thirdMaxNum } from "./thirdMaxNum";
// import { longestCommonPrefix } from "./longestCommonPrefix";
//import { missingNumber } from "./missingNumber";
//import { singleNumber } from "./singleNumber";
//import { runningSum } from "./sumOfRunningArray";
//import {finalValue} from './finalValue'
//import {twoSum} from './twoSum'
// import { lengthOfLastWord } from "./lengthOfLastWord";
//console.log(isAnagram("car", "rat"))
//console.log(isAnagram("anagram", "nagaram"))
//console.log(replaceElements([17,18,5,4,6,1]))
// console.log(isSupsqeunce("abc", "ahbgdc"));
// console.log(isSupsqeunce("ab", "baab"));
// console.log(isSupsqeunce("abc", "acb"));
//console.log(twoSum([3, 2, 3], 6))
//console.log(runningSum([1, 1, 1, 1]))
//console.log(generateRowsOfPascal(5))
//console.log(singleNumber([4,1,2,1,2]))
//console.log(missingNumber([0]))
//console.log(thirdMaxNum([3, 2, 1]))
//console.log(arrayPairSum([1,2,3,2]))

//console.log(arrayPairSum([6,2,6,5,1,2]))
// console.log(lengthOfLastWord("hello world"));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["a"]));
// console.log(longestCommonPrefix(["", ""]));

// //console.log(removeElement([3, 2, 2, 3], 3));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
// console.log(majorityElement([1, 2, 2, 2, 1]));
// console.log(majorityElement([3, 2, 3]));

// console.log(findAllNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findAllNumbers([1, 1]));
// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));
// console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
// console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
// console.log(maxNumberOfBalloons("nlaebolko"));
// console.log(maxNumberOfBalloons("loonbalxballpoon"));
// console.log(maxNumberOfBalloons("leetcode"));
// console.log(maxNumberOfBalloons("balon"));
// console.log(
//   maxNumberOfBalloons(
//     "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
//   )
// );
// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog dog dog dog"));
// console.log(wordPattern("abba", "dog constructor constructor dog"));
// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1], 1));
// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
// console.log(longestConsecutive([0]));
// console.log(subArraySum([1, 1, 1], 2));
// console.log(subArraySum([1, 2, 3], 3));
// console.log(subArraySum([1, 2, 1, 2, 1], 3));
// console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
// console.log(minSwaps("][]["));
// console.log(minSwaps("]]][[["));
// console.log(validPalindrom2("aba"));
// console.log(validPalindrom2("abca"));
// console.log(validPalindrom2("abc"));
console.log(reverseString(["h", "e", "l", "l", "o"]));

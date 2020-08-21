# JavaScript常用片段

### 1. maxItemOfArray

获取数组中的最大数字

```js
const maxItemOfArray = (arr) => arr.sort((a, b) => b - a)[0];
let maxItem = maxItemOfArray([3, 5, 12, 5]);
```

### 2. areAllEqual

检查数组的所有项是否相等

```js
const areAllEqual = array => array.every(item => item === array[0]);
let check1 = areAllEqual([3, 5, 2]); // false
let check2 = allEqual([3, 3, 3]); // true
```

### 3. averageOf

求给定数字的平均值

```js
const averageOf = (…numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;
let average = averageOf(5, 2, 4, 7); // 4.5
```

### 4. reverseString

反转一个字符串

```js
const reverseString = str => […str].reverse().join(‘’);
let a = reverseString(‘Have a nice day!’); // !yad ecin a evaH
```

### 5. sumOf

求给定数字的和

```
const sumOf = (…numbers) => numbers.reduce((a, b) => a + b, 0);
let sum = sumOf(5, -3, 2, 1); // 5
```

### 6. findAndReplace

在字符串中查找给定的单词，并替换为另一个单词

```js
const findAndReplace = (string, wordToFind, wordToReplace) => string.split(wordToFind).join(wordToReplace);

let result = findAndReplace(‘I like banana’, ‘banana’, ‘apple’); // I like apple
```

### 7. RGBToHex

将RGB模式下的颜色转换为十六进制

```js
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, ‘0’);
let hex = RGBToHex(255, 255, 255); // ffffff
```

### 8. shuffle

音乐播放器如何随机播放播放项目？ 

```js
const shuffle = ([…array]) => {
  let m = array.length;
  
  while (m) {
    const i = Math.floor(Math.random() * m — );
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
};
shuffle([5, 4, 3, 6, 20]);
```

### 9. removeFalseValues

从数组中删除false值，包括false，undefined，NaN，empty

```js
const removeFalseValues = arr => arr.filter(item => item);
let arr = removeFalseValues([3, 4, false, ‘’, 5, true, undefined, NaN, ‘’]); // [3, 4, 5, true]
```

### 10. removeDuplicatedValues

从数组中删除重复的项

```js
const removeDuplicatedValues = array => […new Set(array)];
let arr = removeDuplicatedValues([5, 3, 2, 5, 6, 1, 1, 6]); // [5, 3, 2, 6, 1]
```

### 11. getTimeFromDate

以日期对象的字符串形式返回时间

```js
const getTimeFromDate = date => date.toTimeString().slice(0, 8);
let time = getTimeFromDate(new Date()); // 09:46:08
```

### 12. capitalizeAllWords

将字符串中所有单词的第一个字母大写

```js
const capitalizeAllWords = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
let str = capitalizeAllWords(‘i love reading book’); // I Love Reading Book
```

### 13. getDayDiff

返回两个日期之间以天为单位的差值

```js
const getDayDiff = (date1, date2) => ((date2 - date1) / (1000 * 3600 * 24));
let diff = getDayDiff(new Date('2020-04-01'), new Date('2020-08-15')); // 136
```

### 14. radianToDegree

把弧度转换成角度

```js
const radianToDegree = radian => (radian * 180.0) / Math.PI;
let degree = radianToDegree(2.3); // 131.78
```

### 15. isValidJSON

检查给定字符串是否是有效的JSON

```js
const isValidJSON = string => {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
};
let check1 = isValidJSON(‘{“title”: “javascript”, “price”: 14}’); // true
let check2 = isValidJSON(‘{“title”: “javascript”, “price”: 14, subtitle}’); // false
```

### 16. toWords

将给定的字符串转换为单词数组

```js
const toWords = (string, pattern = /[^a-zA-Z-]+/) => string.split(pattern).filter(item => item);
let words = toWords(‘I want to be come a great programmer’); // [“I”, “want”, “to”, “be”, “come”, “a”, “great”, “programmer”]
```

### 17. scrollToTop

位于长页面的底部，并且想快速向上滚动至顶部

```js
const scrollToTop = () => {
  const t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, t — t / 8);
  }
};
```

### 18. isValidNumber

验证数字是否有效

```js
const isValidNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;
let check1 = isValidNumber(10); // true
let check2 = isValidNumber(‘a’); // false
```
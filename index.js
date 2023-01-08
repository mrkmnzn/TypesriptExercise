"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeroes = exports.find = exports.displayList = exports.addInfo = exports.Country = void 0;
class Country {
    constructor(city, country, population) {
        this.city = city;
        this.country = country;
        this.population = population;
    }
}
exports.Country = Country;
var countryInfos = [];
const addInfo = (city, country, population) => {
    const newInfo = new Country(city, country, population);
    countryInfos.push(newInfo);
    (0, exports.displayList)();
};
exports.addInfo = addInfo;
const displayList = () => {
    var list = document.getElementById('countryList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    countryInfos.forEach(data => {
        let li = document.createElement('ul');
        li.innerText = data.city + " " + data.country + " " + data.population;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayList = displayList;
const find = () => {
    const searchResult = countryInfos.filter(function (searchResult) {
        if (searchResult.city.match(document.getElementById('search').value) ||
            (searchResult.country.match(document.getElementById('search').value))) {
            return true;
        }
        return false;
    });
    var list = document.getElementById('searchList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    searchResult.forEach(data => {
        let li = document.createElement('ul');
        li.innerText = data.city + " " + data.country;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.find = find;
//*********************ISBN – 10 Validation*/
const isValidISBN = (isbn) => {
    if (isbn.length === 10) {
        let sum = 0;
        for (let i = 0; i < isbn.length; i++) {
            sum += parseInt(isbn.charAt(i)) * (i + 1);
        }
        if (sum % 11 === 0) {
            return true;
        }
    }
    return false;
};
console.log(isValidISBN('1112223339'));
console.log(isValidISBN('111222333'));
console.log(isValidISBN('1112223339X'));
console.log(isValidISBN('1234554321'));
console.log(isValidISBN('1234512345'));
console.log(isValidISBN('048665088X'));
console.log(isValidISBN('X123456788'));
// *********************Change it up!*/
const changeItUp = (input) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newInput = [];
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === "0" || input.charAt(i) === "1" ||
            input.charAt(i) === "2" || input.charAt(i) === "3" ||
            input.charAt(i) === "4" || input.charAt(i) === "5" ||
            input.charAt(i) === "6" || input.charAt(i) === "7" ||
            input.charAt(i) === "8" || input.charAt(i) === "9") {
            var curr = input.charAt(i);
            newInput.push(curr.toLowerCase());
        }
        else {
            curr = String.fromCharCode(input.charCodeAt(i) + 1);
            newInput.push(curr.toLowerCase());
        }
    }
    for (let i = 0; i < newInput.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (newInput[i] === vowels[j]) {
                newInput[i] = newInput[i].toUpperCase();
            }
        }
    }
    return newInput.toString().replaceAll(",", "");
};
console.log(changeItUp('Cat30'));
//*********************Moving zeroes to the end*/
const moveZeroes = (arrs) => {
    for (let i = 0; i < arrs.length; i++) {
        if (arrs[i] === 0) {
            arrs.push(0);
            arrs.splice(i, 1);
        }
    }
    return arrs;
};
exports.moveZeroes = moveZeroes;
console.log((0, exports.moveZeroes)([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log((0, exports.moveZeroes)([0, true, 0, 1, 'b', 0, 1, 3, 'a']));

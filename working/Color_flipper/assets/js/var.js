const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const contentElement = $('#content');
const subContentElement = $('.content');
const colorElement = $('.color');
const btn = $('.btn');
const hexElement = $('.header-item[name=hex]')
const simpleElement = $('.header-item[name=simple]')

var hexColor = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]

var simpleColor = [
    'aqua',
    'black',
    'blue',
    'fuchsia',
    'gray',
    'green',
    'lime',
    'maroon',
    'navy',
    'olive',
    'purple',
    'red',
    'silver',
    'teal',
    'white',
    'yellow'
]

var isHex = false;
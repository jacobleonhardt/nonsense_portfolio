// Carousel is an Array, the arrows iterate through the array

let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'junk drawer'
];

let appName = document.getElementById('app-name');
let appImg = document.getElementById('app-img');
appName.innerText = apps[0];
appImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/10/11/22/29/books-5647210_1280.jpg')

const rotateRight = () => {
    apps.push(apps.shift())

    apps[0] === 'junk drawer' ? document.body.style.backgroundColor = "#AD9672" :
        document.body.style.backgroundColor = "#EFCFAA";

    return appName.innerText = apps[0];
    // return apps;
}

const rotateLeft = () => {
    apps.unshift(apps.pop())

    apps[0] === 'junk drawer' ? document.body.style.backgroundColor = "#AD9672" :
        document.body.style.backgroundColor = "#EFCFAA";

    return appName.innerText = apps[0];
    // return apps;
}

document.getElementById('left-btn').onclick = rotateLeft;
document.getElementById('right-btn').onclick = rotateRight;

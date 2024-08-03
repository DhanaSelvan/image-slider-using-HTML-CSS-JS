const imgArr = ['1.png', '2.png', '3.png', '4.png', '5.png'];
const imgWrapper = document.querySelector('.img-wrapper');
var index = 0

const previous = () => {
    index -= 1
    if(index<0){
        index = 4;
    }
    // const img = document.createElement('img');
    // img.src = `./assets/${imgArr[index]}`
    // imgWrapper.style.background = `background-image: url('../assets/${imgArr[index]}');`
    const img_fl = document.getElementById('img')
    imgWrapper.removeChild(img_fl)
    const img = document.createElement('img');
    img.src = `./assets/${imgArr[index]}`
    img.alt = `${imgArr[index]}.png`
    img.id = 'img'
    imgWrapper.appendChild(img)
}

const next = () => {
    index += 1;
    if(index>4){
        index = 0;
    }
    const img_fl = document.getElementById('img')
    imgWrapper.removeChild(img_fl)
    const img = document.createElement('img');
    img.src = `./assets/${imgArr[index]}`
    img.alt = `${imgArr[index]}`
    img.id = 'img'
    imgWrapper.appendChild(img)

    // try {
    //     imgWrapper.removeChild(img);
    // } catch(err) {
    //     console.log(err)
    // }
    console.log(imgArr[index], imgWrapper)
    // imgWrapper.style.background = `background: url("./assets/${imgArr[index]}.png")`
}
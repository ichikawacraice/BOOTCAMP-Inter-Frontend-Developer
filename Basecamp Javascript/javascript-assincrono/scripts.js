const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const btnCat = document.querySelector('#change-cat')
const imgCat = document.querySelector('#cat')

const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e))

  return data.webpurl
}

const loadImg = async () => {
  imgCat.src = await getCats()
}

btnCat.addEventListener('click', loadImg)

loadImg()

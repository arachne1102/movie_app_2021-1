const foodLike = [
  {
    name: 'spaghetti',
    image: 'https://www.tefal.co.kr/medias/?context=bWFzdGVyfHJvb3R8MjUyMTF8aW1hZ2UvanBlZ3xoZmYvaGFlLzE0MDcwMjU0NTY3NDU0LmpwZ3w0NmQ1Yjg3OTY0YzhlNDBlMjBiNzU5ZTE2N2RkNzBlZGRjMmRhYWJiMGQyOGIxMDEwZmM5MjFhNmM5OTYxNmE5'
  },
  {
    name: 'pizza',
    image: 'https://cdn.imweb.me/thumbnail/20170922/59c3e2b67bbb3.png'
  },
  {
    name: 'tomato',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/12/2021011202231_0.jpg'
  }
]

function renderFood(foo) {
  return <Food name={foo.name} picture={foo.image} />
}

function App() {
  return (
    <div>
      {
        foodLike.map(renderFood)
      }
    </div>
  );
}

function Food({name, picture}) {
  // {fav} = props
  return (
    <div>
      <h3>I love {name} </h3>
      <img src={picture} />
    </div>
  )
}

export default App
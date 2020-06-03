// Add your code here
const slideTab = () => {
  let main = document.getElementById('main'),
  titles = main.getElementsByClassName('title')[0],
  contents = main.getElementsByClassName('content')[0], i = 0
  //int content

  for(let title of titles.getElementsByTagName('a')){
    title.index = i++
    title.onmouseover = () => {
      for(let ul of contents.getElementsByTagName('ul')){
        let j = 0
        ul.style.display = 'none'
        titles.getElementsByTagName('a')[j++].className = ''
      }
      contents.getElementsByTagName('ul')[title.index].style.display = 'block'
      title.className = 'active'
    }
  }
}

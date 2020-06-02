const switchImg = () => {
  let currentImgs = document.getElementsByClassName('bt')
  
  for(let img of currentImgs){
    img.src = '../src/icon_00.png'
    img.isDisplay = true
    img.onclick() = () => {
      this.isShow = !this.isShow
      this.style.backgroundImage = 
      this.isShow ? '../src/icon_00.png' : '../src/icon_01.png'
    }
  }
}
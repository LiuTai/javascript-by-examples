// Add your code here
const slider = () => {
  let box = document.getElementById('box'),
  title = box.getElementsByClassName('title')[0],
  bigImge = box.getElementsByClassName('bigImg')[0],
  thumbnail = box.getElementsByClassName('thumbnail')[0],
  next = box.getElementsByClassName('next')[0],
  back = box.getElementsByClassName('back')[0],
  page = box.getElementsByClassName('page')[0],
  index = 0

  imgNames=['01.png','02.png']
  bigImge.src='./src/01.png'
  title.innerHTML='01.png'

  back.onclick = () => {
		index--
		if(index < 0){
			index = imgNames.length - 1
		}
		changeView()
  }
  next.onclick = () => {
		index++
		if(index > imgNames.length){
			index = 0
		}
		changeView()
  }
  let str = ''
	for(let i=1; i<=imgNames.length; i++){
		if(i == 1){
			str += '<i class="active">' + i + '</i>'
		} else {
			str += '<i>' + i + '</i>'
		}
	}
	page.innerHTML = str
  let pageNum = page.getElementsByTagName('i')
	for(let i = 0; i < pageNum.length; i++){
				pageNum[i].index = i;
				pageNum[i].onclick = () => {
          index = i
					changeView();
				}
				pageNum[i].onmouseover = () => {
					thumbnail.style.display = 'block';
					thumbnail.src = 'src/' + imgNames[i];
				}
				pageNum[i].onmouseout = () => {
					thumbnail.style.display = 'none';
				}
			}  
  const changeView = () => {
				bigImge.src = 'src/' + imgNames[index];
				title.innerHTML = imgNames[index];
				for(var i=0; i<pageNum.length; i++){
					pageNum[i].className = '';
				}
				pageNum[index].className = 'active';
  }
}

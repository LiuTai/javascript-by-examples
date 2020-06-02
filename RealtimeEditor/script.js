const refresh = () => {
  let textContent = document.getElementById('textarea').value
  document.getElementById('viewer').srcdoc = textContent
}
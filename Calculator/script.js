// Add your code here

const getInput = (num) => {
  document.form.textarea.value += num
}

const clean = () => {
  document.form.textarea.value = ''
}

const back = () => {

  let length = document.form.textarea.value.length
  document.form.textarea.value =
    document.form.textarea.value.substring(0, length - 1)
}

const equal = () => {
  let exp = document.form.textarea.value
  document.form.textarea.value=eval(exp)
}
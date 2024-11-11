let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loading = document.getElementById('loading');
let successMessage = document.getElementById('success');
let errorMessage = document.getElementById('error');

function submitForm(answer)
{
  return new Promise((resolve,reject)=>
  {
    setTimeout(() => {
      if(answer.toLowerCase() === 'istanbul')
      {
        resolve()
      }
      else
      {
        reject(new Error('good guess but a wrong answer'))
      }
    }, 1500);
  })
}
function show(el)
{
  el.style.display=''
}
function hide(el)
{
  el.style.display='none'
}
async function handleFormSubmit(e)
{
  e.preventDefault()
  disable(button);
  disable(textarea);

try {
  await submitForm(textarea.value)
  hide(form)
  show(successMessage)
} catch (error) {
  show(errorMessage);
  errorMessage.textContent = error.message;
}
finally
{
  enable(textarea);
  enable(button)
}
}
function disable(el)
{
  el.disabled =true;
}
function enable(el)
{
  el.disabled = false;
}
function handleTextareaChange()
{
  if(textarea.value.length === 0)
  {
    disable(button)
  }
  else
  {
    enable(button)
  }
}
textarea.oninput=handleTextareaChange;
form.onsubmit=handleFormSubmit;
const $body = document.querySelector('body')

$body.addEventListener('click', event => {
  const $origin = event.target

  if($origin.classList.contains('elementExample')) {
    $origin.classList.remove('elementExample_isActive')
    document.querySelector(`.${$origin.getAttribute('data-next')}`).classList.add('elementExample_isActive')
  }
})
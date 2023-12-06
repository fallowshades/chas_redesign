// Function to handle button click
function handleButtonClick(button) {
  const grandparent = button.parentElement.parentElement
  // Remove active class from all buttons
  const allButtons = document.querySelectorAll('button')
  allButtons.forEach((btn) => {
    const parent = btn.parentElement
    btn.classList.remove('active')
    if (
      parent.classList.contains('semantic-List-class') &&
      parent != grandparent.firstElementChild
    ) {
      console.log(btn)
      //console.log(parent.firstElementChild)
      btn.innerHTML = btn.textContent.toLowerCase().replace('zoom', '')
    }
  })
  // Add active class to the clicked button
  button.classList.add('active')

  // Insert the word "Zoom" when active
  if (
    button.classList.contains('active') &&
    !button.textContent.includes('zoom')
  ) {
    button.innerHTML = 'zoom ' + button.textContent
  } else {
    button.innerHTML = button.textContent
  }
}

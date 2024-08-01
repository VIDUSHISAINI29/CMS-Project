const url_input = document.querySelector('.url')
const length_input = document.querySelector('.length')
const breadth_input = document.querySelector('.breadth')
const alt_input = document.querySelector('.alt_text')
const photo_elem = document.querySelector('.photo')
const get_btn = document.querySelector('.get')


get_btn.addEventListener('click', () => {

    const value_length = length_input.value
const value_breadth = breadth_input.value
const value_alt= alt_input.value
const value_url = url_input.value

   
   photo_elem.alt = `${value_alt}`
     photo_elem.width = `${value_breadth}`
      photo_elem.height = `${value_length}`
      photo_elem.src = `${value_url}`
})


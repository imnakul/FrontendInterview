function handleSubmit(event) {
   event.preventDefault()
   const name = document.getElementById('name').value
   const email = document.getElementById('email').value
   const phoneNo = document.getElementById('phone').value
   alert(`Name: ${name} Email: ${email} Phone: ${phoneNo}`)
}

let pink = true
function handleCC() {
   if (pink) {
      document.querySelector('nav').style.backgroundColor = 'rgba(21, 216, 255,0.7)'
   } else {
      document.querySelector('nav').style.backgroundColor = 'rgba(48, 72, 107, 0.4)'
   }
   pink = !pink
}

;<legend style='text-align: center'>Contact Form</legend>

const handleClick = () => {
   alert('JS Button Clicked')
}

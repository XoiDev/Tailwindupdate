const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]')
const currentValue = localStorage.getItem('theme')


if(currentValue){
    document.documentElement.setAttribute('class', currentValue)
    if(currentValue === 'dark'){
        toggleSwitch.checked = true
    }
}

const swToggle = function(e){
    if(e.target.checked){
        document.documentElement.setAttribute('class', 'dark')
        localStorage.setItem('theme','dark')
    }
    else{
        document.documentElement.setAttribute('class', 'light')
        localStorage.setItem('theme','light')
    }
    
}
console.log(currentValue)

toggleSwitch.addEventListener('change', swToggle)


function Calculator() {
  this.display = document.querySelector('.display')
  this.init = () => {
    this.clickCapture()
    this.captureEnter()
  } 
  this.captureEnter = () => {
    this.display.addEventListener('keyup', event => {
      if(event.keyCode === 13 ) {
        this.makeAccount()
      }
    })
  }

  this.clickCapture = () => {
    document.addEventListener('click', event => {
      const el = event.target
      if(el.classList.contains('btn-num')) this.addNumDisplay(el)
      if(el.classList.contains('btn-clear')) this.clear()
      if(el.classList.contains('btn-del')) this.del()
      if(el.classList.contains('btn-equal')) this.makeAccount()
    })
  }

  this.addNumDisplay = el => {
    this.display.value += el.innerText
    this.display.focus()
  }

  this.clear = () => this.display.value = ''
  this.del = () => this.display.value = this.display.value.slice(0, -1)
  this.invalidAccount = () => alert('Invalid Account')
  this.makeAccount = () => {
    try{
      const account = eval(this.display.value)
      if(!account){
        this.invalidAccount()
        return
      }
      this.display.value = account
    }catch(err){
      this.invalidAccount()
      return
    }
  } 
}

const calculator = new Calculator()
calculator.init()
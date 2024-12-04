let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')
console.log(exp_btn)


exp_btn?.addEventListener('click', ()=>{
    exp_section!.classList.toggle('hide')
   })

  let  print_btn = document.getElementById('print_btn')
  print_btn?.addEventListener('click',()=>{
    window.print()
  })
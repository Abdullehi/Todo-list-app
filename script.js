
const addtodo = document.getElementById('addtodo')

const container = document.getElementById('container')

addtodo.addEventListener('click',()=>{
    const inputValue = document.getElementById('inputValue').value
    if(!inputValue) return;
    const div = document.createElement('div')
    // div.classList.add('box')
    div.innerHTML = `<div class="box">
                    <div>
                        <p class="element">${inputValue}</p>
                    </div>
                    <div>

                        <i class="fa-solid fa-check check"></i>
                        <i class="fa-solid fa-trash delt" ></i>
                    </div>
                </div>`;
      container.appendChild(div)  
      
 const element = div.querySelector('.element')
      const check = div.querySelector('.check')
      const delt = div.querySelector('.delt')

       delt.addEventListener('click', ()=>{
        div.remove();
        
       })


        check.addEventListener('click', ()=>{
         element.classList.toggle('done')
         check.classList.toggle('fa-pen')
       })


     

    
})


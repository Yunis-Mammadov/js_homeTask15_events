let toDoForm = document.querySelector(".to-do-form");
let todoInp = document.querySelector("#to-do");
let list = document.querySelector(".todos");
let modal = document.querySelector("#add-product-modal");
let search = document.querySelector("#search")

toDoForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        if (todoInp.value.trim() === "") {
            return; 
        }
        list.innerHTML += `<li style="display: flex;
        justify-content: space-between;
        align-items: center;" class="list-group-item">
        <span>${todoInp.value}</span>
        <div>
        <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-danger remove"><i class="fa-solid fa-trash"></i></button>
    </div>
    </li>`;
    todoInp.value = "";
// }
    
    //done
    let dones = document.querySelectorAll(".done");
    dones.forEach((item)=>{
        item.addEventListener("click",function(){
            this.parentElement.previousElementSibling.style.textDecoration = "line-through";
        })
    })
    //remove
    let removes = document.querySelectorAll(".remove");
    removes.forEach((item) => {
    item.addEventListener("click", () => {
        modal.style.visibility = "visible"
        modal.style.opacity = "1"
        modal.style.transform = "translate(-50%,-50%) scale(1)"
    })
})
    let cancel = document.querySelectorAll(".cancel_btn")
    cancel.forEach((item) => {
        item.addEventListener("click", () => {
            modal.remove()
        })
    })
    let deleteBtn = document.querySelectorAll(".delete_btn")
    deleteBtn.forEach((item) => {
        item.addEventListener("click", () => {
            list.remove()
            modal.remove()
            
        })
    })
    search.addEventListener("input", (e) => {
        let searchText = e.target.value.toLowerCase();
        let todos = Array.from(list.children);
        todos.filter((todo) => !todo.textContent.toLowerCase().includes(searchText)).forEach((todo) => todo.style.display = "none");
        todos.filter((todo) => todo.textContent.toLowerCase().includes(searchText))
      });
}); 

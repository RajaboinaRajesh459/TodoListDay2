document.querySelector('.btn').onclick = function(){
    document.querySelector('#tasks').innerHTML += 
    `<div class="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
                <i class="far fa-trash-alt"></i>
        </button> 
    </div>`
    var currentTasks = document.querySelectorAll(".delete");
        for(var i=0; i<currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
}
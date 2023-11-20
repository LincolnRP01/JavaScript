
//function que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value

    if(taskTitle){
        //Clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //adicionar titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Adicionando tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask)

        //Adicionar evento remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        //Limpar texto
        document.querySelector("#task-title").value = "";
    }
}

//Funcao completar task
function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done")
}

//Funcao this remover task
function removeTask(task){
    task.parentNode.remove(true);
}

//Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    addTask();
});
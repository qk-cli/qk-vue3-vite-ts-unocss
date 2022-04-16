<template>
    <div class="todolist" p-10>
        <div class="edit" flex items-center justify-center mt-5>
            <input border-1 box-border rounded-tl-lg rounded-bl-lg py-0 px-2 h-10 type="text" placeholder="输入待办事项" v-model="todotitle">
            <button @click="addTodo" p-2 border-0 rounded-tr-lg rounded-br-lg w-20 h-10 color-white bg-black>添加</button>
        </div>
        <div class="todo-box" grid grid-cols-2 gap-10 mt-10>
            <div class="left" border-1 rounded-lg border-black>
                <h2 ml-5>待办事项</h2>
                <div class="todo-items" border-1 border-gray rounded-2 p-2 m-5 v-for="({title,id}) in noCompleteToDoList" :key="id">
                    {{ title }}
                    <button @click="completeTodo(id)" float-right bg-black color-white border-none py-1 px-2>完成</button>
                </div>
            </div>
            <div class="right" border-1 rounded-lg border-black>
                <h2 ml-5>已完成事项</h2>
                <div class="todo-items" border-1 border-gray rounded-2 p-1 m-5 v-for="({title,id}) in completeToDoList" :key="id">{{ title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const todotitle = ref('')
interface addToDoDataModel {
    id:string,
    title:string,
    isComplete:boolean
}
const todoList = ref([
    {
        id:'1',
        title:'title1',
        isComplete:false
    },
    {
        id:'2',
        title:'title2',
        isComplete:false
    }
] as addToDoDataModel[])

const completeToDoList = computed(() => {
    return todoList.value.filter(item => item.isComplete)
})

const noCompleteToDoList = computed(() => {
    return todoList.value.filter(item => !item.isComplete)
})

function addTodo(){
    todoList.value.push(
        {
            id:todotitle.value,
            title:todotitle.value,
            isComplete:false
        }
    )
}
function completeTodo(id:string){
    todoList.value.find(item => item.id === id)!.isComplete = true
}
</script>

<style lang="scss" scoped>
</style>
<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : 'error', 'task']">
        <h3 id="h3">{{ task.text }}
            <i @click="$emit('delete-task', task.id)" class="fa fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>
<script>
export default{
    name: 'Task',
    props:{
        task: Object
    },

}
</script>

<style scoped>
.task.reminder .fa{
    display: block;
    background: transparent;
    font-size: 25px;
    color: green;
}
.task.error .fa{
    background: transparent;
    font-size: 25px;
    display: block;
    color: red;
}
.task.error .fa:hover,
.task.reminder .fa:hover{
    background: white;
}
.task{
    border-radius: 10px;
    text-align: left;
    margin: 15px 0px;
    padding: 10px 20px;
    cursor: pointer;
}
.task.reminder{
    color: green;
    border-left: 5px solid green;
    border-right: 5px solid green;
 
}
.task.error{
    /* border-left: 5px solid red;
    border-top: 5px solid red; */

    color:red;
}
.task h3{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.task p{
    padding: 0 10px;
}

</style>
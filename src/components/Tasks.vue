<template>
    <div class="tasks">
        <h2 v-if="!LISTS[SELECTED_TASK].img" class="tasks__title" :class="['badge__'+LISTS[SELECTED_TASK].color.name]">
            {{LISTS[SELECTED_TASK].name}}
            <img @click="changeTaskTitle(LISTS[SELECTED_TASK].name, LISTS[SELECTED_TASK].id)" src="@/assets/img/edit.svg" alt="Edit">
        </h2>

        <div v-if="!LISTS[SELECTED_TASK].img" class="tasks__items">
            <h2 v-if="!LISTS[SELECTED_TASK].tasks.length">Задачи отсутствуют</h2>
            <div v-for="task in TASKS" :key="task.id">
                <div class="tasks__items-row" v-if="task.listId === SELECTED_TASK+1">
                    <div class="tasks__items-row-item">
                        <div class="tasks__items-row-item-checkbox">
                            <input @click="onCompleted(task.id, task.completed)" :id="[task.id]" type="checkbox" :checked="task.completed"/>
                            <label :for="[task.id]">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33342 9.16649L0.166748 4.99982L1.34175 3.82482L4.33342 6.80815L10.6584 0.483154L11.8334 1.66649L4.33342 9.16649Z" fill="white"/>
                                </svg>
                            </label>
                        </div>
                        <p>{{task.text}}</p>
                    </div>
                    <div class="tasks__items-row-tools">
                        <img @click="editTaskName(task.id, task.text)" src="@/assets/img/edit.svg" alt="">
                        <img @click="deleteTask(task.id)" src="@/assets/img/remove.svg" alt="">
                    </div>
                </div>
            </div>

            <AddTaskForm
                v-if="!LISTS[SELECTED_TASK].img"
                :listId="this.LISTS[SELECTED_TASK].id"
            />
        </div>
        <p id="prolog" v-if="LISTS[SELECTED_TASK].img">
            На просторах youtube есть урок по созданию этого приложения с помощью библиотеки React JS.
            Я взял этот урок, как образец, и написал приложение с помощью фреймворка Vue JS. Стили практически не менял,
            т.к для меня, в первую очередь, было важным продемонстрировать навыки работы с Vue JS.
        </p>
    </div>
</template>

<script>
    import AddTaskForm from './AddTaskForm';
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: "Tasks",
        components:{
            AddTaskForm
        },
        computed:{
            ...mapGetters([
                'LISTS', 'SELECTED_TASK', 'TASKS'
            ])
        },
        methods:{
            ...mapActions([
                'GET_LISTS_FROM_API',
                'EDIT_TASK_TITLE',
                'GET_TASKS_FROM_API',
                'ON_TASK_COMPLETED',
                'EDIT_TASK_NAME',
                'DELETE_TASK_FROM_TASKS'
            ]),
            changeTaskTitle(name, id){
                const newTitle = window.prompt('Название списка', name);
                if (newTitle){
                    const newData = {"dataTitle": newTitle, "dataId": id}
                    this.EDIT_TASK_TITLE(newData)
                }
            },
            onCompleted(id, taskCompleted){
                const newData = {"id": id, "completed": taskCompleted};
                this.ON_TASK_COMPLETED(newData);
                setTimeout(this.GET_TASKS_FROM_API, 100);
            },
            editTaskName(id, text){
                const newTitle = window.prompt('Название задачи', text);
                if (newTitle){
                    const newData = {"text": newTitle, "id": id}
                    this.EDIT_TASK_NAME(newData)
                }
            },
            deleteTask(id){
                console.log(id)
                if (window.confirm('Вы действительно хотите удалить задачу?')){
                    this.DELETE_TASK_FROM_TASKS(id);
                    setTimeout(this.GET_TASKS_FROM_API, 100);
                    setTimeout(this.GET_LISTS_FROM_API, 100);
                }
            }
        },
        mounted() {
            this.GET_TASKS_FROM_API()
                .then((res)=>{
                    if(res.data){
                        console.log('Data arrived')
                    }
                });
        }
    }
</script>

<style lang="scss">
    .tasks{

        #prolog{
            font-size: 18px;
            font-family: Montserrat;
            line-height: 25px;
        }

        &__title{
            font-family: Montserrat;
            font-weight: bold;
            font-size: 32px;
            line-height: 39px;
            color: #64C4ED;
            padding-bottom: 20px;
            border-bottom: 1px solid #F2F2F2;
            flex: 1;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;

            &:hover{
                img{
                    opacity: 0.2;
                }
            }

            img{
                opacity: 0;
                cursor: pointer;
                margin-left: 5px;

                &:hover{
                    opacity: 0.8;
                }
            }
        }

        &__items{
            margin-top: 30px;

            h2{
                font-family: Montserrat;
                font-weight: bold;
                font-size: 32px;
                color: #C9D1D3;
            }

            &-row{
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                justify-content: space-between;

                &:hover{
                    img{
                        opacity: 0.2;
                    }
                }

                &-item{
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    p{
                        margin-left: 15px;
                    }

                    &-checkbox{
                        &:hover{
                            label{
                                background-color: #f2f2f2;
                                border-color: #f2f2f2;

                                svg{
                                    opacity: 1;
                                    path{
                                        fill: #b2b2b2;
                                    }
                                }
                            }
                        }

                        input{
                            display: none;
                        }

                        input:checked + label{
                            background: #2c8498;
                            border-color: #2c8498;

                            svg{
                                opacity: 1;
                                path{
                                    fill: #fff;
                                }
                            }
                        }

                        label{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            border: 2px solid #e8e8e8;
                            width: 20px;
                            height: 20px;
                            border-radius: 30px;

                            svg{
                                opacity: 0;
                            }
                        }
                    }
                }

                &-tools{
                    display: flex;
                    align-items: center;

                    img{
                        height: 13px;
                        width: 13px;
                        margin-left: 5px;
                        opacity: 0;
                        cursor: pointer;

                        &:hover{
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
</style>
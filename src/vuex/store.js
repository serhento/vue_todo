import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        lists: [],
        tasks: [],
        colors: [],
        selectedTask: 0
    },
    actions: {
        GET_LISTS_FROM_API({commit}){
            return axios('http://localhost:3000/lists?_expand=color&_embed=tasks', {
                method: "GET"
            })
                .then((lists)=>{
                    commit('SET_LISTS_TO_STATE', lists.data);
                    return lists;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        ADD_TASK_TO_LIST({commit}, task){
            axios.post('http://localhost:3000/lists/', task)
                .then(()=>{
                    commit('ADD_TASK_TO_STATE',task);
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                });
        },
        DELETE_LIST_FROM_LISTS({commit}, id){
            axios.delete(`http://localhost:3000/lists/${id}`)
                .then(()=>{
                    commit('DELETE_LIST_FROM_STATE',id);
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        GET_TASKS_FROM_API({commit}){
            return axios('http://localhost:3000/tasks', {
                method: "GET"
            })
                .then((tasks)=>{
                    commit('SET_TASKS_TO_STATE', tasks.data);
                    return tasks;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        GET_COLORS_FROM_API({commit}){
            return axios('http://localhost:3000/colors', {
                method: "GET"
            })
                .then((colors)=>{
                    commit('SET_COLORS_TO_STATE', colors.data);
                    return colors;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        SET_ACTIVE_TASK({commit}, id){
            commit('SET_SELECTED_TASK', id)
        },
        EDIT_TASK_TITLE({commit}, data){
            axios.patch(`http://localhost:3000/lists/${data.dataId}`, {
                name: data.dataTitle
            })
                .then(()=>{
                    commit('CHANGE_TASK_TITLE',data);
                })
                .catch(()=>{
                    alert('Не удалось обновить название списка')
                })
        },
        EDIT_TASK_NAME({commit}, data){
            axios.patch(`http://localhost:3000/tasks/${data.id}`, {
                text: data.text
            })
                .then(()=>{
                    commit('CHANGE_TASK_NAME',data);
                })
                .catch(()=>{
                    alert('Не удалось обновить')
                })
        },
        DELETE_TASK_FROM_TASKS({commit}, id){
            axios.delete(`http://localhost:3000/tasks/${id}`)
                .then(()=>{
                    commit('DELETE_TASK_FROM_STATE',id);
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        ON_TASK_COMPLETED({commit}, data){
            axios.patch(`http://localhost:3000/tasks/${data.id}`, {
                completed: !data.completed
            })
                .then(()=>{
                    commit('SET_TASK_COMPLETED', data);
                })
                .catch((error)=>{
                    console.log(error)
                })
        },
        ADD_TASK_TO_TASKS({commit}, task){
            axios.post('http://localhost:3000/tasks/', task)
                .then(()=>{
                    commit('ADD_TASK_TO_TASKS_STATE',task);
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        }
    },
    mutations: {
        SET_LISTS_TO_STATE:(state, lists)=>{
            state.lists = lists;
        },
        ADD_TASK_TO_STATE:(state, task)=>{
            state.lists.push(task)
        },
        DELETE_LIST_FROM_STATE:(state, id)=>{
            let res = state.lists.filter(item=> item.id !== id);
            state.lists = res
        },
        SET_TASKS_TO_STATE:(state, tasks)=>{
            state.tasks = tasks;
        },
        SET_COLORS_TO_STATE:(state, colors)=>{
            state.colors = colors;
        },
        SET_SELECTED_TASK:(state, id)=>{
            state.selectedTask = id
        },
        CHANGE_TASK_TITLE:(state, data)=>{
            const newList = state.lists.map(item=>{
                if (item.id === data.dataId){
                    item.name = data.dataTitle
                }
                return item
            });
            state.lists = newList;
        },
        CHANGE_TASK_NAME:(state, data)=>{
            const newList = state.tasks.map(item=>{
                if (item.id === data.id){
                    item.text = data.text
                }
                return item
            });
            state.tasks = newList;
        },
        DELETE_TASK_FROM_STATE:(state, id)=>{
            let res = state.tasks.filter(item=> item.id !== id);
            state.tasks = res
        },
        SET_TASK_COMPLETED:(state, data)=>{
            const newTasks = state.tasks.map((item)=>{
                if (item.id === data.id){
                    item.completed = !item.completed
                }
                return item
            });
            state.tasks = newTasks;
        },
        ADD_TASK_TO_TASKS_STATE:(state, task)=>{
            state.tasks.push(task)
        }
    },
    getters: {
        LISTS(state){
            return state.lists
        },
        TASKS(state){
            return state.tasks
        },
        COLORS(state){
            return state.colors
        },
        SELECTED_TASK(state){
            return state.selectedTask
        }
    }
});

export default store;
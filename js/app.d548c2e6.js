(function(t){function e(e){for(var s,a,c=e[0],r=e[1],l=e[2],T=0,u=[];T<c.length;T++)a=c[T],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);_&&_(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,c=1;c<o.length;c++){var r=o[c];0!==n[r]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},n={app:0},i=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue_todo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var _=r;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"238f":function(t,e,o){"use strict";o("f902")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"todo"},[o("div",{staticClass:"todo__sidebar"},[o("List"),o("AddList")],1),o("div",{staticClass:"todo__tasks"},[o("Tasks")],1)])])},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"todo__list"},t._l(t.LISTS,(function(e,n){return s("li",{key:e.id,class:[{active:n===t.SELECTED_TASK},"active--"+e.color.name],on:{click:function(e){return t.setActiveTask(n)}}},[s("i",[e.img?t._e():s("div",{staticClass:"badge",class:["badge--"+e.color.name]}),e.img?s("img",{attrs:{src:o("764e"),alt:""}}):t._e()]),s("span",{staticClass:"todo__list-name"},[t._v(" "+t._s(e.name)+" "),e.tasks&&!e.img?s("span",[t._v(t._s("("+e.tasks.length+")"))]):t._e()]),e.img?t._e():s("svg",{attrs:{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(o){return t.deleteList(e.id)}}},[s("path",{attrs:{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"black"}})])])})),0)},c=[],r=o("5530"),l=o("2f62"),_={name:"List",data:function(){return{}},computed:Object(r["a"])({},Object(l["c"])(["LISTS","SELECTED_TASK","TASKS"])),methods:Object(r["a"])(Object(r["a"])({setActiveTask:function(t){this.SET_ACTIVE_TASK(t)}},Object(l["b"])(["GET_LISTS_FROM_API","DELETE_LIST_FROM_LISTS","SET_ACTIVE_TASK"])),{},{deleteList:function(t){window.confirm("Вы действительно хотите удалить список?")&&(this.DELETE_LIST_FROM_LISTS(t),setTimeout(this.GET_LISTS_FROM_API,100))}}),mounted:function(){this.GET_LISTS_FROM_API().then((function(t){t.data&&console.log("Data arrived")}))}},T=_,u=(o("59bd"),o("2877")),d=Object(u["a"])(T,a,c,!1,null,null,null),S=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo__add-list"},[o("div",{staticClass:"todo__add-list__front",on:{click:t.showPopup}},[o("svg",{attrs:{width:"13",height:"13",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M8 1V15",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),o("path",{attrs:{d:"M1 8H15",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),o("span",[t._v("Добавить список")])]),t.isShow?o("div",{staticClass:"todo__add-list__back"},[o("svg",{attrs:{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.resetAddListForm}},[o("path",{attrs:{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"black"}})]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"field",attrs:{type:"text",placeholder:"Название списка"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),o("div",{staticClass:"todo__add-list__back-colors"},[o("ul",t._l(t.COLORS,(function(e){return o("li",{key:e.id,staticClass:"badge",class:["badge--"+e.name,{active:e.id===t.selectedColor}],on:{click:function(o){return t.setActive(e.id)}}})})),0)]),o("button",{staticClass:"button",on:{click:t.addTask}},[t._v("Добавить")])]):t._e()])},m=[],E=(o("d81d"),o("b0c0"),{name:"AddList",data:function(){return{isShow:!1,selectedColor:1,msg:"",colorName:""}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["GET_COLORS_FROM_API","ADD_TASK_TO_LIST","GET_LISTS_FROM_API"])),{},{showPopup:function(){this.isShow=!0},setActive:function(t){this.selectedColor=t},resetAddListForm:function(){this.selectedColor=1,this.msg="",this.isShow=!1},addTask:function(){var t=this;if(this.msg){this.COLORS.map((function(e){t.selectedColor===e.id&&(t.colorName=e.name)}));var e={name:this.msg,colorId:this.selectedColor,color:this.colorName};this.ADD_TASK_TO_LIST(e),this.resetAddListForm(),setTimeout(this.GET_LISTS_FROM_API,100)}}}),computed:Object(r["a"])({},Object(l["c"])(["COLORS"])),mounted:function(){this.GET_COLORS_FROM_API().then((function(t){t.data&&console.log("Data arrived")}))}}),h=E,p=(o("f8f2"),Object(u["a"])(h,f,m,!1,null,null,null)),A=p.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tasks"},[t.LISTS[t.SELECTED_TASK].img?t._e():s("h2",{staticClass:"tasks__title",class:["badge__"+t.LISTS[t.SELECTED_TASK].color.name]},[t._v(" "+t._s(t.LISTS[t.SELECTED_TASK].name)+" "),s("img",{attrs:{src:o("66d5"),alt:"Edit"},on:{click:function(e){return t.changeTaskTitle(t.LISTS[t.SELECTED_TASK].name,t.LISTS[t.SELECTED_TASK].id)}}})]),t.LISTS[t.SELECTED_TASK].img?t._e():s("div",{staticClass:"tasks__items"},[t.LISTS[t.SELECTED_TASK].tasks.length?t._e():s("h2",[t._v("Задачи отсутствуют")]),t._l(t.TASKS,(function(e){return s("div",{key:e.id},[e.listId===t.SELECTED_TASK+1?s("div",{staticClass:"tasks__items-row"},[s("div",{staticClass:"tasks__items-row-item"},[s("div",{staticClass:"tasks__items-row-item-checkbox"},[s("input",{attrs:{id:[e.id],type:"checkbox"},domProps:{checked:e.completed},on:{click:function(o){return t.onCompleted(e.id,e.completed)}}}),s("label",{attrs:{for:[e.id]}},[s("svg",{attrs:{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.33342 9.16649L0.166748 4.99982L1.34175 3.82482L4.33342 6.80815L10.6584 0.483154L11.8334 1.66649L4.33342 9.16649Z",fill:"white"}})])])]),s("p",[t._v(t._s(e.text))])]),s("div",{staticClass:"tasks__items-row-tools"},[s("img",{attrs:{src:o("66d5"),alt:""},on:{click:function(o){return t.editTaskName(e.id,e.text)}}}),s("img",{attrs:{src:o("b0f6"),alt:""},on:{click:function(o){return t.deleteTask(e.id)}}})])]):t._e()])})),t.LISTS[t.SELECTED_TASK].img?t._e():s("AddTaskForm",{attrs:{listId:this.LISTS[t.SELECTED_TASK].id}})],2),t.LISTS[t.SELECTED_TASK].img?s("p",{attrs:{id:"prolog"}},[t._v(" На просторах youtube есть урок по созданию этого приложения с помощью библиотеки React JS. Я взял этот урок, как образец, и написал приложение с помощью фреймворка Vue JS. Стили практически не менял, т.к для меня, в первую очередь, было важным продемонстрировать навыки работы с Vue JS. ")]):t._e()])},v=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tasks__items-form"},[t.formToggle?o("div",{staticClass:"tasks__items-form-new",on:{click:t.toggleForm}},[o("svg",{attrs:{width:"13",height:"13",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M8 1V15",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),o("path",{attrs:{d:"M1 8H15",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),o("span",[t._v("Новая задача")])]):t._e(),t.formToggle?t._e():o("div",{staticClass:"tasks__items-form-block"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.taskName,expression:"taskName"}],staticClass:"field",attrs:{type:"text",placeholder:"Название задачи"},domProps:{value:t.taskName},on:{input:function(e){e.target.composing||(t.taskName=e.target.value)}}}),o("button",{staticClass:"button",on:{click:t.setTaskToList}},[t._v("Добавить задачу")]),o("button",{staticClass:"button button--grey",on:{click:t.resetForm}},[t._v("Отмена")])])])},k=[],g={name:"AddTaskForm",data:function(){return{formToggle:!0,taskName:""}},props:{listId:{}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["ADD_TASK_TO_TASKS","GET_LISTS_FROM_API","GET_TASKS_FROM_API"])),{},{toggleForm:function(){this.formToggle=!this.formToggle},resetForm:function(){this.taskName="",this.toggleForm()},setTaskToList:function(){if(this.taskName){var t={listId:this.listId,text:this.taskName,completed:!1};this.ADD_TASK_TO_TASKS(t),setTimeout(this.GET_LISTS_FROM_API,100),setTimeout(this.GET_TASKS_FROM_API,100),this.resetForm()}}})},C=g,b=(o("238f"),Object(u["a"])(C,O,k,!1,null,null,null)),I=b.exports,K={name:"Tasks",components:{AddTaskForm:I},computed:Object(r["a"])({},Object(l["c"])(["LISTS","SELECTED_TASK","TASKS"])),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["GET_LISTS_FROM_API","EDIT_TASK_TITLE","GET_TASKS_FROM_API","ON_TASK_COMPLETED","EDIT_TASK_NAME","DELETE_TASK_FROM_TASKS"])),{},{changeTaskTitle:function(t,e){var o=window.prompt("Название списка",t);if(o){var s={dataTitle:o,dataId:e};this.EDIT_TASK_TITLE(s)}},onCompleted:function(t,e){var o={id:t,completed:e};this.ON_TASK_COMPLETED(o),setTimeout(this.GET_TASKS_FROM_API,100)},editTaskName:function(t,e){var o=window.prompt("Название задачи",e);if(o){var s={text:o,id:t};this.EDIT_TASK_NAME(s)}},deleteTask:function(t){console.log(t),window.confirm("Вы действительно хотите удалить задачу?")&&(this.DELETE_TASK_FROM_TASKS(t),setTimeout(this.GET_TASKS_FROM_API,100),setTimeout(this.GET_LISTS_FROM_API,100))}}),mounted:function(){this.GET_TASKS_FROM_API().then((function(t){t.data&&console.log("Data arrived")}))}},w=K,D=(o("980e"),Object(u["a"])(w,L,v,!1,null,null,null)),M=D.exports,F={name:"App",components:{List:S,AddList:A,Tasks:M},data:function(){return{}}},R=F,x=(o("5c0b"),Object(u["a"])(R,n,i,!1,null,null,null)),P=x.exports,j=(o("a434"),o("bc3a")),G=o.n(j);s["a"].use(l["a"]);var N=new l["a"].Store({state:{lists:[],tasks:[],colors:[],selectedTask:0},actions:{GET_LISTS_FROM_API:function(t){var e=t.commit;return G()("http://localhost:3000/lists?_expand=color&_embed=tasks",{method:"GET"}).then((function(t){return e("SET_LISTS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},ADD_TASK_TO_LIST:function(t,e){var o=t.commit;G.a.post("http://localhost:3000/lists/",e).then((function(){o("ADD_TASK_TO_STATE",e)})).catch((function(t){return console.log(t),t}))},DELETE_LIST_FROM_LISTS:function(t,e){var o=t.commit;G.a.delete("http://localhost:3000/lists/".concat(e)).then((function(){o("DELETE_LIST_FROM_STATE",e)})).catch((function(t){return console.log(t),t}))},GET_TASKS_FROM_API:function(t){var e=t.commit;return G()("http://localhost:3000/tasks",{method:"GET"}).then((function(t){return e("SET_TASKS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},GET_COLORS_FROM_API:function(t){var e=t.commit;return G()("http://localhost:3000/colors",{method:"GET"}).then((function(t){return e("SET_COLORS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},SET_ACTIVE_TASK:function(t,e){var o=t.commit;o("SET_SELECTED_TASK",e)},EDIT_TASK_TITLE:function(t,e){var o=t.commit;G.a.patch("http://localhost:3000/lists/".concat(e.dataId),{name:e.dataTitle}).then((function(){o("CHANGE_TASK_TITLE",e)})).catch((function(){alert("Не удалось обновить название списка")}))},EDIT_TASK_NAME:function(t,e){var o=t.commit;G.a.patch("http://localhost:3000/tasks/".concat(e.id),{text:e.text}).then((function(){o("CHANGE_TASK_NAME",e)})).catch((function(){alert("Не удалось обновить")}))},DELETE_TASK_FROM_TASKS:function(t,e){var o=t.commit;G.a.delete("http://localhost:3000/tasks/".concat(e)).then((function(){o("DELETE_TASK_FROM_STATE",e)})).catch((function(t){return console.log(t),t}))},ON_TASK_COMPLETED:function(t,e){var o=t.commit;G.a.patch("http://localhost:3000/tasks/".concat(e.id),{completed:!e.completed}).then((function(){o("SET_TASK_COMPLETED",e)})).catch((function(t){console.log(t)}))},ADD_TASK_TO_TASKS:function(t,e){var o=t.commit;G.a.post("http://localhost:3000/tasks/",e).then((function(){o("ADD_TASK_TO_TASKS_STATE",e)})).catch((function(t){return console.log(t),t}))}},mutations:{SET_LISTS_TO_STATE:function(t,e){t.lists=e},ADD_TASK_TO_STATE:function(t,e){t.lists.push(e)},DELETE_LIST_FROM_STATE:function(t,e){t.lists.splice(e,1)},SET_TASKS_TO_STATE:function(t,e){t.tasks=e},SET_COLORS_TO_STATE:function(t,e){t.colors=e},SET_SELECTED_TASK:function(t,e){t.selectedTask=e},CHANGE_TASK_TITLE:function(t,e){var o=t.lists.map((function(t){return t.id===e.dataId&&(t.name=e.dataTitle),t}));t.lists=o},CHANGE_TASK_NAME:function(t,e){var o=t.tasks.map((function(t){return t.id===e.id&&(t.text=e.text),t}));t.tasks=o},DELETE_TASK_FROM_STATE:function(t,e){t.tasks.splice(e,1)},SET_TASK_COMPLETED:function(t,e){var o=t.tasks.map((function(t){return t.id===e.id&&(t.completed=!t.completed),t}));t.tasks=o},ADD_TASK_TO_TASKS_STATE:function(t,e){t.tasks.push(e)}},getters:{LISTS:function(t){return t.lists},TASKS:function(t){return t.tasks},COLORS:function(t){return t.colors},SELECTED_TASK:function(t){return t.selectedTask}}}),y=N;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(P)},store:y}).$mount("#app")},"59bd":function(t,e,o){"use strict";o("6925")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"66d5":function(t,e,o){t.exports=o.p+"img/edit.e6d3868a.svg"},6925:function(t,e,o){},"764e":function(t,e,o){t.exports=o.p+"img/list.a688c249.svg"},"980e":function(t,e,o){"use strict";o("a8c8")},"9c0c":function(t,e,o){},a8c8:function(t,e,o){},b0f6:function(t,e,o){t.exports=o.p+"img/remove.95f30ee9.svg"},e06f:function(t,e,o){},f8f2:function(t,e,o){"use strict";o("e06f")},f902:function(t,e,o){}});
//# sourceMappingURL=app.d548c2e6.js.map
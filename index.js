Vue.component('person-list', {
    props:['people'],
    template:
    `<ul>
        <li v-for='person in people'>{{ person.name }}</li>
    </ul>`
})
Vue.component('plan', {
    template:'#plan-template',
    // props are custom attributes
    props: ['name']
})
var app = new Vue({
    el:'#root',
    // component:['person-list'],
    data:{
        message:'123',
        people:[
            {name:'Peter'},
            {name:'Daniel'},
            {name:'Eris'}
        ],
        newPerson:''
    },
	methods:{
  	addPerson:function(){
    	this.people.push({name:this.newPerson})
        this.newPerson = ''
    }
    },
    //filters只會改變呈現，不會改變真正的值
    filters:{
        capitalize:function(value){
            return value.toUpperCase()
    }
    },
    computed:{
        personify:function(){
            if(this.newPerson.length > 1)
            {
                return this.newPerson + 'y'
            }
        }
    },
    created: function(){
        console.log('Created')
    },
    mounted: function(){
        console.log('Mounted')
    },
    updated: function(){
        console.log('Updated')
    },
    destroyed: function(){
        console.log('Destroyed')
    }
})
// 下面為了觸發destroyed而做的範例
// setTimeout(function(){
//     app.$destroy();
// },5000);
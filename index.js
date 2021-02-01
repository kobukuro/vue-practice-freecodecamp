Vue.component('cat-list', {
    template:
    `<ul>
        <li>cat</li>
    </ul>`
})
Vue.component('plan', {
    template:'#plan-template',
    // props are custom attributes
    props: ['name']
})
var app = new Vue({
    el:'#root',
    // component:['cat-list'],
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
    }
})

// var app = new Vue({
//     el:'#root',
//     data:{
//         newPerson:'123'
//     }
// })
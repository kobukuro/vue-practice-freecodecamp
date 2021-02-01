var app = new Vue({
	el:'#root',
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
  }
})
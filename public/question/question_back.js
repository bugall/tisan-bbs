var test = Backbone.Model.extend({
    defaults:{
        name:'',
        age:''
    },
    url:'/users',
    initialize:function(){
        this.on('change',function(){
            console.log(this.toJSON());
        })
    }
})

var tests= new test();
tests.fetch({
    success:function(model,text){
        model.set(text);
    },error:function(err){
        console.log(err);
    }
});

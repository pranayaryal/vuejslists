new Vue({
    el: '#tasks',

    data: {

        tasks: [
            { body: 'go to the store', completed: false}
        ],

        newTask: ''
    },


    methods: {

        addTask: function(e) {

            e.preventDefault();

            this.tasks.push({

                body: this.newTask,
                completed:false

            });

        }

    }
})
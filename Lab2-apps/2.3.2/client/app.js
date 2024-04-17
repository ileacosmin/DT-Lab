var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
        openNewUserPanel: false,
        newUser: { name: '', city: '' },
        username: '',
        usercity: '',
        userid: 0,
        msg: ''
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        remove: function () {
            usersService = users();
            usersService.remove(this.userid).then(response => (this.msg = response.data));
            location.reload();
        },
        open: function () {
            this.openNewUserPanel = true;
        },
        close: function () {
            this.openNewUserPanel = false;
        },
        save: function () {
            usersService.save(this.newUser).then(response => {
                usersService.get().then(response => {
                    this.users = response.data;
                });
            });
            this.openNewUserPanel = false;
        }
    }
})


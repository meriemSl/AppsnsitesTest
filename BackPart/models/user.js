class User {
    constructor(id,userName, firstName, lastName,email,
           phone, password, gender ) {
            this.id = id;
            this.userName = userName;
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone= phone;
            this.email = email;
            this.password = password;
            this.gender = gender
    }
}
module.exports = User;
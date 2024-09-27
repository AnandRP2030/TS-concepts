interface User {
    name: string;
    age: number;
}

type UsersList = User[];


function filterLegalusers (users: UsersList) {
    console.log(users.filter(user => user.age >= 18));
}

const users: UsersList = [{name: "a", age: 9}, {name: "b", age: 33}];
filterLegalusers(users)

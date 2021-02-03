const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Emma Watson', phone: '01822272575'};

const {phone, gfName, salary, job} = person;
console.log(gfName, phone, salary, job);
console.log(gfName, phone, salary, job);

const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, nextFriend, ...restFriend] = friends;
console.log(chotoFriend,nextFriend, restFriend);


const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);
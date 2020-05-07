import { User } from './models/User';

// ***************************************************************
// const user = new User({ id: 1 });
// console.log(user);  // ? why not is just { id: 1 }
// user.fetch();
// ***************************************************************

const user = new User({ name: 'James', age: 0 });
// user.set({ name: 'Jess', age: 20 });
// user.save();
user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
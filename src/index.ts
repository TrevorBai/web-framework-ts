import { User, UserProps } from './models/User';
import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
})

collection.fetch();
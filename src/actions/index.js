import { FETCH_USERS } from './types';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: [
    {name: 'Zach'},
    {name: 'Alex'},
    {name: 'Stone'},
  ]
})

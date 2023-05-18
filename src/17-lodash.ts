import _ from 'lodash';

const data = [
  {
    username: 'rod',
    role: 'admin'
  },
  {
    username: 'jos',
    role: 'seller'
  },
  {
    username: 'nei',
    role: 'seller'
  },
  {
    username: 'sar',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

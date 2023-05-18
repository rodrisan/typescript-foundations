import { subDays, format } from 'date-fns';

const date = new Date(1998, 0, 1); // 0 = January // 0 = day 1

const rta = subDays(date, 234);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);

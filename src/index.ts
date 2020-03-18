import { interval, timer } from 'rxjs';

const interval$ = interval(1e3);
const timer$ = timer(2e3);

timer$.subscribe(value => {
    document.getElementById('app').innerText += ', ' + value;
},
null,
() => alert('done'));
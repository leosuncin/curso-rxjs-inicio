import { range, asyncScheduler } from 'rxjs';

const src$ = range(1, 100, asyncScheduler);

src$.subscribe(value => {
    document.getElementById('app').innerText += ', ' + value;
});
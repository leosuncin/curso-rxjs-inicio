import { of } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5, 6, 7);

obs$.subscribe(next => {
    const p = document.createElement('p');
    p.innerText = ''+next;
    document.body.appendChild(p);
},
null,
() => alert('done'));

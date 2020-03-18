import { Observable } from 'rxjs';

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.complete();
});

obs$.subscribe(resp => {
    const p = document.createElement('p');
    p.innerText = resp;
    document.body.appendChild(p);
});

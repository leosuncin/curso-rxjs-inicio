import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next(value) {
        const p = document.createElement('p');
        p.innerText = value;
        document.body.appendChild(p);
    },
    error(error) {
        alert(error)
    },
    complete() {
        document.body.style.backgroundColor = 'black';
    }
};

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // const a = undefined;
    // a.nombre = 'Fernando';

    subscriber.complete();
});

obs$.subscribe(observer);

import { Observable, Observer } from 'rxjs';

const observer: Observer<string|number> = {
    next(value) {
        const p = document.createElement('p');
        p.innerText = String(value);
        document.body.appendChild(p);
    },
    error(error) {
        alert(error)
    },
    complete() {
        alert('Done');
    }
};

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // const a = undefined;
    // a.nombre = 'Fernando';

    subscriber.complete();
});

// obs$.subscribe(observer);
const interval$ = new Observable<number>(subscriber => {
    let i = 0;
    const interval = setInterval(() => subscriber.next(++i), 1e3);

    setTimeout(() => subscriber.complete(), 2500);

    return () => clearInterval(interval);
});

const subs1 = interval$.subscribe({
    next(value) {
        console.info(value);
    },
    error: console.warn,
    complete() {
        alert('Ciao');
    }
});
const subs2 = interval$.subscribe(observer);

subs1.add(subs2);

setTimeout(() => subs1.unsubscribe(), 3e3);

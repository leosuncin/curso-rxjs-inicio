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

// obs$.subscribe(observer);
const interval$ = new Observable<number>(subscriber => {
    let i = 0;
    const interval = setInterval(() => subscriber.next(i++), 1e3);

    return () => clearInterval(interval);
});

const subs = interval$.subscribe({
    next(value) {
        console.info(value);
    },
    error: console.warn,
    complete() {
        alert('Ciao');
    }
});

setTimeout(() => subs.unsubscribe(), 3e3);

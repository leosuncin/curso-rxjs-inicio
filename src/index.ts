import { Observable, Observer, Subject } from 'rxjs';

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

const interval$ = new Observable<number>(subs => {
    const interval = setInterval(() => subs.next(Math.random()), 1e3);

    return () => clearInterval(interval);
});

const subject$ = new Subject<number>();
interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(console.info);

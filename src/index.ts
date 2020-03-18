import { fromEvent } from 'rxjs';

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup')

src1$.subscribe(event => {
    const app = document.getElementById('app');
    app.innerText = `position: (${event.x}, ${event.y})`;
});
src2$.subscribe(event => {
    const app = document.getElementById('app');
    app.innerText = `key: ${event.key}`;
});

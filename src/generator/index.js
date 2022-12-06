function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);

function* iterator(array){
    for (let value of array){
        yield value;
    }
}

const it = iterator(['sebastian', 'camilo', 'juan', 'pablo'])
console.log(it.next())
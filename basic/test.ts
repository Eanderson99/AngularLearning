function greet(person: Person) {
    console.log(person.name + ' from ' + person.from)
}

greet({
    name: 'houari',
    from: 'algeria'
});

interface Person {
    name: string,
    from: string
}

// learn: let, const, arrow function, class, modules
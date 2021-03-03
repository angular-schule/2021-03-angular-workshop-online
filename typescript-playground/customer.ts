export class Customer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    // Methode
    fooBar(foo: number): string {
        setTimeout(() => {
            console.log('Die ID ist', this.id);
        }, 2000);

        console.log(this.id);

        // Funktion
        function bar() {}

        return 'Hallo';
    }
}

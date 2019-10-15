import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'World';


    contacts = [
        {
            Id : '003',
            Name : 'Pankaj',
            Title : 'Mr.'
        },
        {
            Id : '004',
            Name : 'Ankur',
            Title : 'Mr.'
        },
        {
            Id : '005',
            Name : 'Nikhil',
            Title : 'Mr.'
        }
    ];
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}
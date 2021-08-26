import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
    export class AppComponent {

        loggedIn: boolean = false;
        stylePreference: string;

        logIn(evt) {
            console.log(evt);
            this.loggedIn = evt;
            this.user.registered = !this.user.registered;
        }

        setStylePreference(value) {
            this.stylePreference = value;
        }

        setImportance() {
            if(this.stylePreference === 'hilite') {
                return {
                    'background-color': 'yellow'
                };
            } else if (this.stylePreference === 'caps') {
                return {
                    'text-transform': 'uppercase'
                };
            }
        }
        
        user = {
            id:1,
            name:'Kevin',
            gender:'M',
            ageGroup:'51+',
            userCode:'M51+',
            reqs:{},
            reqsStatus: {
                fruitMet: false,
                vegMet: false,
                proteinMet: false,
                grainMet:false
            }, 
            registered: false,
            email:'kevin@kevinruse.com'
        };
    }
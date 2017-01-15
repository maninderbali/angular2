import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.interface';

@Component({
    selector: 'signup',
    templateUrl: './app/signup/signup.component.html'
})
export class SignupComponent implements OnInit {
    user: FormGroup;

    constructor(private fb: FormBuilder) {console.log('constructor');}
    ngOnInit() {
        console.log('dsdsdsdsddsdsd');
        this.user = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            account: this.fb.group({
                email: ['', Validators.required],
                confirm: ['', Validators.required]
            })
        });
    }
    onSubmit({ value, valid }: { value: User, valid: boolean }) {
        console.log(value, valid);
    }
}

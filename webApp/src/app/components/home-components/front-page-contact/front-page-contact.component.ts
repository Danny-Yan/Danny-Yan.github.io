import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { environment } from '../../../../environments/environment';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { RecaptchaModule } from "ng-recaptcha-2";

@Component({
    selector: 'app-front-page-contact',
    imports: [FontAwesomeModule, FormsModule, NgClass, NgIf, RecaptchaModule],
    templateUrl: './front-page-contact.component.html',
    styleUrl: './front-page-contact.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FrontPageContactComponent {
    constructor() { }

    color: string = '';
    showAlert: boolean = false;
    alertMessage: string = '';
    onSubmit: boolean = false;
    iconLoad = faArrowRotateForward;
    emailJsServiceId = environment?.emailJsServiceId ?? '';
    emailJsTemplateId = environment?.emailJsTemplateId ?? '';
    emailJsPublicKey = environment?.emailJsPublicKey ?? '';
    reCaptcha2SiteKey = environment?.reCaptcha2SiteKey ?? '';
    captchaToken = '';
    contactFormValues = {
        name: '',
        email: '',
        body: '',
    };


    reset(){
        // this.color = '';
        // this.showAlert = false;
        // this.alertMessage = '';
        // this.onSubmit = false;
        // this.captchaToken = '';
        // this.contactFormValues = {
        //     name: '',
        //     email: '',
        //     body: '',
        // };

        location.reload();
    }

    get alertColor() {
        return `text-${this.color}-400`;
    }

    // Send email function
    sendEmail(e: Event) {
        e.preventDefault();

        emailjs.sendForm(environment.emailJsServiceId, environment.emailJsTemplateId, e.target as HTMLFormElement, {
                publicKey: environment.emailJsPublicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    this.reset();
                },
                (error) => {
                    console.log('FAILED...', (error as EmailJSResponseStatus).text);
                    this.reset();
                },
            );
    }

    // Resolve reCAPTCHA 
    resolved(captchaResponse: any) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }
}



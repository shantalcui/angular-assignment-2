import { Component } from '@angular/core';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html'
})

export class UsernameComponent {
    hasContent = false;
    userName = '';
    searchResult = '';

    setUserName(event: any) {
        this.userName = event;
    }

    ngOnInit() { }

    onSearch() {
        this.searchResult = "Welcome " + this.userName + "!";

    }

    isNotEmpty() {
        this.hasContent = true;
    }
}
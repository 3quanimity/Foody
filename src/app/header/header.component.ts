import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent {
    @Output() destination = new EventEmitter<string>()
    collapsed = true

    onNavigate(event) {
        this.destination.emit(event.target.textContent)
    }

}
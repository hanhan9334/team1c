import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [EditComponent],
    exports: [EditComponent] 
})
export class PagesModule {}
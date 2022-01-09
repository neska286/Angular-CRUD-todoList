import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../services/todo.service';

import { ModalService } from './modal.service';

@Component({ 
    selector: 'jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;
    bodyText: string;
    showValidationErrors:boolean = false;
    


    constructor(private modalService: ModalService, private el: ElementRef,private todoService : TodoService) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
      

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }
   
    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
        
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }

    // onEditToDo(){
    //    this.todoService.update()
    // }
    @Output() updateModel = new EventEmitter();
    updateTodo(form){
        if(form.invalid) return this.showValidationErrors = true;
        this.updateModel.emit(form.value.title);
        form.reset();
    }
    closeModal(id: string) {
        this.modalService.close(id);
    }
 
}
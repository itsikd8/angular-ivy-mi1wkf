import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicTableService } from '../../services/dynamic-table.service'; // to use the service we need to import DynamicTableService class//
import { TableData } from 'src/app/models/dynamic-table.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  tableData: any; // storing the data in this variable
  columnHeaders: any;

  constructor(private service: DynamicTableService,private modalService: NgbModal) {} // dependency injection

  ngOnInit() {
    this.getTableData(); // calling the getTableData() after the constructor when the ngOnInit() is envoked
  }

  getTableData() {
    this.service.getTableDatas().subscribe((res) => {
      let returnData = res as any;
      if(returnData.Items.length > 0)
      {
        this.columnHeaders = Object.keys(returnData.Items[0]);
      }
      this.tableData = returnData.Items;
    

      console.log(this.tableData); //response comes as data schema defined in model interface
    });
  }
  open(data) {
    const modalRef = this.modalService.open(NgbdModalContent);
    let tmpdata = {
      resdata:data,
      columns: this.columnHeaders
    }
    modalRef.componentInstance.data = tmpdata;
    //modalRef.componentInstance.columns = this.columnHeaders ;
  }

  getColorByCountry(answer): string {
    if(answer.ShipCountry == 'France')
    {     
       return 'red';
    }
    else if(answer.ShipCountry == 'Germany')
    {
      return 'green';
    }
    else if(answer.ShipCity == 'Rio de Janeiro')
    {
      return 'yellow';
    }
  }
}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <ng-template ngFor let-c [ngForOf]="tmparr">
    <p>
      {{c}}
    </p>
  </ng-template>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() data:any;
  private tmparr:any;
  constructor(public activeModal: NgbActiveModal) {

    
  }

  ngOnInit()
  {
    this.tmparr = this.data.columns
    console.log(this.data.columns);
  }
}

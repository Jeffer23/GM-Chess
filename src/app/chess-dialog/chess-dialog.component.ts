import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chess-dialog',
  templateUrl: './chess-dialog.component.html',
  styleUrls: ['./chess-dialog.component.css']
})
export class ChessDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

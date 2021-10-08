import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface FileNode {
  children: FileNode[];
  filename?: string;
  type: any;
}


@Component({
  selector: 'app-navi-tree',
  templateUrl: './navi-tree.component.html',
  styleUrls: ['./navi-tree.component.scss'],
})
export class NaviTreeComponent implements OnInit {
  show = false;
 nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor() {
this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
 }
  ngOnInit(): void {
         this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        filename: "folder",
        type: "",
        children: [
          {
            filename: "test3",
            type: "exe",
            children: [
              {
                filename: "test31",
                type: "txt",
                children: []
              }
            ],
          }
        ],
      },
      {
        filename: "test2",
        type: "exe",
        children: [
          {
            filename: "test21",
            type: "doc",
            children: []
          }
        ],
      },
    ]);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  
  hasNestedChild = (_: number, nodeData: FileNode) => {return (nodeData.children.length > 0); };

  public showState(): string {
    console.log("show state")
    return this.show ? 'show' : 'hide';
  }
  
  public toggle() {
    console.log(this.show);
    this.show = !this.show;
  }
}

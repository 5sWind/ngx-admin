import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
  preview?: string;
}

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent {
  customColumn = 'name';
  defaultColumns = ['size', 'kind', 'items', 'preview'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { name: '计算机科学', size: '1.638 MB', items: 5, kind: '目录', preview: '' },
      children: [
        { data: { name: 'Python元学习:通用人工智能的实现', kind: 'pdf', size: '240 KB', preview: '' } },
        { data: { name: '机器学习实战', kind: 'pdf', size: '290 KB', preview: '' } },
        {
          data: {
            name: 'IPFS - Content Addressed, Versioned, P2P File System', kind: 'pdf', size: '208 KB', preview: 'https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf',
          },
        },
        { data: { name: '人工智能简史', kind: 'pdf', size: '900 KB', preview: '' } },
      ],
    },
    {
      data: { name: '外国文学', kind: '目录', size: '400 KB', items: 2 },
      children: [
        { data: { name: '白夜行', kind: 'pdf', size: '100 KB' } },
        { data: { name: '人类简史', kind: 'pdf', size: '300 KB' } },
      ],
    },
    {
      data: { name: '心理学', kind: '目录', size: '5.2 MB', items: 2 },
      children: [
        { data: { name: '亲密关系', kind: 'epub', size: '1.5 MB' } },
        { data: { name: '变态心理学（第6版）', kind: 'pdf', size: '3.7 MB' } },
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === '目录';
  }
}

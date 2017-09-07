import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class TreeViewService {
  onNodeSelected: EventEmitter<Object> = new EventEmitter();
  onIconSelected: EventEmitter<Object> = new EventEmitter();
  onAddCatalog: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  emitNodeChanged(node) {
    this.onNodeSelected.emit(node);
  }
  getNodeEmitter() {
    return this.onNodeSelected;
  }

  emitIconChanged(node) {
    this.onIconSelected.emit(node);
  }
  getIconEmitter() {
    return this.onIconSelected;
  }

  emitaddCatalogChanged(node) {
    this.onAddCatalog.emit(node);
  }
  getaddCatalogEmitter() {
    return this.onAddCatalog;
  }
}
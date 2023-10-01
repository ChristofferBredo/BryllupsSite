import { Component, Type } from "@angular/core";

export interface Link {
    path: string,
    label: string,
    component: Type<any>,

}

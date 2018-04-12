import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountNewComponent } from './account-new/account-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountListComponent, AccountDetailComponent, AccountNewComponent]
})
export class AccountModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
      { path: 'users', loadChildren: () => import('./users/component/user.module').then(m => m.UserModule) },
      { path: 'delivery-notes', loadChildren: () => import('./deliverynotes/component/delivery-note.module').then(m => m.DeliveryNoteModule) }
  ])],
  exports: [RouterModule]
})
export class ArtifactsRoutingModule { }

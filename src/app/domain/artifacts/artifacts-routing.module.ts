import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
      { path: 'users', loadChildren: () => import('./users/component/user.module').then(m => m.UserModule) }
  ])],
  exports: [RouterModule]
})
export class ArtifactsRoutingModule { }

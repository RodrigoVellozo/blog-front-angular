import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { UsuarioService } from './providers/usuario/usuario.service';
import { PublicacaoService } from './providers/publicacao/publicacao.service';
import { HttpClientModule} from '@angular/common/http';
import { PublicacaoDetailComponent } from './publicacao-detail/publicacao-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    PublicacaoDetailComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'publicacao-detail',
        component: PublicacaoDetailComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'admin',
        component: AdminComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])

  ],
  providers: [UsuarioService, PublicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

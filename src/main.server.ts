import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { OrderComponent } from './app/order/order.component';
import { OrderConfirmComponent } from './app/order-confirm/order-confirm.component';
import { LoginComponent } from './app/login/login.component'
import { RegisterComponent } from './app/register/register.component'
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(RegisterComponent, config);

export default bootstrap;

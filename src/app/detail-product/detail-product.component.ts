import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-detail-product',
    standalone: true,
    templateUrl: './detail-product.component.html',
    styleUrl: './detail-product.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class DetailProductComponent {

}

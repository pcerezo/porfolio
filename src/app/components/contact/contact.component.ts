import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nombre: string;
  email: string;
  mensaje: string;
  envioErroneo: Boolean | undefined;
  enviado: Boolean | undefined;
  envioExitoso: Boolean | undefined;

  constructor(
    private contactService: ContactService
  ) {
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }

  submitForm() {
    console.log('Formulario enviado', this.nombre, this.email, this.mensaje);
    const formulario = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };
    this.contactService.enviarCorreo(formulario).subscribe((response) => {
      if (response.status == "200") {
        this.envioExitoso = true;
        this.enviado = true;
      }
      else {
        this.envioErroneo = true;
        console.log("(resultado) => envioErroneo");
      }
      console.log("Resultado del envío: " + response.message);
    },
    (error) => {
        this.envioErroneo = true;
        console.log("envioErroneo: " + error);
    });
  }
}

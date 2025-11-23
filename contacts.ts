import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css']   // ← CORREGIDO
})
export class Contacts {
  form = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  enviado = false;

  enviarFormulario() {
    this.enviado = true;

    console.log("Formulario enviado:", this.form);

    this.form = { nombre: '', correo: '', mensaje: '' };

    setTimeout(() => this.enviado = false, 3000);
  }
}

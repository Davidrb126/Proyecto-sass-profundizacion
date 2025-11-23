import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapAniosPipe } from '../map-anios.pipe';  // Importar el pipe

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MapAniosPipe],  // Asegúrate de importar el pipe aquí
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  // ===== Películas =====
  peliculas = [
    {
      id: 1,
      titulo: "Thunderbolts",
      año: 2025,
      releaseDate: "2025-07-25",
      imagen: "https://image.tmdb.org/t/p/original/yDWU8YyFkPnlVY627QXPvct8bz9.jpg",
      sinopsis: "Un grupo de antihéroes reclutados por el gobierno se une en una misión secreta para enfrentar amenazas que los Vengadores no pueden manejar.",
      actores: ["Florence Pugh", "Sebastian Stan", "David Harbour", "Wyatt Russell"],
      gallery: [
        "https://image.tmdb.org/t/p/original/yDWU8YyFkPnlVY627QXPvct8bz9.jpg",
        "https://image.tmdb.org/t/p/original/qQeV2r4ZbYwRA1D3qfSsqnWfGhc.jpg",
        "https://image.tmdb.org/t/p/original/6M1bIctdTQ7hU1tQpFMPB4L2EFU.jpg"
      ]
    },
    {
      id: 2,
      titulo: "Rush: Pasión y Gloria",
      año: 2013,
      releaseDate: "2013-09-20",
      imagen: "https://image.tmdb.org/t/p/original/AqnOb3S6C9yttv9b2ZmrdZALmxR.jpg",
      sinopsis: "Basada en la legendaria rivalidad entre los pilotos de Fórmula 1 James Hunt y Niki Lauda durante la temporada de 1976.",
      actores: ["Chris Hemsworth", "Daniel Brühl", "Olivia Wilde"],
      gallery: [
        "https://image.tmdb.org/t/p/original/AqnOb3S6C9yttv9b2ZmrdZALmxR.jpg",
        "https://image.tmdb.org/t/p/original/xm9K4Z4VfqakiobP6KyHRcY6z9b.jpg",
        "https://image.tmdb.org/t/p/original/yfJdUyV6m9sOf0dq5M8bA9V9BlC.jpg"
      ]
    },
    {
      id: 3,
      titulo: "The Dark Knight",
      año: 2008,
      releaseDate: "2008-07-18",
      imagen: "https://image.tmdb.org/t/p/original/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg",
      sinopsis: "Batman se enfrenta a su enemigo más temido: el Joker, quien desata el caos en Ciudad Gótica.",
      actores: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhaal"],
      gallery: [
        "https://image.tmdb.org/t/p/original/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg",
        "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "https://image.tmdb.org/t/p/original/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
      ]
    },
    {
      id: 4,
      titulo: "Avatar",
      año: 2009,
      releaseDate: "2009-12-18",
      imagen: "https://image.tmdb.org/t/p/original/b3NuCAgZ4lunFpIhM4gneaHP3yW.jpg",
      sinopsis: "Jake Sully viaja al planeta Pandora y deberá decidir entre seguir las órdenes humanas o proteger a los Na’vi.",
      actores: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
      gallery: [
        "https://image.tmdb.org/t/p/original/b3NuCAgZ4lunFpIhM4gneaHP3yW.jpg",
        "https://image.tmdb.org/t/p/original/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        "https://image.tmdb.org/t/p/original/4ZfKp6k3oZ6lUDF5V7xS6ZyYHbK.jpg"
      ]
    },
    {
      id: 5,
      titulo: "Capitán América: Civil War",
      año: 2016,
      releaseDate: "2016-04-27",
      imagen: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
      sinopsis: "Los Vengadores se dividen en dos bandos por un conflicto internacional con víctimas y responsabilidad política.",
      actores: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson", "Sebastian Stan"],
      gallery: [
        "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
        "https://image.tmdb.org/t/p/original/m8A1igV63K2U9kzByK8U8s9oUBj.jpg",
        "https://image.tmdb.org/t/p/original/5A0MYfxCsY9rGvZ5GJb9aD2RGRD.jpg"
      ]
    },
    {
      id: 6,
      titulo: "Los 4 Fantásticos",
      año: 2025,
      releaseDate: "2025-08-10",
      imagen: "https://image.tmdb.org/t/p/original/ckfiXWGEMWrUP53cc6QyHijLlhl.jpg",
      sinopsis: "Cuatro científicos obtienen poderes extraordinarios tras un experimento espacial.",
      actores: ["Pedro Pascal", "Vanessa Kirby", "Ebon Moss-Bachrach", "Joseph Quinn"],
      gallery: [
        "https://image.tmdb.org/t/p/original/ckfiXWGEMWrUP53cc6QyHijLlhl.jpg",
        "https://image.tmdb.org/t/p/original/9gjQxHC7JMWQISaRzYtr5Z5gC9E.jpg",
        "https://image.tmdb.org/t/p/original/sW1JYwBoHqg6BWuO6oYvBtYOKrO.jpg"
      ]
    }
  ];

// ===== VARIABLES =====
  peliculasFiltradas = [...this.peliculas];
  peliculaActual: any = null;

  buscarTexto = '';
  filterYear = '';
  sortBy = 'nuevo';

  mostrarDetalle = false;

  constructor() {}

  ngOnInit(): void {
    this.aplicarFiltros();
  }

  // ===== LÓGICA =====
  ordenarPeliculas(arr: any[], modo: string = 'nuevo') {
    return arr.sort((a, b) => {
      const da = new Date(a.releaseDate).getTime();
      const db = new Date(b.releaseDate).getTime();
      return modo === 'nuevo' ? db - da : da - db;
    });
  }

  aplicarFiltros() {
    let res = this.peliculas.filter(p =>
      p.titulo.toLowerCase().includes(this.buscarTexto.toLowerCase())
    );

    if (this.filterYear) {
      res = res.filter(p => String(p['año']) === String(this.filterYear));
    }

    this.peliculasFiltradas = this.ordenarPeliculas(res, this.sortBy);
  }

  verDetalle(id: number) {
    this.peliculaActual = this.peliculas.find(p => p.id === id);
    this.mostrarDetalle = true;
  }

  volverListado() {
    this.mostrarDetalle = false;
  }
}
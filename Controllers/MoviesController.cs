// Controllers/MoviesController.cs
using Microsoft.AspNetCore.Mvc;
using CinemaHub.Models;
using System.Collections.Generic;

namespace CinemaHub.Controllers
{
    public class MoviesController : Controller
    {
        public IActionResult Index()
        {
            var movies = new List<Movie>
            {
                // ... (Filmlerin örnek verileri burada devam ediyor) ...
                new Movie {
                    Id = 1,
                    Src = "~/images/posters/cyberpunk_samurai.jpg",
                    Title = "Cyberpunk Samurai",
                    Category = "Action",
                    ImdbRating = 8.5,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Keanu Reeves", "Scarlett Johansson" },
                    Directors = new List<string> { "Denis Villeneuve" }
                },
                new Movie {
                    Id = 2,
                    Src = "~/images/posters/galactic_odyssey.jpg",
                    Title = "Galactic Odyssey",
                    Category = "Sci-Fi",
                    ImdbRating = 7.9,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Timothée Chalamet", "Zendaya" },
                    Directors = new List<string> { "Christopher Nolan" }
                },
                new Movie {
                    Id = 3,
                    Src = "~/images/posters/whispers_dark.jpg",
                    Title = "Whispers in the Dark",
                    Category = "Horror",
                    ImdbRating = 7.2,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Jenna Ortega", "Ethan Hawke" },
                    Directors = new List<string> { "James Wan" }
                },
                new Movie {
                    Id = 4,
                    Src = "~/images/posters/comedy_chaos.jpg",
                    Title = "Comedy Club Chaos",
                    Category = "Comedy",
                    ImdbRating = 6.8,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Adam Sandler", "Melissa McCarthy" },
                    Directors = new List<string> { "Adam McKay" }
                },
                new Movie {
                    Id = 5,
                    Src = "~/images/posters/great_detective.jpg",
                    Title = "The Great Detective",
                    Category = "Drama",
                    ImdbRating = 8.1,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Benedict Cumberbatch", "Rosamund Pike" },
                    Directors = new List<string> { "David Fincher" }
                },
                new Movie {
                    Id = 6,
                    Src = "~/images/posters/mythic_realms.jpg",
                    Title = "Mythic Realms",
                    Category = "Fantasy",
                    ImdbRating = 8.9,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Henry Cavill", "Anya Taylor-Joy" },
                    Directors = new List<string> { "Peter Jackson" }
                },
                 new Movie {
                    Id = 7,
                    Src = "~/images/posters/quantum_leap.jpg",
                    Title = "Quantum Leap",
                    Category = "Sci-Fi",
                    ImdbRating = 8.3,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Tom Hardy", "Emily Blunt" },
                    Directors = new List<string> { "Christopher Nolan" }
                },
                new Movie {
                    Id = 8,
                    Src = "~/images/posters/silent_screams.jpg",
                    Title = "Silent Screams",
                    Category = "Horror",
                    ImdbRating = 7.5,
                    ReleaseYear = 2025,
                    Actors = new List<string> { "Mia Goth", "Bill Skarsgård" },
                    Directors = new List<string> { "Ari Aster" }
                },
                new Movie {
                    Id = 9,
                    Src = "~/images/posters/laughing_stock.jpg",
                    Title = "Laughing Stock",
                    Category = "Comedy",
                    ImdbRating = 7.0,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Kevin Hart", "Tiffany Haddish" },
                    Directors = new List<string> { "Judd Apatow" }
                }
            };

            // ESKİ: return View(movies);  <-- Bu varsayılan yolları arar.
            // YENİ: Tam yolu belirtiyoruz, çünkü View dosyanızın olduğu klasör adı "Moviespage".
            return View("~/Views/Moviespage/Index.cshtml", movies);
        }

        // Film detay sayfası için ayrı bir action da ekleyebilirsiniz
        public IActionResult Details(int id)
        {
            // id'ye göre film detayını getir ve View'e gönder
            return View();
        }
    }
}
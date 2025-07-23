// Controllers/SeriesController.cs
using Microsoft.AspNetCore.Mvc;
using CinemaHub.Models; // Series modelini kullanmak için
using System.Collections.Generic;

namespace CinemaHub.Controllers
{
    public class SeriesController : Controller
    {
        public IActionResult Index()
        {
            // Bu kısımda gerçek veritabanınızdan veya bir API'den dizi verilerini almanız gerekir.
            // Şimdilik örnek verilerle dolduruyorum:
            var series = new List<Series>
            {
                new Series {
                    Id = 1,
                    Src = "~/images/series_posters/space_exploration.jpg", // Dizi poster yolu
                    Title = "Space Exploration",
                    Category = "Sci-Fi",
                    ImdbRating = 9.1,
                    ReleaseYear = 2022,
                    Actors = new List<string> { "Chris Evans", "Anna Kendrick" },
                    Directors = new List<string> { "JJ Abrams" }
                },
                new Series {
                    Id = 2,
                    Src = "~/images/series_posters/mystery_island.jpg",
                    Title = "Mystery Island",
                    Category = "Drama",
                    ImdbRating = 8.8,
                    ReleaseYear = 2021,
                    Actors = new List<string> { "Tom Hanks", "Elizabeth Olsen" },
                    Directors = new List<string> { "Damon Lindelof" }
                },
                new Series {
                    Id = 3,
                    Src = "~/images/series_posters/ancient_kingdom.jpg",
                    Title = "Ancient Kingdom",
                    Category = "Fantasy",
                    ImdbRating = 9.3,
                    ReleaseYear = 2023,
                    Actors = new List<string> { "Henry Cavill", "Emilia Clarke" },
                    Directors = new List<string> { "David Benioff", "D.B. Weiss" }
                },
                new Series {
                    Id = 4,
                    Src = "~/images/series_posters/tech_startup.jpg",
                    Title = "Tech Startup",
                    Category = "Comedy",
                    ImdbRating = 7.5,
                    ReleaseYear = 2020,
                    Actors = new List<string> { "Kumail Nanjiani", "Issa Rae" },
                    Directors = new List<string> { "Mike Judge" }
                },
                new Series {
                    Id = 5,
                    Src = "~/images/series_posters/true_crime_files.jpg",
                    Title = "True Crime Files",
                    Category = "Horror", // Gerilim/Korku türüne daha yakın olabilir
                    ImdbRating = 8.6,
                    ReleaseYear = 2023,
                    Actors = new List<string> { "Rosamund Pike", "Jake Gyllenhaal" },
                    Directors = new List<string> { "Fincher" } // Genelde belgesellerde yönetmen yerine yapımcılar olur
                },
                 new Series {
                    Id = 6,
                    Src = "~/images/series_posters/galactic_empires.jpg",
                    Title = "Galactic Empires",
                    Category = "Sci-Fi",
                    ImdbRating = 9.0,
                    ReleaseYear = 2024,
                    Actors = new List<string> { "Oscar Isaac", "Natalie Portman" },
                    Directors = new List<string> { "George Lucas" }
                },
                new Series {
                    Id = 7,
                    Src = "~/images/series_posters/urban_detectives.jpg",
                    Title = "Urban Detectives",
                    Category = "Drama",
                    ImdbRating = 8.2,
                    ReleaseYear = 2021,
                    Actors = new List<string> { "Idris Elba", "Naomi Watts" },
                    Directors = new List<string> { "Nic Pizzolatto" }
                },
                new Series {
                    Id = 8,
                    Src = "~/images/series_posters/fantasy_saga.jpg",
                    Title = "Fantasy Saga",
                    Category = "Fantasy",
                    ImdbRating = 8.7,
                    ReleaseYear = 2022,
                    Actors = new List<string> { "Jason Momoa", "Gal Gadot" },
                    Directors = new List<string> { "J.R.R. Tolkien" } // Yazar olarak düşünülebilir
                },
                new Series {
                    Id = 9,
                    Src = "~/images/series_posters/workplace_antics.jpg",
                    Title = "Workplace Antics",
                    Category = "Comedy",
                    ImdbRating = 7.1,
                    ReleaseYear = 2020,
                    Actors = new List<string> { "Steve Carell", "Tina Fey" },
                    Directors = new List<string> { "Michael Schur" }
                }
            };

            // Örnek poster yollarını gerçek resim dosyalarınızla değiştirin.
            // wwwroot/images/series_posters/ klasörüne bu resimleri yerleştirmelisiniz.

            // Views/Seriespage/Index.cshtml yolunu belirtiyoruz
            return View("~/Views/Seriespage/Index.cshtml", series);
        }

        // Dizi detay sayfası için ayrı bir action da eklenebilir
        public IActionResult Details(int id)
        {
            // id'ye göre dizi detayını getir ve View'e gönder
            return View();
        }
    }
}
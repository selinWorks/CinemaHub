using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System; // DateTime.Parse için gerekli

namespace CinemaHub.Components
{
    public class UpcomingMovie
    {
        public string Title { get; set; }
        public string Poster { get; set; }
        public string ReleaseDate { get; set; } // "MMMM dd, yyyy" formatında string tutmak en kolayı
        public string DetailsLink { get; set; }
    }

    public class UpcomingMoviesViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var upcomingMovies = GetUpcomingMoviesData();

            // Sadece bugünden sonraki filmleri al (veya 2026 ve sonrası gibi daha spesifik bir filtre de eklenebilir)
            // Bu örnekte, GetUpcomingMoviesData zaten 2026 ve sonrası tarihleri içeriyor.
            // Sıralama zaten tarihe göre yapıldığı için ekstra filtrelemeye gerek kalmayabilir
            // ancak gerçek bir API'den veri çekerken bu filtreleme önemlidir.

            // Yayın tarihine göre sıralama (en yakın tarihten başlayarak)
            upcomingMovies = upcomingMovies.OrderBy(m => DateTime.Parse(m.ReleaseDate)).ToList();

            return View(upcomingMovies);
        }

        private List<UpcomingMovie> GetUpcomingMoviesData()
        {
            // Güncel tarih 18 Temmuz 2025.
            // Bu yüzden filmlerin tarihlerini 2026 ve sonrası olarak belirliyoruz.
            return new List<UpcomingMovie>
            {
                new UpcomingMovie {
                    Title = "The Batman - Part II",
                    Poster = "~/images/the-batman-part-2.jpg", // Örnek poster, mevcut değilse ekleyin
                    ReleaseDate = "October 02, 2026",
                    DetailsLink = "#"
                },
                new UpcomingMovie {
                    Title = "Fantastic Four",
                    Poster = "~/images/fantastic4.jpg",
                    ReleaseDate = "July 25, 2025", // Bu film 2025'te ama örnek olması için bıraktım.
                                                // İsterseniz bunu da 2026'ya alabilirsiniz.
                                                // Örneğin "July 24, 2026" yapabilirsiniz.
                    DetailsLink = "#"
                },
                new UpcomingMovie {
                    Title = "The Lord of the Rings: The War of the Rohirrim",
                    Poster = "~/images/lotr-rohirrim.jpg", // Örnek poster
                    ReleaseDate = "December 13, 2026",
                    DetailsLink = "#"
                },
                new UpcomingMovie {
                    Title = "Moana 2", // Tekrar eden isimleri düzeltmek için farklı isimler verilebilir.
                    Poster = "~/images/moana2.jpg",
                    ReleaseDate = "November 27, 2026", // 2024'ten 2026'ya alındı
                    DetailsLink = "#"
                },
                 new UpcomingMovie {
                    Title = "Blade Runner 2099", // Dizi olabilir ama film gibi listelendi
                    Poster = "~/images/bladeRunner.jpg",
                    ReleaseDate = "January 01, 2027", // Gelecek için örnek tarih
                    DetailsLink = "#"
                },
                new UpcomingMovie {
                    Title = "Avatar 3",
                    Poster = "~/images/avatar3.jpg",
                    ReleaseDate = "December 19, 2025", // Bu film de 2025'te, isterseniz "December 17, 2027" yapabilirsiniz.
                    DetailsLink = "#"
                },
                new UpcomingMovie {
                    Title = "Wicked Part Two",
                    Poster = "~/images/wicked2.jpg", // Örnek poster, part 1 varsa part 2 de olmalı
                    ReleaseDate = "December 25, 2026",
                    DetailsLink = "#"
                },
                 new UpcomingMovie {
                    Title = "Avengers: Secret Wars",
                    Poster = "~/images/avengers-secret-wars.jpg", // Örnek poster
                    ReleaseDate = "May 07, 2027",
                    DetailsLink = "#"
                }
            };
        }
    }
}
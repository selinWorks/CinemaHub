// Models/Series.cs
using System.Collections.Generic;

namespace CinemaHub.Models
{
    public class Series
    {
        public int Id { get; set; }
        public required string Src { get; set; } // Posterin yolu (örn: ~/images/posters/series1.jpg)
        public required string Title { get; set; }
        public required string Category { get; set; } // Tür (Drama, Sci-Fi vb.)
        public double ImdbRating { get; set; }
        public int ReleaseYear { get; set; } // Başlangıç yılı
        public required List<string> Actors { get; set; }
        public required List<string> Directors { get; set; } // Dizilerde Showrunner/Creator da olabilir
        // Dizilere özel ek alanlar (örneğin SeasonCount, IsOngoing) eklenebilir.
        // public int SeasonCount { get; set; }
        // public bool IsOngoing { get; set; }
    }
}
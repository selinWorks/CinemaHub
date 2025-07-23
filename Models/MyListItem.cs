// Models/MyListItem.cs
using System.Collections.Generic;

namespace CinemaHub.Models
{
    public class MyListItem
    {
        public int Id { get; set; }
        public required string Type { get; set; } // "Movie" or "Series"
        public required string Src { get; set; } // Poster path (e.g., "~/images/movie_posters/inception.jpg")
        public required string Title { get; set; }
        public required string Category { get; set; } // Genre (e.g., "Sci-Fi", "Drama")
        public double ImdbRating { get; set; }
        public int ReleaseYear { get; set; }
        public required List<string> Actors { get; set; }
        public required List<string> Directors { get; set; } // Or Creators/Showrunners for series
        public string? Description { get; set; } // Modalda gösterilecek açıklama
        public string? TrailerUrl { get; set; } // Fragman linki
    }
}
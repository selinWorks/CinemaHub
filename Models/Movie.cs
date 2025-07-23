// Models/Movie.cs
using System.Collections.Generic;

namespace CinemaHub.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public required string Src { get; set; }
        public required string Title { get; set; }
        public required string Category { get; set; }
        public double ImdbRating { get; set; }
        public int ReleaseYear { get; set; }
        public required List<string> Actors { get; set; }
        public required List<string> Directors { get; set; }
    }
}
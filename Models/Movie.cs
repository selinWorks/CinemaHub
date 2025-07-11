// Models/Movie.cs
public class Movie
{
    public int Id { get; set; }
    public string Src { get; set; }
    public string Title { get; set; }
    public string Category { get; set; }
    public double ImdbRating { get; set; }
    public int ReleaseYear { get; set; }
    public List<string> Actors { get; set; }
    public List<string> Directors { get; set; }
}

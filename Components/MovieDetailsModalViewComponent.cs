// ViewComponents/MovieDetailsModalViewComponent.cs
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks; // Task için gerekli
using CinemaHub.Models; // MyListItem modelinin namespace'i

namespace CinemaHub.ViewComponents // Bu namespace'i projeninize göre ayarlayın
{
    public class MovieDetailsModalViewComponent : ViewComponent
    {
        // Bu dictionary, API'den veya veritabanından gelecek veriyi simüle eder.
        // Gerçek projede burası bir Repository veya Service katmanından veri çekecektir.
        private readonly Dictionary<int, MyListItem> _allItems = new Dictionary<int, MyListItem>
        {
            // Movies (ID'ler moviespage/index.cshtml ile eşleşmeli)
            {1, new MyListItem { Id = 1, Type = "Movie", Src = "/images/movie_posters/inception.jpg", Title = "Inception", Category = "Sci-Fi", ImdbRating = 8.8, ReleaseYear = 2010, Description = "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", Actors = new List<string> {"Leonardo DiCaprio", "Joseph Gordon-Levitt"}, Directors = new List<string> {"Christopher Nolan"}, TrailerUrl = "https://www.youtube.com/watch?v=YoVb24IkycI" }},
            {2, new MyListItem { Id = 2, Type = "Movie", Src = "/images/movie_posters/matrix.jpg", Title = "The Matrix", Category = "Sci-Fi", ImdbRating = 8.7, ReleaseYear = 1999, Description = "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", Actors = new List<string> {"Keanu Reeves", "Laurence Fishburne"}, Directors = new List<string> {"Lana Wachowski", "Lilly Wachowski"}, TrailerUrl = "https://www.youtube.com/watch?v=m8rvI0k6E6o" }},
            {3, new MyListItem { Id = 3, Type = "Movie", Src = "/images/movie_posters/dune.jpg", Title = "Dune", Category = "Sci-Fi", ImdbRating = 8.0, ReleaseYear = 2021, Description = "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.", Actors = new List<string> {"Timothée Chalamet", "Rebecca Ferguson"}, Directors = new List<string> {"Denis Villeneuve"}, TrailerUrl = "https://www.youtube.com/watch?v=8g18jJclYxI" }},
            {4, new MyListItem { Id = 4, Type = "Movie", Src = "/images/movie_posters/pulp_fiction.jpg", Title = "Pulp Fiction", Category = "Crime", ImdbRating = 8.9, ReleaseYear = 1994, Description= "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", Actors= new List<string> { "John Travolta", "Uma Thurman", "Samuel L. Jackson" }, Directors= new List<string> { "Quentin Tarantino" }, TrailerUrl= "https://www.youtube.com/watch?v=s7EdQ4FqbhY" }},
            {5, new MyListItem { Id = 5, Type = "Movie", Src = "/images/movie_posters/interstellar.jpg", Title= "Interstellar", Category= "Sci-Fi", ImdbRating= 8.6, ReleaseYear= 2014, Description= "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", Actors= new List<string> { "Matthew McConaughey", "Anne Hathaway", "Jessica Chastain" }, Directors= new List<string> { "Christopher Nolan" }, TrailerUrl= "https://www.youtube.com/watch?v=zSWdZVtXT7E" }},
            {6, new MyListItem { Id = 6, Type = "Movie", Src= "/images/movie_posters/godfather.jpg", Title= "The Godfather", Category= "Crime", ImdbRating= 9.2, ReleaseYear= 1972, Description= "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", Actors= new List<string> { "Marlon Brando", "Al Pacino", "James Caan" }, Directors= new List<string> { "Francis Ford Coppola" }, TrailerUrl= "https://www.youtube.com/watch?v=sY1S34973zQ" }},
            {7, new MyListItem { Id = 7, Type = "Movie", Src= "/images/movie_posters/shawshank.jpg", Title= "The Shawshank Redemption", Category= "Drama", ImdbRating= 9.3, ReleaseYear= 1994, Description= "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", Actors= new List<string> { "Tim Robbins", "Morgan Freeman" }, Directors= new List<string> { "Frank Darabont" }, TrailerUrl= "https://www.youtube.com/watch?v=Nmpt9lV3HTQ" }},
            {8, new MyListItem { Id = 8, Type = "Movie", Src= "/images/movie_posters/fight_club.jpg", Title= "Fight Club", Category= "Drama", ImdbRating= 8.8, ReleaseYear= 1999, Description= "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.", Actors= new List<string> { "Brad Pitt", "Edward Norton", "Helena Bonham Carter" }, Directors= new List<string> { "David Fincher" }, TrailerUrl= "https://www.youtube.com/watch?v=BdJKm16Co6M" }},


            // Series (ID'ler seriespage/index.cshtml ile eşleşmeli)
            {101, new MyListItem { Id = 101, Type = "Series", Src = "/images/series_posters/stranger_things.jpg", Title = "Stranger Things", Category = "Horror", ImdbRating = 8.7, ReleaseYear = 2016, Description = "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.", Actors = new List<string> {"Millie Bobby Brown", "David Harbour"}, Directors = new List<string> {"The Duffer Brothers"}, TrailerUrl = "https://www.youtube.com/watch?v=b9EkMc7qLQE" }},
            {102, new MyListItem { Id = 102, Type = "Series", Src = "/images/series_posters/witcher.jpg", Title = "The Witcher", Category = "Fantasy", ImdbRating = 8.2, ReleaseYear = 2019, Description = "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.", Actors = new List<string> {"Henry Cavill", "Freya Allan"}, Directors = new List<string> {"Lauren Schmidt Hissrich"}, TrailerUrl = "https://www.youtube.com/watch?v=szDFb_jK1_c" }},
            {103, new MyListItem { Id = 103, Type= "Series", Src= "/images/series_posters/breaking_bad.jpg", Title= "Breaking Bad", Category= "Crime", ImdbRating= 9.5, ReleaseYear= 2008, Description= "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.", Actors= new List<string> { "Bryan Cranston", "Aaron Paul", "Anna Gunn" }, Directors= new List<string> { "Vince Gilligan" }, TrailerUrl= "https://www.youtube.com/watch?v=HhesaSNJm44" }},
            {104, new MyListItem { Id = 104, Type= "Series", Src= "/images/series_posters/the_boys.jpg", Title= "The Boys", Category= "Action", ImdbRating= 8.7, ReleaseYear= 2019, Description= "A group of vigilantes known as The Boys set out to take down corrupt superheroes who abuse their superpowers.", Actors= new List<string> { "Karl Urban", "Jack Quaid", "Antony Starr" }, Directors= new List<string> { "Eric Kripke" }, TrailerUrl= "https://www.youtube.com/watch?v=5_gD6j3dJ_M" }},
            {105, new MyListItem { Id = 105, Type= "Series", Src= "/images/series_posters/queen_gambit.jpg", Title= "The Queen's Gambit", Category="Drama", ImdbRating= 8.6, ReleaseYear= 2020, Description= "Orphaned at the age of nine, chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world.", Actors= new List<string> { "Anya Taylor-Joy", "Chloe Pirrie" }, Directors= new List<string> { "Scott Frank", "Allan Scott" }, TrailerUrl= "https://www.youtube.com/watch?v=o0_gS6_M_zE" }},
            {106, new MyListItem { Id = 106, Type= "Series", Src= "/images/series_posters/chernobyl.jpg", Title= "Chernobyl", Category= "Drama", ImdbRating= 9.3, ReleaseYear= 2019, Description= "In April 1986, an explosion at the Chernobyl nuclear power plant in the Ukrainian SSR becomes one of the world's worst man-made catastrophes.", Actors= new List<string> { "Jared Harris", "Stellan Skarsgård", "Emily Watson" }, Directors= new List<string> { "Johan Renck" }, TrailerUrl= "https://www.youtube.com/watch?v=s9APLXM9b68" }},

            // MyList Items (MyListController'daki ID'leri buradaki ile eşleştirin, farklı bir aralıkta olsunlar)
            {1001, new MyListItem { Id = 1001, Type = "Movie", Src = "/images/movie_posters/space_epic.jpg", Title = "Cosmic Odyssey", Category = "Sci-Fi", ImdbRating = 9.2, ReleaseYear = 2024, Description = "A grand space epic exploring humanity's future among the stars.", Actors = new List<string> {"Leonardo DiCaprio", "Scarlett Johansson"}, Directors = new List<string> {"Christopher Nolan"}, TrailerUrl = "https://www.youtube.com/watch?v=example_cosmic_odyssey" }},
            {1002, new MyListItem { Id = 1002, Type = "Series", Src = "/images/series_posters/mystery_island.jpg", Title = "Mystery Island", Category = "Drama", ImdbRating = 8.8, ReleaseYear = 2021, Description = "Survivors of a plane crash find themselves on a mysterious island with many secrets.", Actors = new List<string> {"Tom Hanks", "Elizabeth Olsen"}, Directors = new List<string> {"Damon Lindelof"}, TrailerUrl = "https://www.youtube.com/watch?v=example_mystery_island" }},
            {1003, new MyListItem { Id = 1003, Type = "Movie", Src = "/images/movie_posters/true_history.jpg", Title = "The Forgotten Battle", Category = "Drama", ImdbRating = 7.9, ReleaseYear = 2023, Description = "The harrowing true story of one of the most brutal battles of WWII.", Actors = new List<string> { "Christian Bale", "Florence Pugh" }, Directors = new List<string> { "Denis Villeneuve" }, TrailerUrl = "https://www.youtube.com/watch?v=example_forgotten_battle" }},
            {1004, new MyListItem { Id = 1004, Type = "Series", Src = "/images/series_posters/tech_startup.jpg", Title = "Tech Startup", Category = "Comedy", ImdbRating = 7.5, ReleaseYear = 2020, Description = "A comedic look into the chaotic world of tech startups.", Actors = new List<string> { "Kumail Nanjiani", "Issa Rae" }, Directors = new List<string> { "Mike Judge" }, TrailerUrl = "https://www.youtube.com/watch?v=example_tech_startup" }},
            {1005, new MyListItem { Id = 1005, Type = "Movie", Src = "/images/movie_posters/fantasy_realm.jpg", Title = "Dragon's Curse", Category = "Fantasy", ImdbRating = 8.5, ReleaseYear = 2022, Description = "An epic fantasy adventure where a young hero must lift a dragon's curse.", Actors = new List<string> { "Jason Momoa", "Gal Gadot" }, Directors = new List<string> { "Peter Jackson" }, TrailerUrl = "https://www.youtube.com/watch?v=example_dragons_curse" }}
        };

        // Invoke metodu, View Component çağrıldığında çalışır
        public IViewComponentResult Invoke(int itemId)
        {
            MyListItem item = null;
            if (_allItems.TryGetValue(itemId, out item))
            {
                return View(item); // Modeli View'e gönder
            }
            // Öğenin bulunamadığı durumlar için boş veya hata modeli döndür
            return View(new MyListItem
            {
                Id = -1, // Hata durumu için özel ID
                Title = "Item Not Found",
                Description = "The details for this item could not be loaded.",
                Src = "",
                Type = "",
                Category = "",
                Actors = new List<string>(),
                Directors = new List<string>(),
                ImdbRating = 0.0,
                ReleaseYear = 0,
                TrailerUrl = "#"
            });
        }
    }
}
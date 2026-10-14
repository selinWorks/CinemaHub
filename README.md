# CinemaHub

### Movie Discovery with ASP.NET Core MVC

CinemaHub is a movie discovery web application built with **ASP.NET Core MVC and .NET 8**. It brings together an animated movie catalog, genre navigation, and multi-criteria search in a dark-themed interface.

The project combines Razor views and reusable layout components with vanilla JavaScript for client-side filtering and dynamic movie-card rendering. The primary browsing and search interface is in Turkish.

## Features

- **Animated movie catalog:** Two continuously scrolling rows display movie cards in opposite directions.
- **Genre filtering:** Browse the sample catalog by action, comedy, drama, science fiction, and thriller.
- **Title search:** Find titles using case-insensitive substring matching.
- **Detailed search modal:** Combine title, genre, minimum IMDb-style rating, release year, actor, and director filters.
- **Movie metadata:** Cards display the title, category, rating, and release year.
- **Dark interface:** Custom CSS and Tailwind utilities provide card hover effects, active filter states, and a blurred background while searching.
- **Reusable page structure:** Shared Razor components organize the navigation, footer, and application layout.

## Technology Stack

| Layer | Technology |
| --- | --- |
| Application framework | ASP.NET Core MVC |
| Runtime | .NET 8 |
| Server-side language | C# |
| Views | Razor / CSHTML |
| Browser interactions | Vanilla JavaScript |
| Styling | Tailwind CSS via CDN and custom CSS |
| Catalog data | In-memory JavaScript array |

## How It Works

`HomeController.Index` renders the main Razor view. After the page loads, JavaScript creates movie cards from the sample catalog and distributes them across two animated rows.

Category selection filters the catalog immediately. Focusing the search field opens a detailed search modal, where users can combine multiple criteria. Submitting the form updates the displayed movie rows.

All selected criteria must match. Actor and director fields accept comma-separated names and require every supplied name to match a catalog entry, ignoring letter case. Release year uses an exact match, while rating acts as a minimum threshold.

## Getting Started

### Prerequisites

- .NET 8 SDK
- A modern web browser
- Internet access for the Tailwind CDN and placeholder images

### Run Locally

Download or clone the repository and open a terminal in the directory containing `CinemaHub.csproj`.

```bash
dotnet restore
dotnet run --launch-profile http
```

Open **http://localhost:5139** in your browser. If the launch settings have been changed, use the address printed in the terminal.

For local HTTPS, trust the development certificate where supported and use the HTTPS profile:

```bash
dotnet dev-certs https --trust
dotnet run --launch-profile https
```

The supplied HTTPS profile uses **https://localhost:7274**.

## Project Structure

```text
cinemahub-movie-discovery/
├── Controllers/
│   └── HomeController.cs      # Main page endpoint
├── Models/
│   └── Movie.cs               # Movie metadata model
├── Views/
│   ├── Home/
│   │   └── Index.cshtml       # Catalog and detailed search interface
│   └── Shared/
│       ├── _Layout.cshtml     # Shared page layout
│       ├── _Navbar.cshtml     # Navigation component
│       └── _Footer.cshtml     # Footer component
├── wwwroot/
│   ├── css/site.css           # Cards, animations, and modal styling
│   └── js/site.js             # Sample data, filtering, and rendering
├── Properties/
│   └── launchSettings.json    # Local launch profiles
├── CinemaHub.csproj
└── Program.cs                 # MVC services and request pipeline
```

## Sample Catalog

The application includes **20 sample movie entries** in `wwwroot/js/site.js`. Each entry contains an identifier, image URL, title, category, rating, release year, actors, and directors.

To customize the catalog, edit the `movies` array using the existing structure:

```javascript
{
    id: 21,
    src: "https://placehold.co/400x300?text=Example+Movie",
    title: "Example Movie",
    category: "Dram",
    imdbRating: 8.0,
    releaseYear: 2024,
    actors: ["Example Actor"],
    directors: ["Example Director"]
}
```

Use category names that match the interface's filter values. Catalog entries and ratings are demonstration data; they are not fetched from IMDb or another movie API.

## Application Scope

This version focuses on the home-page catalog and browser-side search experience. It runs without database setup or API credentials. Navigation links for additional sections are present in the layout; the implemented controller endpoint is the home page.

## License

No project license is included in the supplied repository.

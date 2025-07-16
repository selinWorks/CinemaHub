using Microsoft.AspNetCore.Mvc;
using CinemaHub.Models;

namespace CinemaHub.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
          
            return View();
        }
    }
}

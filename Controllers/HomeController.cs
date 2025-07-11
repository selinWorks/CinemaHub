using Microsoft.AspNetCore.Mvc;
using CinemaHub.Models;

namespace CinemaHub.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // JSON veya sabit liste üzerinden film verileri verilebilir
            return View();
        }
    }
}

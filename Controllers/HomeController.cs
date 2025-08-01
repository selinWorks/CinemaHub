using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks; // Required for Task


public class HomeController : Controller
{
    public IActionResult Index()
    {
        return RedirectToAction("HomePage");
    }

    public IActionResult HomePage()
    {
        return View();
    }

    // New Action Method for the Modal
    // This method will be called via AJAX from your JavaScript to get the modal's HTML content.
    [HttpGet]
    public async Task<IActionResult> GetMovieDetailsPartial(int itemId)
    {
        // This line calls your MovieDetailsModalViewComponent.
        // It passes the 'itemId' to the Invoke method of your View Component.
        // The View Component will then fetch the details for that itemId and render its HTML.
        return ViewComponent("MovieDetailsModal", new { itemId = itemId });
    }
}
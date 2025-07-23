using Microsoft.AspNetCore.Mvc;

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
}

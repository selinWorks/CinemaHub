using Microsoft.AspNetCore.Mvc;

public class MyListController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}

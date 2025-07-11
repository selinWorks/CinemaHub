var builder = WebApplication.CreateBuilder(args);

// MVC servisini ekle
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Uygulama yönlendirmeleri
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // wwwroot için gerekli

app.UseRouting();
app.UseAuthorization();

// Varsayılan route
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

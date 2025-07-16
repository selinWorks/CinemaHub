
document.addEventListener("DOMContentLoaded", () => {
    
    const yearSpan = document.querySelector(".footer-bottom span");
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} CinemaHub. All rights reserved.`;
    }

    
    const form = document.querySelector(".newsletter-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = form.email.value.trim();
            if (!email) return; // basit kontrol

            try {
                const res = await fetch("/newsletter/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email })
                });
                if (res.ok) {
                    form.reset();
                    toast("Subscribed! 🎉");
                } else throw new Error("Server error");
            } catch (err) {
                toast("Oops! Something went wrong 😕");
                console.error(err);
            }
        });
    }

    const topBtn = createTopBtn();
    window.addEventListener("scroll", () => {
        topBtn.style.opacity = window.scrollY > 400 ? "1" : "0";
    });
});


function toast(msg) {
    const t = document.createElement("div");
    t.className = "footer-toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

function createTopBtn() {
    const btn = document.createElement("button");
    btn.className = "scroll-top-btn";
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.appendChild(btn);
    return btn;
}

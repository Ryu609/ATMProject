using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ATMTestBLL;
using ATMProjectDAL;
using System.Threading.Tasks;

namespace ATMProject.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View(new Card());
        }       

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<bool> Login(Card model)
        {            
            CardReader cr = new CardReader();
            var isAuthenticated = await cr.AuthenticateAsync(model);

            if (isAuthenticated)
                return true;

            if (cr.RetainCard(model))
            {
                ModelState.AddModelError("", "Your card has been retained. Please contact our nearest branch.");
                return false;
            }

            ModelState.AddModelError("", "The pin is incorrect, please try again");
            return false;
        }

        public ActionResult Withdraw()
        {
            return View();
        }
    }
}
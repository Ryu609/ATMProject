using ATMProjectDAL;
using ATMTestBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace ATMProject.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]        
        public async Task<bool> Login(Card model)
        {
            CardReader cr = new CardReader();
            if (model.Pin == "1234" && model.CardNumber == "1234")
                FormsAuthentication.RedirectFromLoginPage(model.CardNumber, true);
                        
                ModelState.AddModelError("", "The pin is incorrect, please try again");
            return false;            
        }

        public ActionResult Logout()
        {
            Session.Clear();
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
    }
}
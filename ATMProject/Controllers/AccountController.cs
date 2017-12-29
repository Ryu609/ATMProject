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

            var membership = new WebConfigMembershipProvider();           
            if (membership.ValidateUser(model.CardNumber, model.Pin))
            {
                FormsAuthentication.SetAuthCookie(model.CardNumber, true);
                return true;
            }
            else
            {
                model.Attempts++;
                if (model.Attempts > membership.MaxInvalidPasswordAttempts)
                {
                    //CardReader.RetainCard();

                }
            return false;
            }           
        }

        public ActionResult Logout()
        {
            Session.Clear();
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
    }
}
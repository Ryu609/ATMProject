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
        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<JsonResult> Login(Card model)
        {           
            var membership = new WebConfigMembershipProvider();
            var cardReader = new CardReaderService();
            var card = cardReader.GetCard(model.CardNumber);
            if (card.IsReported)
            {
                await cardReader.RetainCardAsync(card.CardNumber);
                
            }
            if (membership.ValidateUser(model.CardNumber, model.Pin))
            {
                FormsAuthentication.SetAuthCookie(model.CardNumber, true);
                card.IsAuthenticated = true;
            }
            return Json(card, JsonRequestBehavior.AllowGet);              
        }

        public void Logout()
        {
            Session.Clear();
            Session.Abandon();
            FormsAuthentication.SignOut();
            FormsAuthentication.RedirectToLoginPage();            
        }
    }
}
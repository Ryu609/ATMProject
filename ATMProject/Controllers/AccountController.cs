﻿using ATMProjectDAL;
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
        public async Task<bool> Login(Card model)
        {
            

            var membership = new WebConfigMembershipProvider();           
            if (membership.ValidateUser(model.CardNumber, model.Pin))
            {
                FormsAuthentication.SetAuthCookie(model.CardNumber, true);
                return true;
            }           
              return false;                       
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
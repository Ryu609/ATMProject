using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ATMProject
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" });

            routes.MapRoute(
              name: "logout",
              url: "Account/Logout",
              defaults: new { controller = "Account", action = "Logout" });

            routes.MapRoute(
                name: "retain",
                url: "CardReader/Retain",
                defaults: new { controller = "CardReader", action = "Retain" });

            routes.MapRoute(
                name: "Transaction",
                url: "Transaction/Index",
                defaults: new { controller = "Transaction", action = "Index" });

            routes.MapRoute(
                name: "Withdraw",
                url: "Transaction/SelectAccount", 
                defaults: new {controller = "Transaction", action = "SelectAccount" });

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index"});
        }
    }
}

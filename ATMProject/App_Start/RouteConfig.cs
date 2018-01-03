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

            routes.RouteExistingFiles = true;

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
                name: "GetAccounts",
                url: "Transaction/GetAccounts/{CardNumber}",
                defaults: new { controller = "Transaction", action = "GetAccounts", CardNumber = ""});

            routes.MapRoute(
                name: "SelectAccount",
                url: "Transaction/SelectAccount/{CardNumber}",
                defaults: new { controller = "Transaction", action = "SelectAccount", CardNumber = "" });

            routes.MapRoute(
                name: "SelectAmount",
                url: "Transaction/SelectAmount/{accountNumber}",
                defaults: new { controller = "Transaction", action = "SelectAmount", accountNumber = "" });

            routes.MapRoute(
                name: "Withdraw",
                url: "Transaction/Withdraw",
                defaults: new { controller = "Transaction", action = "Withdraw" });

            routes.MapRoute(
                name: "Message",
                url: "{page}.html",
                defaults: new { controller = "Home", action = "html", page = UrlParameter.Optional }
                );

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index"});

            
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ATMTestBLL;
using ATMProjectDAL;
using System.Threading.Tasks;
using System.Web.Security;

namespace ATMProject.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()

        {
            return View(new Card());
        }
    }
}
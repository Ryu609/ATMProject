using ATMProjecttDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace ATMProject.Controllers
{
    [Authorize]
    public class TransactionController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        public async Task<int> Withdraw(string CardNumber)
        {
            return 0; 
        }

        [Authorize]
        public async Task<bool> Withdraw(WithdrawViewModel model)
        {
            return false;
        }
    }
}
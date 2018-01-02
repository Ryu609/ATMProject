using ATMProjectDAL;
using ATMProjecttDAL;
using ATMTestBLL;
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
        public ActionResult GetAccounts(string CardNumber)
        {
            var serv = new TransactionService();
            //Get list of accounts in the future
            var accounts = serv.Accounts;
            return Json(accounts, JsonRequestBehavior.AllowGet);
        }

        [Authorize]
        [HttpGet]
        public ActionResult SelectAccount(string cardNumber)
        {            
            return View();
        }

        [Authorize]
        [HttpGet]
        public ActionResult SelectAmount(string accountNumber)
        {
            var ser = new TransactionService();
            var balance = ser.GetBalance(accountNumber);
            var amountretrievable = ser.GetAmountRetrievable(balance);
            return View(amountretrievable);
        }

        [Authorize]
        [HttpPost]
        public bool Withdraw(WithdrawViewModel model)
        {
            bool isSuccess;
            var ser = new TransactionService();
             ser.Retrieve(model, out isSuccess);
            if (isSuccess)
                return true;
            else return false;           
        }
    }
}
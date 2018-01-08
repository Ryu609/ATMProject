using ATMProjectDAL;
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
        public JsonResult GetAccounts(string CardNumber)
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
            var model = new WithdrawViewModel()
            {
                Balance = ser.GetBalance(accountNumber),
                Account = accountNumber                
            };           
            return View(model);
        }

        [Authorize]
        [HttpPost]
        public bool Withdraw(WithdrawViewModel model)
        {            
            var ser = new TransactionService();
            try
            {
                ser.Retrieve(model);
                return true;
            }
            catch (Exception e)
            {
                ser.printErrorStatement(model.Account, e.Message);
                return false;
            }           
        }
    }
}
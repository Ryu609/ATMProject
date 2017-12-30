using ATMTestBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace ATMProject.Controllers
{
    public class CardReaderController : Controller
    {
        [HttpPost]
        public async Task <bool> Retain(string cardNumber)
        {
            CardReaderService cr = new CardReaderService();
            if(await cr.RetainCardAsync(cardNumber))
            return true;
            return false; 
        }
    }
}
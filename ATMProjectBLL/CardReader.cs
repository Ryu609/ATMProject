using ATMProjectService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ATMProjectDAL;

namespace ATMTestBLL
{
    public class CardReader : ICardReader
    {
        public async Task<bool> RetainCardAsync(string cardNumber)
        {
            //Implementation of logic to retain Card
            await Task.Delay(1000);
            return true;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectService
{
   public interface IReceiptPrinter
    {
        void printReceipt(double amount, string account);
         void printErrorStatement(string account, string errorMessage);
    }
}

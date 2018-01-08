using ATMProjectDAL;
using ATMProjectService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMTestBLL
{
    public class TransactionService : ICashDispenser, IReceiptPrinter
    {
        private List<Account> _accounts = new List<Account>() {
                new Account { AccountId = 1,
                CardNumber = 1234,
                AccountNumber = "AJO01223",
                Balance = 2000},
                new Account {
                    AccountId = 1,
                CardNumber = 1234,
                AccountNumber = "AJO01254",
                Balance = 50
                }
        };
        public List<Account> Accounts => _accounts;

        public void Dispense(int unit, int currency,  string account)
        {
            //module to implement the dispenser;
            return;
        }

        public double GetBalance(string accountNumber)
        {
            return Accounts.Where(a => a.AccountNumber == accountNumber).FirstOrDefault().Balance;
        }        

        public void Retrieve(WithdrawViewModel model)
        {
            var total = 0;
            var account = Accounts.Where(a => a.AccountNumber == model.Account).FirstOrDefault();
            foreach (var item in model.Denominator)
            {
                Dispense(item.Unit, item.Currency, model.Account);
                total = total + (item.Unit * item.Currency);
            }
            
            printReceipt(total, model.Account);
            account.Balance -= total;
        }

        public void printReceipt( double amount,string account)
        {
            //module to implement print receipt
            return;
        }

        public void printErrorStatement(string account, string errorMessage)
        {
            //module to implement print error statement
            return;
        }
    }
}

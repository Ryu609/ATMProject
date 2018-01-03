using ATMProjectDAL;
using ATMProjectService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ATMProjecttDAL;

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

        public void Dispense(double amount, string account)
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
           
            var account = Accounts.Where(a => a.AccountNumber == model.Account).FirstOrDefault();
            Dispense(model.Amount, model.Account);
            printReceipt(model.Amount, model.Account);
            account.Balance -= model.Amount;
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

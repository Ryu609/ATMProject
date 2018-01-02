﻿using ATMProjectDAL;
using ATMProjectService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMTestBLL
{
    public class TransactionService : ICashDispenser
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

        public void Dispense(int amount)
        {
            throw new NotImplementedException();
        }

        public double GetBalance(string accountNumber)
        {
            return Accounts.Where(a => a.AccountNumber == accountNumber).FirstOrDefault().Balance;
        }

        public List<int> GetAmountRetrievable(double balance)
        {
            List<int> denomination = new List<int>();
            if (balance > 20) denomination.Add(20);
            if (balance > 50) denomination.Add(50);
            if (balance > 100) denomination.Add(100);
            if (balance > 500) denomination.Add(500);
            if (balance > 1000) denomination.Add(1000);
            return denomination;


        }
    }
}

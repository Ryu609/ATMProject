using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectDAL
{
    public class Account
    {
        public int AccountId { get; set; }
        public string AccountNumber { get; set; }
        public double Balance { get; set; }
        public int CardNumber { get; set; }
    }
}

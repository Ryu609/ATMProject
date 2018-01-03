using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectDAL
{
    public class WithdrawViewModel
    {
        public double Balance { get; set; }
        public int AmountToWithdraw { get; set; }
        public string Account { get; set; }
    }
}

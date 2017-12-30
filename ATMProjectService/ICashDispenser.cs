using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectService
{
    interface ICashDispenser 
    {
        //parameter will be replace by a complex type in iteration 2
        void dispense(int amount);
        
    }
}

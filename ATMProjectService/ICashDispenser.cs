using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectService
{
    public  interface ICashDispenser 
    {
        //parameter will be replace by a complex type in iteration 2
        void Dispense(int amount);        
    }
}

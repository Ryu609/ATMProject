using ATMProjectDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectService
{
    public interface ICardReader
    {
        bool Authenticate(Card card);

        string RetainCard(Card card);        
    }
}

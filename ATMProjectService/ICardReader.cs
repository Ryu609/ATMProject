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
        Task<bool> AuthenticateAsync (Card card);

        bool RetainCard(Card card);        
    }
}

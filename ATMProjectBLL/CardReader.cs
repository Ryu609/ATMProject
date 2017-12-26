using ATMProjectService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ATMProjectDAL;

namespace ATMTestBLL
{
    public class CardReader : ICardReader
    {
        private static string dummyCardNumber = "1234";
        private static string dummyPin = "1234";

        public bool Authenticate(Card cardinfo)
        {
            if (CanCardBeAuthenticated(cardinfo))
            {
                return IsCombinationValid(cardinfo.CardNumber, cardinfo.Pin);
            }
            else
            {
                RetainCard(cardinfo);
                return false;
            }
        }        

        private bool CanCardBeAuthenticated(Card card)
        {
            return card.Trials <= 3;
        }

        public string RetainCard(Card card)
        {
            return "Your Card Has Been Retained. Please Visit Our Nearest Branch";
        }

        private bool IsCombinationValid (string cardNumber, string pin)
        {
            return cardNumber == dummyCardNumber && pin == dummyPin;
        }       
    }
}

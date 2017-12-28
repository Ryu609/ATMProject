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

        public async Task<bool> AuthenticateAsync(Card cardinfo)
        {            
            return IsCombinationValid(cardinfo.CardNumber, cardinfo.Pin);           
        } 

        //public bool RetainCard(Card card)
        //{
        //    card.Trials++;
        //    return card.Trials > 3;             
        //}

        private bool IsCombinationValid (string cardNumber, string pin)
        {
            return cardNumber == dummyCardNumber && pin == dummyPin;
        }

        public bool ShouldRetainCard(int trials)
        {
            return trials > 3;
        }

        
    }
}

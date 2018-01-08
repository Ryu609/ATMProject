using ATMProjectService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ATMProjectDAL;

namespace ATMTestBLL
{
    public class CardReaderService : ICardReader
    {
        private List<Card> _cards = new List<Card>() {
                new Card {
                    CardNumber = "1234", 
                    IsReported = false,
                    IsRetained = false                    
                },
                new Card {
                  CardNumber = "12345",
                  IsReported = true,
                  IsRetained = false,
                }     
        };

        public async Task<bool> RetainCardAsync(Card card)
        {
            //Implementation of logic to retain Card
            await Task.Delay(1000);
            card.IsRetained = true;
            return true;
        }       

        public Card GetCard(string cardNumber)
        {
            return _cards.Where(c => c.CardNumber == cardNumber).FirstOrDefault();
        }

    }
}

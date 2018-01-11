using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectDAL
{
    public class Card
    {
        [Required]
        public string Pin { get; set; }   
        [Required]
        public string CardNumber { get; set; }          
        public bool IsReported { get; set; }
        public bool IsRetained { get; set; }
        public bool IsAuthenticated { get; set; } = false;
    }
}

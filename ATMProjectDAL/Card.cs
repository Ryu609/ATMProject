﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectDAL
{
    public class Card
    {
        public string Pin { get; set; }        
        public string CardNumber { get; set; }  
        public int Attempts { get; set; }
    }
}

﻿using ATMProjectDAL;
using ATMTestBLL;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATMProjectTest
{
   [TestFixture]
   public class TestCardReader
    {
        CardReader cardReader = new CardReader();
        [Test]
        public void TestTrialLessOrEqualToThreeAndPasswordCorrect()
        {
            Card card = new Card()
            {
                CardNumber = "1234",
                IsReported = false,
                Pin = "1234",
                Trials = 3
            };
            
            bool actual = cardReader.Authenticate(card);
            bool expected = true;
            Assert.AreEqual(actual, expected);
            
        }

        [Test]
        public void TestTrialLessOrEqualToThreeAndPasswordIncorrect()
        {
            Card card = new Card()
            {
                CardNumber = "1234",
                IsReported = false,
                Pin = "1233",
                Trials = 3
            };

            bool actual = cardReader.Authenticate(card);
            bool expected = false;
            Assert.AreEqual(actual, expected);
        }

        [Test]
        public void TestTrialGreaterThanThree()
        {
            Card card = new Card()
            {
                CardNumber = "1234",
                IsReported = false,
                Pin = "1234",
                Trials = 4
            };

            bool actual = cardReader.Authenticate(card);
            bool expected = false;
            Assert.AreEqual(actual, expected);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TalPremiumTest.Models
{
    public class Premium
    {
        public string Name { get; set; }

        public decimal Age { get; set; }
        public DateTime DateOfBirth { get; set; }

        public string Occupation { get; set; }

        public decimal DeathSumInsured { get; set; }

    }
}
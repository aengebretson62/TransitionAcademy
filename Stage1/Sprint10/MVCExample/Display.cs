using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCSample
{
    class Display
    {
        /// 

        /// this is the Display class. Its purpose is
        /// to gather the input and display the output
        /// Unlike our usual display I have made the 
        /// variables Class level fields. This is so
        /// the Controller can have access to the fields
        /// through the properties. The Display class
        /// is totally unaware of the Tip class (the model)
        /// or the controller
        /// 

        /// 
        //private fields
        private double perc;
        private double amt;
        private double total;
        private double tipAmount;

        //constructor
        public Display()
        {
            Percentage = 0;
            TipAmount = 0;
            Amt = 0;
            Total = 0;
            GetValues();
        }

        //public properties
        public double TipAmount
        {
            get { return tipAmount; }
            set { tipAmount = value; }
        }


        public double Total
        {
            get { return total; }
            set { total = value; }
        }


        public double Percentage
        {
            get { return perc; }
            set { perc = value; }
        }

        public double Amt
        {
            get { return amt; }
            set { amt = value; }
        }

        //private method for getting input
        //it is called in the constructor
        private void GetValues()
        {
            Console.WriteLine("Enter the Amount of the meal");
            Amt = double.Parse(Console.ReadLine());

            Console.WriteLine("Enter the percent you want to tip");
            Percentage = double.Parse(Console.ReadLine());
        }

        //public method to show output
        //public so I can access it from the controller
        public void ShowTipandTotal()
        {
            Console.WriteLine("Your tip is {0:C}", TipAmount);
            Console.WriteLine("The total will be {0:C}", Total);
            Console.ReadKey();
        }



    }
}

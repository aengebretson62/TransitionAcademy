using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCSample
{
    class TipCalculatorController
    {
        /// 

        /// The TipCalculatorController class brings together 
        /// the display and the tip or model classes
        /// I use the constructor to instantiate the Display.
        /// Instantiating the Display calls its constructor
        /// which calls the Get input method
        /// Once the input is entered I can instantiate
        /// the Tip class and pass the values from the 
        /// Display class. Notice the dot notation and observe
        /// how the two classes interact
        /// 

        private Tip tip;
        private Display display;

        public TipCalculatorController()
        {
            display = new Display();
            tip = new Tip(display.Amt, display.Percentage);
            display.TipAmount = tip.CalculateTip();
            display.Total = tip.CalculateTotal();
            display.ShowTipandTotal();
        }
    }
}

import { useState } from 'react';
  import InputBox from './component/Inputbox'
  import useCurrency from './hook/useCurrency';

  function App() {

    const[amount,setAmount]=useState(0)
    const[from,setFrom]=useState("USD")
    const[to,setTo]=useState("INR")
    const[convertedamount ,setconvertedamount]=useState(0)
    
    const currencyinfo = useCurrency(from)

    const options = Object.keys(currencyinfo)

  

    const swap =()=>{
      setFrom(to)
      setTo(from)
      setconvertedamount(amount)
      setAmount(convertedamount)
    }

    const convert = () => {
    if(currencyinfo && currencyinfo[to]) {
        setconvertedamount(amount * currencyinfo[to])
    }
  }
  
    
      return (
                <div
          className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/174054/pexels-photo-174054.jpeg')",
          }}
        >
          <div className="w-full px-4">
            <div className="max-w-lg w-full mx-auto border border-gray-300 rounded-2xl p-6 backdrop-blur-md bg-white/40 shadow-xl">
                      <form
                          onSubmit={(e) => {
                              e.preventDefault();
                              convert()
                            
                          }}
                      >
                          <div className="w-full text-black mb-1">
                              <InputBox
                                  label="From"
                                  amount={amount}
                                  currencyOptions={options}
                                  onCurrencyChange={(currency)=> setFrom(currency)}
                                  selectCurrency={from}
                                  onAmountChange={(amount)=>setAmount(amount)}
                                  
                              />
                          </div>
                          <div className="relative w-full h-0.5">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                  onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full text-black mt-1 mb-4">
                              <InputBox
                                  label="To"
                                  amount={convertedamount}
                                  currencyOptions={options}
                                  onCurrencyChange={(currency)=> setTo(currency)}
                                  selectCurrency={to}
                                  amountDisable
                                  
                              />
                          </div>
                          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                              Convert {from.toUpperCase()} to {to.toUpperCase()}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      );
  }

  export default App

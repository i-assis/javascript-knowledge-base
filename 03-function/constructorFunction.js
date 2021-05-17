function carro(velocidadeMaxima = 200, delta = 5) 
{
    
    let velocidadeAtual = 0 //! Private attribute.
    
    //! This is a public function first defined inside another function.
    this.acelerar = function () //! 'acelerar' method is public.
    {
        if (velocidadeAtual + delta <= velocidadeMaxima) 
        {
            velocidadeAtual += delta
        } 
        else 
        {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //! This is a public function first defined inside another function.
    this.getVelocidadeAtual = function () //! also is public method.
    {
        return velocidadeAtual
    }

}

//! Experiment #1 - Instantiating a new function/object 'carro'.
const uno = new carro
uno.acelerar() //* This how you invoke a function from inside another.
console.log(uno.getVelocidadeAtual())

//! Experiment #2 - Instantiating a new function/object 'carro'.
const ferrari = new carro(350, 20)
ferrari.acelerar() //* How you invoke a function from inside another.
ferrari.acelerar() //* How you invoke a function from inside another.
ferrari.acelerar() //* How you invoke a function from inside another.
console.log(ferrari.getVelocidadeAtual())

//! Experiment #3 - Investigating types.
console.log(typeof Carro)
console.log(typeof ferrari)
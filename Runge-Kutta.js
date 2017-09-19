//Função da EDO
const f = (x, y) => {
    //return (10 * x) + (2 * y);
    return x * Math.sqrt(y);
    //return - y + x + 2;
};

//Função que calcula o próximo valor de y
const step = (f, x, y, h) => {
    //Calcula k1, k2, k3, k4
    let k1 = f(x, y);
    let k2 = f(x + (h/2), y + (h/2) * k1);
    let k3 = f(x + (h/2), y + (h/2) * k2);
    let k4 = f(x + h, y + h * k3);
 
    //Consolida a solução de y
    return y + h/6 * (k1 + (2 * k2) + (2 * k3) + k4);
};

/*Função principal
    Inputs:
    f = Função da EDO
    x = o x inicial
    y = o y inicial
    h = o tmanho do step
    s = Valor que queremos saber da função
*/
const rungeKutta = (f, x, y, h, s) => {
    //Repete o algoritmo até chegar ao valor aproximado desejado
    while(s >= x){
        let yi = step(f, x, y, h);
        console.log("y(" + x + ") = " + yi);
        x = x + h;
        y = yi;
    }
};

rungeKutta(f, 0, 1, 0.1, 10);

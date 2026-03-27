export default class Operacoes {

    calcular(a, b, operacao) {
        switch (operacao) {
            case "soma":
                return a + b;
            case "subtrai":
                return a - b;
            case "multiplica":
                return a * b;
            case "divide":
                if (b !== 0) {
                    return a / b;
                } else {
                    console.log("Erro: divisão por zero!");
                    return 0;
                }
            default:
                console.log("Operação inválida!");
                return 0;
        }
    }
}
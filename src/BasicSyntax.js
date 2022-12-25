export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        let next = str[i + 1];

        if (current === 'I' && next === 'V') {
            result += 4;
            i++;
            continue;
        }

        if (current === 'I' && next === 'X') {
            result += 9;
            i++;
            continue;
        }

        if (current === 'X' && next === 'L') {
            result += 40;
            i++;
            continue;
        }

        if (current === 'X' && next === 'C') {
            result += 90;
            i++;
            continue;
        }

        if (current === 'C' && next === 'D') {
            result += 400;
            i++;
            continue;
        }

        if (current === 'C' && next === 'M') {
            result += 900;
            i++;
            continue;
        }

        switch (current) {
            case 'I':
                result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    return result;
}

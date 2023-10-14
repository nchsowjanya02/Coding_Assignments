import java.util.*;
public class RomanToInteger {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a Roman number in uppercase: ");
        String roman = sc.nextLine().toUpperCase();
        int result = 0;
        int prevValue = 0;

        for (int i = roman.length() - 1; i >= 0; i--) {
            char currentChar = roman.charAt(i);
            int currValue = 0;

            switch (currentChar) {
                case 'I':
                    currValue = 1;
                    break;
                case 'V':
                    currValue = 5;
                    break;
                case 'X':
                    currValue = 10;
                    break;
                case 'L':
                    currValue = 50;
                    break;
                case 'C':
                    currValue = 100;
                    break;
                case 'D':
                    currValue = 500;
                    break;
                case 'M':
                    currValue = 1000;
                    break;
                default:
                    System.out.println("Invalid Roman numeral character: " + currentChar);
                    return;
            }

            if (currValue < prevValue) {
                 System.out.println("The integer value is = " + currValue);
                
                result -= currValue;
            } else {
                  System.out.println("The integer value is = " + currValue);
                result += currValue;
            }

            prevValue = currValue;
        }

        System.out.println("The result value is = " + result);
    }
}


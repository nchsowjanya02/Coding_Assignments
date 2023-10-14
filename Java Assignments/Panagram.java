import java.util.*;
public class Panagram {
 public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  System.out.println("Enter a String:");
  String str = sc.nextLine();
  str = str.toLowerCase();
  str = str.replaceAll("\\s","");
  int len = str.length();
  boolean isPanagram = true;
  if (len < 26) {
   isPanagram = false;
  } else {
   for (char ch = 'a'; ch <='z'; ch++) {
    if (str.indexOf(ch)< 0) {
     isPanagram = false;
     break;
    }
   }
  }
  System.out.println("Whether the String is a pangram or not? " +
isPanagram);
 }
}
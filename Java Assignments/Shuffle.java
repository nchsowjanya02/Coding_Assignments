import java.util.*;
class Shuffle{
     public static void main(String[]args){
     int arr[]={1,2,3,4,5,6,7};
 Random obj=new Random();
 for(int i=0;i<7;i++){
      int randValue=obj.nextInt(7);

      int temp=arr[i];
      arr[i]=arr[randValue];
      arr[randValue]=temp;
   
 }
 for(int i=0;i<7;i++){
      System.out.print(arr[i]+" ");
 }
 System.out.println();
 }
}
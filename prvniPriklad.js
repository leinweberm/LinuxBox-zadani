// Implementujte funkci
// Deklarace funkce: string print(string)(string) 

//     Code:  print('Hello')('World')
//    Output: Hello World

//     Code:  print('Good')('Luck')
//    Output: Good Luck


function print(...args){
   if([...args].length > 0) {
      return console.log([...args].toString().replace(',', ' '));
   } else {
      return;
   }
};

print('Hello', 'World');
print('Good', 'Luck');
print();
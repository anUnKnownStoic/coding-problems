// A string  && a letter-it's case sensitive
// find its second index of 2nd argument
// ('Hello world!!!','l')=> 3,
// ('Hello world!!!', 'o')=> 7
// ('Hello world!!!', 'A')=> -1
// 

function secondSymbol(s, symbol) {
  return s.indexof(symbol, s.indexof(symbol));
}
